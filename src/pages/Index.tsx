
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import CoursesSection from "@/components/CoursesSection";
import LifeSection from "@/components/LifeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CertificationsSection from "@/components/CertificationsSection";
import YouTubeVideosSection from "@/components/YouTubeVideosSection";
import CTAOne from "@/components/CTAOne";

const Index = () => {
  return (
    <div className="bg-background font-nunito">
      <Navbar />
      <main>
        <HeroSection />
        <CTAOne />
        <WhySection />
        <CoursesSection />
        {/* YouTube Videos Section */}
        <YouTubeVideosSection />
        <LifeSection />
        <TestimonialsSection />
        <CTASection />
        {/* Certifications Section */}
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

