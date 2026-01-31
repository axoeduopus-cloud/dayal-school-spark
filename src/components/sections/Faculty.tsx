import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const leaders = [
    {
        name: "Veneeta Pandey",
        role: "Principal",
        experience: "10+ years in education",
        image: "/images/faculty/principal.jpg",
        quote: "True education is not just about filling minds with knowledge, but igniting hearts with wisdom and values."
    },
    {
        name: "Krishn Kumar Pandey (K.K. Pandey)",
        role: "Manager",
        experience: "15+ years in education",
        image: "/images/faculty/manager.jpg",
        quote: "The foundation of a great nation is built in the classrooms of its schools."
    },
];

const Faculty = () => {
    return (
        <section id="faculty" className="py-24 bg-background scroll-mt-20">
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
                            Our Team
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                            Leadership & <span className="text-cta">Faculty</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Dedicated educators committed to nurturing the next generation.
                        </p>
                    </motion.div>
                </div>

                {/* Leadership Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image - Fixed aspect ratio with proper centering */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="inline-block px-4 py-1.5 bg-cta text-cta-foreground text-sm font-semibold rounded-full shadow-lg">
                                        {leader.role}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-1">{leader.name}</h3>
                                <p className="text-muted-foreground text-sm mb-5">{leader.experience}</p>

                                {/* Highlighted Quote */}
                                <div className="relative bg-gradient-to-br from-cta/10 to-accent/10 rounded-xl p-5 border-l-4 border-cta">
                                    <Quote className="w-8 h-8 text-cta/40 absolute -top-2 -left-1" />
                                    <p className="text-foreground font-medium italic text-sm leading-relaxed pl-4">
                                        "{leader.quote}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faculty;
