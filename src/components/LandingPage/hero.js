"use client";
import Image from "next/image";
import GetStartedButton from "@/components/LandingPage/getStartedButton";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-background text-default  lg:mx-8 xl:mx-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:min-h-screen">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-56 sm:w-64 md:w-fit lg:w-fit">
            <Image
              src="/hero.svg"
              alt="Cover Letter Rizz"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Text Section  */}
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-center p-5 text-center md:text-left md:items-start">
          <h1 className="text-xl md:text-2xl lg:text-3xl p-2 text-default tracking-loose">
            Welcome to
          </h1>
          <h2 className="text-3xl md:text-5xl xl:text-6xl leading-relaxed md:leading-snug mb-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.7 },
                },
              }}
            >
              <motion.span
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="font-serif"
              >
                Cover Letter&nbsp;
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="font-leckerli text-primary"
              >
                Rizz
              </motion.span>
            </motion.div>
          </h2>
          <p className="text-sm sm:text-base md:text-2xl lg:text-3xl text-default mb-4">
            Your solution to <span className="text-primary">quickly</span>{" "}
            elevating your game and getting&nbsp;
            <span className="text-primary">hired.</span>
          </p>
          <div>
            <GetStartedButton className="py-3 px-6 rounded-3xl mx-auto sm:mx-0 xl:px-12 lg:text-xl xl:mt-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
