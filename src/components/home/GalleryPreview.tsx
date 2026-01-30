import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    alt: "School Campus",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
    alt: "Classroom Learning",
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
    alt: "Library",
  },
  {
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80",
    alt: "Science Lab",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80",
    alt: "Sports Activity",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
    alt: "School Event",
  },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
              Photo Gallery
            </p>
            <h2 className="heading-primary">
              Life at Swami Dayal UMV
            </h2>
          </div>
          <Link to="/gallery" className="hidden sm:block">
            <Button variant="outline" className="group">
              View All Photos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-52"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="absolute bottom-3 left-3 text-sm font-medium text-white">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/gallery">
            <Button variant="outline" className="group">
              View All Photos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
