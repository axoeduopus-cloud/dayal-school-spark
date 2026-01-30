import { useState } from "react";
import Layout from "@/components/layout/Layout";

const categories = ["All", "Campus", "Classrooms", "Events", "Sports", "Activities"];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80", category: "Campus", alt: "School Building" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80", category: "Classrooms", alt: "Classroom Learning" },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80", category: "Campus", alt: "Library" },
  { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80", category: "Classrooms", alt: "Science Lab" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80", category: "Sports", alt: "Sports Day" },
  { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80", category: "Events", alt: "School Event" },
  { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80", category: "Campus", alt: "Books" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80", category: "Classrooms", alt: "Students Learning" },
  { src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80", category: "Activities", alt: "Study Session" },
  { src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80", category: "Events", alt: "Annual Day" },
  { src: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&q=80", category: "Sports", alt: "Basketball" },
  { src: "https://images.unsplash.com/photo-1529390079861-591f97c1a4fb?w=800&q=80", category: "Activities", alt: "Art Class" },
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80", category: "Campus", alt: "Campus View" },
  { src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=800&q=80", category: "Events", alt: "Prize Distribution" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", category: "Sports", alt: "Cricket Match" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container-narrow text-center">
          <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Photo Gallery
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Take a glimpse into life at Swami Dayal UMV through our photo gallery.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-narrow">
          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-sm font-medium text-white">{image.alt}</p>
                    <p className="text-xs text-white/70">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
