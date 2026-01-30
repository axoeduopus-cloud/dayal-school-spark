import { BookOpen, Heart, Laptop } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description:
      "Experienced faculty and a comprehensive curriculum designed to help every student excel academically.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Student Care",
    description:
      "A safe, nurturing environment where every child is valued, respected, and encouraged to grow.",
    color: "bg-success/10 text-success",
  },
  {
    icon: Laptop,
    title: "Modern Learning",
    description:
      "Smart classrooms and computer labs equipped with the latest technology for 21st-century learning.",
    color: "bg-accent/10 text-accent",
  },
];

const ValueCards = () => {
  return (
    <section className="section-padding bg-section-light">
      <div className="container-narrow">
        <div className="mb-10 text-center">
          <h2 className="heading-primary mb-3">Why Choose Us?</h2>
          <p className="text-body mx-auto max-w-2xl">
            We are committed to providing an excellent educational experience for your child.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="card-shadow card-hover rounded-xl border border-border bg-card p-6 text-center md:p-8"
            >
              <div
                className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full ${value.color}`}
              >
                <value.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueCards;
