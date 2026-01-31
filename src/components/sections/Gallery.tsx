import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Campus", "Classrooms", "Sports"];

const galleryImages = [
    // Campus images
    { src: "/images/hero/hero-1.jpg", category: "Campus", alt: "School Building" },
    { src: "/images/hero/hero-3.jpg", category: "Campus", alt: "Campus Grounds" },
    { src: "/images/hero/hero-4.jpg", category: "Campus", alt: "School Facade" },
    { src: "/images/hero/hero-5.jpg", category: "Campus", alt: "Playground Area" },

    // Classroom images
    { src: "/images/hero/hero-2.jpg", category: "Classrooms", alt: "Morning Assembly" },
    { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80", category: "Classrooms", alt: "Students Learning" },
    { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80", category: "Classrooms", alt: "Computer Lab" },
    { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80", category: "Classrooms", alt: "Library Reading" },



    // Sports images - reuse the generated images
    { src: "/images/sports-activities.png", category: "Sports", alt: "Sports Activities" },
    { src: "/images/yoga-fitness.png", category: "Sports", alt: "Yoga & Fitness" },

    { src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80", category: "Sports", alt: "Football Practice" },
];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages =
        activeCategory === "All"
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeCategory);

    return (
        <section id="gallery" className="py-24 bg-section-light scroll-mt-20">
            <div className="container px-6 md:px-12">
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-widest uppercase">
                        Life at Swami Dayal
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-8">
                        Campus Gallery
                    </h2>

                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                                    : "bg-white border border-border text-muted-foreground hover:bg-white/80"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <AnimatePresence>
                        {filteredImages.map((image, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                key={`${image.category}-${index}`}
                                className="group relative aspect-square overflow-hidden rounded-xl bg-muted"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                        <p className="text-white font-medium">{image.alt}</p>
                                        <p className="text-white/70 text-xs uppercase tracking-wide">{image.category}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
