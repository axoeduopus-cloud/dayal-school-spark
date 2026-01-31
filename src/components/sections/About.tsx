import { CheckCircle, Calendar, MapPin, Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 md:py-28 bg-background scroll-mt-20">
            <div className="container px-6 md:px-12">
                {/* Main About Content */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-accent bg-accent/10 rounded-full uppercase">
                            About Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6 leading-tight">
                            About <span className="text-cta">Swami Dayal UMV</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <div className="flex items-start gap-3">
                                <Calendar className="w-5 h-5 text-cta mt-1 flex-shrink-0" />
                                <p><strong>Established in 2009</strong></p>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-cta mt-1 flex-shrink-0" />
                                <p><strong>Located in Gonda, Tilka, Shivlal Purva</strong></p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <p>Dedicated to quality education, discipline, and holistic student development</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                <p>Strong focus on real-world computer skills alongside academics</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/campus-main.jpg"
                                alt="Swami Dayal UMV Campus"
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cta/20 rounded-2xl -z-10" />
                        <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-2xl -z-10" />
                    </motion.div>
                </div>

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-accent/20">
                                <Eye className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            To nurture responsible, skilled, and morally upright citizens who contribute positively to society and excel in their chosen paths.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-cta/10 to-cta/5 border border-cta/20"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-cta/20">
                                <Target className="w-6 h-6 text-cta" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            To provide quality education that balances academic rigor with practical skills, instilling values of discipline, integrity, and lifelong learning.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
