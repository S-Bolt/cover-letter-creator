import Image from "next/image";
import GetStartedButton from "@/components/getStartedButton";

export default function Hero() {
  return (
    <div className="bg-white text-black ">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:h-3/4">
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
          <h1 className="text-xl md:text-2xl lg:text-3xl p-2 text-black tracking-loose">
            Welcome to
          </h1>
          <h2 className="text-3xl md:text-5xl xl:text-6xl leading-relaxed md:leading-snug mb-2">
            <span className="font-serif">Cover Letter&nbsp;</span>
            <span className="font-leckerli text-primary">Rizz</span>
          </h2>
          <p className="text-sm sm:text-base md:text-2xl lg:text-3xl text-black mb-4">
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
