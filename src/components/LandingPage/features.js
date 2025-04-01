/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Features() {
  return (
    <div className="">
      <div className="flex flex-col m-6 md:flex-row gap-8 md:gap-16 md:mt-12">
        {/* Indivdual Feature */}

        <div className="flex flex-col items-center text-center ">
          <div className="max-w-1/3 md:max-w-1/2">
            <Image
              src="/undraw_stand-out.svg"
              alt="Cover Letter Rizz"
              width={100}
              height={100}
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto"
            />
          </div>
          <h1 className="font-bold text-lg m-2">Tailored Specific to You</h1>
          <p className="text-sm sm:text-base sm:mx-16 md:mx-0 ">
            Experience a cover letter that's uniquely yours. Our AI personalizes
            each letter based on your experience, skills, and the job you're
            targeting
          </p>
        </div>
        {/* Indivdual Feature */}
        <div className="flex flex-col items-center text-center">
          <div className="max-w-1/3 md:max-w-1/2">
            <Image
              src="/undraw_stand-out.svg"
              alt="Cover Letter Rizz"
              width={100}
              height={100}
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto"
            />
          </div>
          <h1 className="font-bold text-lg m-2">Tailored Specific to You</h1>
          <p className="text-sm sm:text-base sm:mx-16 md:mx-0">
            Experience a cover letter that's uniquely yours. Our AI personalizes
            eachletter based onyour experience, skills, and the job you're
            targeting
          </p>
        </div>
        {/* Indivdual Feature */}
        <div className="flex flex-col items-center text-center">
          <div className="max-w-1/3 md:max-w-1/2">
            <Image
              src="/undraw_stand-out.svg"
              alt="Cover Letter Rizz"
              width={100}
              height={100}
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto"
            />
          </div>
          <h1 className="font-bold text-lg m-2">Tailored Specific to You</h1>
          <p className="text-sm sm:text-base sm:mx-16 md:mx-0 ">
            Experience a cover letter that's uniquely yours. Our AI personalizes
            eachletter based onyour experience, skills, and the job you're
            targeting
          </p>
        </div>
      </div>
    </div>
  );
}
