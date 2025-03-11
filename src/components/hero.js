import Image from "next/image";
import GetStartedButton from "@/components/getStartedButton";

export default function Hero() {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2   items-center justify-center text-center sm:text-left sm:items-start m-2 border-b-6 border-primary sm:h-[25rem] xl:h-[40rem]">
    //   <div className="relative  h-40 sm:h-full  items-center w-full sm:w-1/2  ">
    //     <Image
    //       src="/hero.svg"
    //       alt="Cover Letter Rizz"
    //       layout="fill"
    //       objectFit="contain"
    //       className="self-end"
    //     />
    //   </div>
    //   <div className="flex flex-col m-4   sm:items-start sm:text-left w-full sm:w-1/2 ">
    //     <div className="text-lg sm:mt-24 xl:mt-48 sm:text-2xl xl:text-4xl">
    //       Welcome to
    //     </div>
    //     <div className="text-3xl my-2 sm:my-4 sm:text-4xl xl:text-6xl xl:my-8 ">
    //       <span className="">Cover Letter&nbsp;</span>
    //       <span className=" text-primary">Rizz</span>
    //     </div>
    //     <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl lg:mr-12 xl:mr-16">
    //       Your solution to <span className="text-primary">quickly</span>{" "}
    //       elevating your game and getting&nbsp;
    //       <span className="text-primary">hired.</span>
    //
    // </div>
    <section className="bg-white text-black ">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:h-3/4">
        {/* Image Section (Now on the Left) */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-56 sm:w-64 md:w-fit lg:w-fit">
            <Image
              src="/hero.svg"
              alt="Cover Letter Rizz"
              width={400}
              height={400}
              objectFit="contain"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Text Section (Now on the Right) */}
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
    </section>
  );
}
