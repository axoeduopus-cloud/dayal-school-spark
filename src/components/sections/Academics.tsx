import { BookOpen, Monitor, Users, Lightbulb, GraduationCap, Laptop } from "lucide-react";
import { motion } from "framer-motion";

const academicsFeatures = [
    { icon: BookOpen, title: "Structured Curriculum", description: "Well-designed syllabus focusing on conceptual clarity and progressive learning." },
    { icon: Lightbulb, title: "Conceptual Clarity", description: "Emphasis on understanding core concepts rather than rote memorization." },
    { icon: Users, title: "Student-Centric Learning", description: "Personalized attention and interactive teaching methods for every student." },
];

const skillFeatures = [
    { icon: Laptop, title: "Real-World Computer Education", description: "Hands-on training in essential computer applications and digital tools." },
    { icon: Monitor, title: "Practical Digital Skills", description: "Learning practical software skills applicable in academic and professional life." },
    { icon: GraduationCap, title: "Career-Ready Preparation", description: "Preparing students for modern academic and career demands." },
];

const Academics = () => {
    return (
        <section id="academics" className="py-24 bg-section-light scroll-mt-20">
            <div className="container px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-accent bg-accent/10 rounded-full uppercase">
                            Education
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                            Academics & <span className="text-cta">Skill-Based Learning</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            A balanced approach combining strong academics with practical skills for holistic development.
                        </p>
                    </motion.div>
                </div>

                {/* Academics Section */}
                <div className="mb-16">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
                    >
                        <BookOpen className="w-6 h-6 text-cta" />
                        Academics
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {academicsFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group p-6 rounded-2xl bg-white border border-border hover:border-cta/30 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="p-3 rounded-xl bg-cta/10 w-fit mb-4 group-hover:bg-cta/20 transition-colors">
                                    <feature.icon className="w-6 h-6 text-cta" />
                                </div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skill-Based Learning Section */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
                    >
                        <Laptop className="w-6 h-6 text-accent" />
                        Skill-Based Learning
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {skillFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group p-6 rounded-2xl bg-white border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                                    <feature.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Academics;
