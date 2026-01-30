import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(220 25% 15% / 0.55), hsl(220 25% 15% / 0.75)), url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80')`,
        }}
      />

      <div className="container-narrow relative z-10 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Admission Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cta px-4 py-2 text-sm font-semibold text-cta-foreground shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cta-foreground/60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cta-foreground"></span>
            </span>
            Admissions Open 2025–26
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Building Tomorrow's Leaders with{" "}
            <span className="text-cta">Quality Education</span> & Strong Values
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg leading-relaxed text-white/80 md:text-xl">
            Swami Dayal UMV has been nurturing young minds for over 35 years, 
            providing a safe, caring, and academically excellent environment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button
                size="lg"
                className="w-full bg-cta text-cta-foreground shadow-lg hover:bg-cta/90 sm:w-auto"
              >
                Admission Enquiry
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact School
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 30.8C384 29 480 34 576 42.3C672 50.7 768 62.3 864 62.5C960 62.7 1056 51.3 1152 45.8C1248 40.3 1344 40.7 1392 40.8L1440 41V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="hsl(0, 0%, 100%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
