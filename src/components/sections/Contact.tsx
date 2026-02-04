import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-primary scroll-mt-20">
            <div className="container px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-cta bg-cta/20 rounded-full uppercase">
                            Get in Touch
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                            Contact <span className="text-cta">Us</span>
                        </h2>
                        <p className="text-white/70 text-lg">
                            Have questions? We'd love to hear from you.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-cta/20">
                                <MapPin className="w-6 h-6 text-cta" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                                <p className="text-white/70">Gonda, Tilka, Shivlal Purva</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-cta/20">
                                <Phone className="w-6 h-6 text-cta" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                                <a href="tel:+919838753486" className="text-white/70 hover:text-cta transition-colors">
                                    +91 98387 53486
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-cta/20">
                                <Mail className="w-6 h-6 text-cta" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                                <a href="mailto:pandaykk791@gmail.com" className="text-white/70 hover:text-cta transition-colors">
                                    pandaykk791@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="pt-4">
                            <a
                                href="https://wa.me/919838753486?text=Hello%2C%20I%20am%20interested%20in%20Swami%20Dayal%20UMV"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    {/* Google Maps Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 overflow-hidden h-full min-h-[350px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.5!2d81.9!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c8f0f0f0f0%3A0x0!2sGonda%2C%20Tilka%2C%20Shivlal%20Purva!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: "12px", minHeight: "330px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Swami Dayal UMV Location"
                            />
                        </div>
                        {/* Map Overlay Link */}
                        <a
                            href="https://maps.app.goo.gl/UqaXjdhqU6TKhqA59"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 bg-cta hover:bg-cta/90 text-cta-foreground font-semibold rounded-lg transition-colors text-sm shadow-lg"
                        >
                            <MapPin className="w-4 h-4" />
                            Open in Google Maps
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
