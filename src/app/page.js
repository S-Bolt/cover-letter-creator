import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/HowItWorks/howItWorks";
import Testimonials from "@/components/Testimonials/testimonials";

export default function Home() {
  return (
    <div className="bg-background dark:bg-background-dark text-black  dark:text-white min-h-screen lg:mx-8 xl:mx-16">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />

      {/*Footer*/}
    </div>
  );
}
