import { useState } from "react";
import { MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        toast({
            title: "Enquiry Submitted!",
            description: "We will contact you soon.",
        });

        setFormData({ name: "", phone: "", message: "" });
        setIsSubmitting(false);
    };

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
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-cta/20">
                                <MapPin className="w-6 h-6 text-cta" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                                <p className="text-white/70">Gonda, Tilka, Shivlal Purva</p>
                            </div>
                        </div>

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

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/919838753486?text=Hello%2C%20I%20am%20interested%20in%20Swami%20Dayal%20UMV"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Chat on WhatsApp
                        </a>
                    </motion.div>

                    {/* Enquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-xl font-bold text-white mb-6">Send an Enquiry</h3>

                            <div className="space-y-4">
                                <div>
                                    <Input
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cta"
                                    />
                                </div>
                                <div>
                                    <Input
                                        placeholder="Phone Number"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cta"
                                    />
                                </div>
                                <div>
                                    <Textarea
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows={4}
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cta resize-none"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-semibold h-12 rounded-xl"
                                >
                                    {isSubmitting ? "Sending..." : "Send Enquiry"}
                                    <Send className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
