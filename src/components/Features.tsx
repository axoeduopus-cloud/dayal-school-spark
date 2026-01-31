import { BookOpen, Users, Globe, Trophy, Monitor, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: BookOpen,
        title: "Academic Excellence",
        description: "Rigorous curriculum designed to challenge and inspire students to reach their full potential.",
    },
    {
        icon: Heart,
        title: "Holistic Development",
        description: "Focus on character building, emotional intelligence, and physical well-being alongside academics.",
    },
    {
        icon: Monitor,
        title: "Smart Classrooms",
        description: "State-of-the-art technology integration to enhance learning experiences.",
    },
    {
        icon: Globe,
        title: "Global Citizenship",
        description: "Preparing students to be responsible citizens in an interconnected world.",
    },
    {
        icon: Users,
        title: "Expert Faculty",
        description: "Experienced educators dedicated to mentoring and guiding every student.",
    },
    {
        icon: Trophy,
        title: "Sports & Arts",
        description: "World-class facilities for sports, music, dance, and creative arts.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Features = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-cta font-bold tracking-widest uppercase mb-4 text-sm">Why Choose Us</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-heading leading-tight">
                            Building a Foundation for a <br className="hidden md:block" /> Brighter Future
                        </h3>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                            We provide a nurturing environment where every child is encouraged to explore, question, and discover their true potential.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group p-10 rounded-xl bg-white border border-border/50 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-4 font-heading">{feature.title}</h4>
                            <p className="text-muted-foreground leading-relaxed text-base">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
