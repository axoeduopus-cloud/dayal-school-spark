import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-primary text-white">
            <div className="container px-6 md:px-12 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Logo & About */}
                    <div>
                        <img
                            src="/images/logo.png"
                            alt="Swami Dayal UMV Logo"
                            className="h-16 w-16 object-cover mb-4 rounded-full bg-white shadow-md border-2 border-white"
                        />
                        <p className="text-white/70 text-sm leading-relaxed">
                            A value-driven educational institution committed to academic excellence, discipline, and real-world learning since 2009.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {["Home", "About Us", "Academics", "Faculty", "Gallery", "Contact"].map((link) => (
                                <li key={link}>
                                    <button
                                        onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                                        className="text-white/70 hover:text-cta transition-colors text-sm"
                                    >
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-white/70 text-sm">
                                <MapPin className="w-4 h-4 text-cta mt-0.5 flex-shrink-0" />
                                Gonda, Tilka, Shivlal Purva
                            </li>
                            <li className="flex items-center gap-3 text-white/70 text-sm">
                                <Phone className="w-4 h-4 text-cta flex-shrink-0" />
                                <a href="tel:+919838753486" className="hover:text-cta transition-colors">
                                    +91 98387 53486
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-white/10 text-center">
                    <p className="text-white/50 text-sm">
                        © {new Date().getFullYear()} Swami Dayal UMV. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
