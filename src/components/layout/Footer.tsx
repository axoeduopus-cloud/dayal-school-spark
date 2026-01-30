import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-narrow py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground text-lg font-bold text-primary">
                SD
              </div>
              <div>
                <h3 className="text-lg font-bold">Swami Dayal UMV</h3>
                <p className="text-sm text-primary-foreground/70">English Medium School</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              Nurturing young minds with quality education, strong values, and a caring environment since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-base font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Faculty", path: "/faculty" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-base font-semibold">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/70" />
                <p className="text-sm text-primary-foreground/80">
                  123 School Road, City Name,<br />
                  State - 123456, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-foreground/70" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-foreground/70" />
                <a
                  href="mailto:info@swamidayalumv.edu.in"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  info@swamidayalumv.edu.in
                </a>
              </div>
            </div>
          </div>

          {/* School Hours */}
          <div>
            <h4 className="mb-4 text-base font-semibold">School Hours</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/70" />
                <div className="text-sm text-primary-foreground/80">
                  <p className="font-medium text-primary-foreground">Monday - Saturday</p>
                  <p>8:00 AM - 2:30 PM</p>
                </div>
              </div>
              <div className="text-sm text-primary-foreground/80">
                <p className="font-medium text-primary-foreground">Office Hours</p>
                <p>9:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-10 overflow-hidden rounded-lg border border-primary-foreground/20">
          <div className="flex h-48 items-center justify-center bg-primary-foreground/10">
            <div className="text-center">
              <MapPin className="mx-auto mb-2 h-8 w-8 text-primary-foreground/50" />
              <p className="text-sm text-primary-foreground/60">Google Map Placeholder</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Swami Dayal UMV. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Affiliated to CBSE/State Board (Affiliation No: XXXXXX)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
