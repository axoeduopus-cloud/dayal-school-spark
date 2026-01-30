import {
  BookOpen,
  Users,
  Microscope,
  Monitor,
  Trophy,
  Bus,
  Shield,
  Music,
} from "lucide-react";

const facilities = [
  { icon: BookOpen, label: "Well-Stocked Library" },
  { icon: Microscope, label: "Science Laboratories" },
  { icon: Monitor, label: "Computer Labs" },
  { icon: Users, label: "Smart Classrooms" },
  { icon: Trophy, label: "Sports Facilities" },
  { icon: Music, label: "Music & Arts Room" },
  { icon: Bus, label: "School Transport" },
  { icon: Shield, label: "Safe Campus" },
];

const FacilitiesSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Our Facilities
          </p>
          <h2 className="heading-primary mb-3">
            Everything Your Child Needs
          </h2>
          <p className="text-body mx-auto max-w-2xl">
            Our campus is equipped with modern facilities to support comprehensive learning and development.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-primary/30 hover:bg-primary/5"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <facility.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">
                {facility.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
