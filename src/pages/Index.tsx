import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ValueCards from "@/components/home/ValueCards";
import AboutPreview from "@/components/home/AboutPreview";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValueCards />
      <AboutPreview />
      <FacilitiesSection />
      <GalleryPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
