import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About Us", path: "#about" },
    { name: "Academics", path: "#academics" },
    { name: "Faculty", path: "#faculty" },
    { name: "Gallery", path: "#gallery" },
    { name: "Contact", path: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white shadow-lg py-2"
                : "bg-transparent py-4"
                }`}
        >
            <div className="container flex items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <button
                    onClick={() => scrollToSection('home')}
                    className="flex items-center gap-3 focus:outline-none"
                >
                    <img
                        src="/images/logo.png"
                        alt="Swami Dayal UMV Logo"
                        className="h-14 w-14 object-cover rounded-full bg-white shadow-md border-2 border-white"
                    />
                </button>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.path)}
                            className={`text-sm font-medium transition-colors hover:text-cta ${isScrolled ? "text-foreground" : "text-white"
                                }`}
                        >
                            {link.name}
                        </button>
                    ))}
                    <Button
                        onClick={() => scrollToSection('#admissions')}
                        className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold px-6 rounded-full"
                    >
                        Admissions Open
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
                    ) : (
                        <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t"
                >
                    <div className="container py-4 px-4 flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.path)}
                                className="py-3 px-4 text-left text-foreground hover:bg-muted rounded-lg transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                        <Button
                            onClick={() => scrollToSection('#admissions')}
                            className="mt-2 bg-cta hover:bg-cta/90 text-cta-foreground font-semibold rounded-full"
                        >
                            Admissions Open
                        </Button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
