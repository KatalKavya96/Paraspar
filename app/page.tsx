import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Wellbeing from "@/components/Wellbeing";
import ServicesOrbit from "@/components/ServicesOrbit";
import StatsBar from "@/components/StatsBar";
import WhyChoose from "@/components/WhyChoose";
import Experts from "@/components/Experts";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <Hero />
      <Wellbeing />
      <ServicesOrbit />
      <StatsBar />
      <WhyChoose />
      <Experts />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
