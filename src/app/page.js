import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/HowItWorks/howItWorks";
import Testimonials from "@/components/Testimonials/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background  text-default min-h-screen ">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}
