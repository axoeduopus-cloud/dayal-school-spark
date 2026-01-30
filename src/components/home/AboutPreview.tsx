import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "35+ Years of Academic Excellence",
  "Experienced & Dedicated Faculty",
  "Safe & Nurturing Environment",
  "Focus on Holistic Development",
];

const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80"
                alt="Students learning"
                className="h-64 w-full object-cover md:h-80 lg:h-96"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="card-shadow absolute -bottom-6 -right-2 rounded-xl border border-border bg-card p-4 md:-right-6 md:p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cta/20">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">1500+</p>
                  <p className="text-sm text-muted-foreground">Happy Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
              About Our School
            </p>
            <h2 className="heading-primary mb-4">
              Welcome to Swami Dayal UMV
            </h2>
            <p className="text-body mb-6">
              Swami Dayal UMV is a leading English medium school dedicated to 
              providing quality education that nurtures both the mind and character 
              of our students. Our vision is to create responsible citizens who 
              contribute positively to society.
            </p>
            <p className="text-body mb-6">
              With a perfect blend of traditional values and modern teaching 
              methods, we prepare students to face the challenges of tomorrow 
              while staying rooted in our rich cultural heritage.
            </p>

            {/* Highlights */}
            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 shrink-0 text-success" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="outline" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
