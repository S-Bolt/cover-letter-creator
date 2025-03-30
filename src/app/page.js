import Navbar from "@/components/Navbar/navbar";
import Hero from "@/components/LandingPage/hero";
import Features from "@/components/LandingPage/features";
import HowItWorks from "@/components/LandingPage/HowItWorks/howItWorks";
import Testimonials from "@/components/LandingPage/Testimonials/testimonials";
import Footer from "@/components/LandingPage/footer";

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
