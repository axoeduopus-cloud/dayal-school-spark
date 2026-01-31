import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const heroImages = [
    "/images/hero/hero-1.jpg",
    "/images/hero/hero-2.jpg",
    "/images/hero/hero-3.jpg",
    "/images/hero/hero-4.jpg",
    "/images/hero/hero-5.jpg",
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        // Preload images
        heroImages.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const scrollToAdmissions = () => {
        const element = document.getElementById('admissions');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image Slider */}
            {heroImages.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        backgroundImage: `url('${src}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            ))}

            {/* Dark Overlay with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/65 via-primary/50 to-primary/20 pointer-events-none" />

            {/* Content - LEFT ALIGNED, positioned higher */}
            <div className="w-full relative z-10 h-full flex items-center px-4 md:px-10 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl pt-20 md:pt-0"
                >
                    <div className="inline-block px-5 py-2 mb-6 rounded-full bg-cta text-cta-foreground text-sm font-semibold tracking-wide">
                        Admissions Open 2025–26
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-6 leading-tight text-white">
                        Shaping Tomorrow's <br />
                        <span className="text-cta">Responsible & Skilled Citizens</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-xl">
                        Swami Dayal UMV is a value-driven educational institution established in 2009, committed to academic excellence, discipline, and real-world learning.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <Button
                            size="lg"
                            onClick={scrollToAdmissions}
                            className="bg-cta hover:bg-cta/90 text-cta-foreground font-bold h-14 px-8 text-base shadow-lg transition-transform hover:-translate-y-1 rounded-full"
                        >
                            Enroll Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={scrollToContact}
                            className="bg-white hover:bg-white/90 text-primary border-0 h-14 px-8 text-base transition-transform hover:-translate-y-1 rounded-full"
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Contact School
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
