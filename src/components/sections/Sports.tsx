import { Dumbbell, Heart } from "lucide-react";
import { motion } from "framer-motion";

const sportsActivities = [
    "Badminton",
    "Football",
    "Cricket",
    "Rope Skipping",
];

const physicalDevelopment = [
    "Yoga",
    "Cardio Training",
    "Fitness Tests",
];

const Sports = () => {
    return (
        <section id="sports" className="py-24 bg-section-light scroll-mt-20">
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
                            Beyond Academics
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                            Sports & <span className="text-cta">Physical Development</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Building healthy bodies and strong minds through sports and fitness.
                        </p>
                    </motion.div>
                </div>

                {/* Two Columns with Images */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Sports Activities */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border"
                    >
                        {/* Image */}
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src="/images/sports-activities.png"
                                alt="Students playing sports"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="p-3 rounded-xl bg-cta/10">
                                    <Dumbbell className="w-6 h-6 text-cta" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">Sports Activities</h3>
                            </div>
                            <ul className="space-y-3">
                                {sportsActivities.map((activity, index) => (
                                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                                        <span className="w-2 h-2 rounded-full bg-cta" />
                                        {activity}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Physical Development */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border"
                    >
                        {/* Image */}
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src="/images/yoga-fitness.png"
                                alt="Students doing yoga and fitness"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="p-3 rounded-xl bg-accent/10">
                                    <Heart className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">Physical Development</h3>
                            </div>
                            <ul className="space-y-3">
                                {physicalDevelopment.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                                        <span className="w-2 h-2 rounded-full bg-accent" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Sports;
