import Layout from "@/components/layout/Layout";
import { CheckCircle, Target, Eye, Award, Users, BookOpen, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "35+", label: "Years of Excellence" },
  { icon: Users, value: "1500+", label: "Happy Students" },
  { icon: BookOpen, value: "80+", label: "Dedicated Teachers" },
  { icon: Award, value: "95%", label: "Success Rate" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container-narrow text-center">
          <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            About Our School
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Learn about our journey, values, and commitment to excellence in education.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                Our Story
              </p>
              <h2 className="heading-primary mb-6">
                Welcome to Swami Dayal UMV
              </h2>
              <div className="space-y-4 text-body">
                <p>
                  Swami Dayal UMV was established in 1985 with a vision to provide 
                  quality English medium education to the children of our community. 
                  Over the past three decades, we have grown into one of the most 
                  respected educational institutions in the region.
                </p>
                <p>
                  Our school is named after the great saint Swami Dayal, whose 
                  teachings of compassion, discipline, and service to society continue 
                  to inspire our educational philosophy. We believe that education goes 
                  beyond textbooks – it shapes character, builds confidence, and prepares 
                  students for life.
                </p>
                <p>
                  With a dedicated team of experienced educators, modern facilities, 
                  and a curriculum that balances academics with co-curricular activities, 
                  we strive to bring out the best in every child who walks through our doors.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                alt="School Building"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-section-light py-12">
        <div className="container-narrow">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground md:text-3xl">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Vision */}
            <div className="card-shadow rounded-xl border border-border bg-card p-6 md:p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Our Vision</h3>
              <p className="text-body">
                To be a center of educational excellence that nurtures young minds 
                into responsible citizens who are academically accomplished, morally 
                upright, and socially conscious. We envision creating leaders who will 
                contribute positively to our nation and the world.
              </p>
            </div>

            {/* Mission */}
            <div className="card-shadow rounded-xl border border-border bg-card p-6 md:p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  "Provide quality education with a focus on holistic development",
                  "Create a safe, inclusive, and nurturing learning environment",
                  "Develop critical thinking and problem-solving skills",
                  "Instill values of discipline, respect, and integrity",
                  "Encourage creativity and innovation in learning",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <div className="mb-10 text-center">
            <h2 className="heading-primary mb-3">Why Parents Trust Us</h2>
            <p className="text-body mx-auto max-w-2xl">
              We take pride in our commitment to providing the best for your children.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Board Affiliation",
                description:
                  "Affiliated to CBSE/State Board with affiliation number XXXXXX. We follow the prescribed curriculum while adding enrichment activities.",
              },
              {
                title: "Experienced Faculty",
                description:
                  "Our team of 80+ teachers are highly qualified, trained, and passionate about education. Regular training ensures up-to-date teaching methods.",
              },
              {
                title: "Safe Environment",
                description:
                  "CCTV surveillance, trained security personnel, and strict visitor protocols ensure the safety of every child on our campus.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
