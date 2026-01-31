import Layout from "@/components/layout/Layout";
import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Academics from "@/components/sections/Academics";
import Faculty from "@/components/sections/Faculty";
import Sports from "@/components/sections/Sports";
import Gallery from "@/components/sections/Gallery";
import Admissions from "@/components/sections/Admissions";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Academics />
      <Faculty />
      <Sports />
      <Gallery />
      <Admissions />
      <Contact />
    </Layout>
  );
};

export default Index;
