import Layout from "@/components/layout/Layout";

const facultyMembers = [
  { name: "Dr. Ramesh Kumar", designation: "Principal", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Mrs. Sunita Sharma", designation: "Vice Principal", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Mr. Anil Verma", designation: "Head of Science", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Mrs. Priya Singh", designation: "Head of English", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "Mr. Rajesh Gupta", designation: "Mathematics Teacher", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Mrs. Meera Patel", designation: "Hindi Teacher", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "Mr. Vikram Rao", designation: "Physical Education", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
  { name: "Mrs. Anjali Dubey", designation: "Computer Science", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Mr. Suresh Nair", designation: "Social Science", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
  { name: "Mrs. Kavita Joshi", designation: "Art & Craft", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80" },
  { name: "Mr. Deepak Tiwari", designation: "Music Teacher", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&q=80" },
  { name: "Mrs. Rekha Agarwal", designation: "Primary Section Head", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
];

const Faculty = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container-narrow text-center">
          <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Our Faculty
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Meet our dedicated team of experienced educators committed to nurturing young minds.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="mb-10 text-center">
            <p className="text-body mx-auto max-w-2xl">
              Our faculty comprises highly qualified and passionate educators who bring years 
              of experience and expertise to guide students towards academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
            {facultyMembers.map((member, index) => (
              <div
                key={index}
                className="card-shadow card-hover overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm font-semibold text-foreground md:text-base">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                    {member.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-section-light py-12">
        <div className="container-narrow text-center">
          <h2 className="heading-secondary mb-3">Join Our Team</h2>
          <p className="text-body mx-auto mb-6 max-w-xl">
            We are always looking for passionate educators. If you share our vision 
            for quality education, we'd love to hear from you.
          </p>
          <a
            href="mailto:careers@swamidayalumv.edu.in"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Faculty;
