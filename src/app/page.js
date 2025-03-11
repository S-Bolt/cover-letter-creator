import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/navbar";

import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="bg-background dark:bg-background-dark text-black  dark:text-white min-h-screen lg:mx-8 xl:mx-16">
      <Navbar />
      <Hero />
      <div className="bg-primary h-10"></div>
      {/*Features*/}
      {/*How it Works*/}
      {/*Testimonials*/}
      {/*Footer*/}
    </div>
  );
}
