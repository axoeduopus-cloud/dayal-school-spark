import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="container-narrow">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <h2 className="mb-3 text-2xl font-bold text-primary-foreground md:text-3xl">
              Ready to Give Your Child the Best Education?
            </h2>
            <p className="text-base text-primary-foreground/80">
              Admissions are now open for 2025–26. Contact us today to schedule 
              a school visit or submit an enquiry.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/contact">
              <Button
                size="lg"
                className="w-full bg-cta text-cta-foreground shadow-lg hover:bg-cta/90 sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4" />
                Admission Enquiry
              </Button>
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
