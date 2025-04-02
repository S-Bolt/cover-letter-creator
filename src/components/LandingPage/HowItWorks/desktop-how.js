import GetStartedButton from "../getStartedButton";
import Dot from "./dotAnimation";
import Rizz from "./rizzAnimation";

export default function DesktopHow() {
  return (
    <div className="relative bg-background text-default my-24 ">
      <div className=" text-4xl text-center font-bold my-18">How it Works</div>
      {/* Steps Grid */}
      <div className="grid grid-cols-2 max-w-2xl mx-auto">
        {/*Step 1*/}
        <div className="flex flex-col items-center  ">
          <div className="w-15 h-15 flex items-center justify-center bg-circles-h text-circles rounded-full text-2xl font-bold ">
            1
          </div>
          <Dot />
          <Dot />
          <Dot />
        </div>
        <div className="w-5/6  mb-4">
          <h3 className="text-2xl font-semibold text-center mb-1">
            Enter Your Details
          </h3>
          <p className="text-default text-center">
            Start by filling out a quick form with the job details and your
            background.
          </p>
        </div>

        {/*Step 2*/}
        <div className="flex flex-col items-center">
          <div className="w-15 h-15  flex items-center justify-center bg-circles-h text-circles rounded-full text-2xl font-bold ">
            2
          </div>
          <Dot />
          <Dot />
          <Dot />
        </div>
        <div className="w-5/6 mb-4">
          <h3 className="text-2xl font-semibold text-center mb-1">
            Let <Rizz />
            Work Its Magic
          </h3>
          <p className="text-default text-center">
            Our advanced AI tailors a professional cover letter just for you.
          </p>
        </div>

        {/*Step 3*/}
        <div className="flex flex-col items-center">
          <div className="w-15 h-15  flex items-center justify-center bg-circles-h text-circles rounded-full text-2xl font-bold ">
            3
          </div>
          <Dot />
          <Dot />
          <Dot />
        </div>
        <div className="w-5/6 mb-4">
          <h3 className="text-2xl font-semibold text-center mb-1">
            Review and Customize
          </h3>
          <p className="text-default text-center">
            Make any changes to ensure your letter perfectly reflects your voice
          </p>
        </div>

        {/*Step 4*/}
        <div className="flex flex-col items-center">
          <div className="w-15 h-15  flex items-center justify-center bg-circles-h text-circles rounded-full text-2xl font-bold ">
            4
          </div>
          <Dot />
          <Dot />
          <Dot />
        </div>
        <div className="w-5/6  mb-4">
          <h3 className="text-2xl font-semibold text-center mb-1">
            Make it Official
          </h3>
          <p className="text-default text-center">
            Download your ready-to-use cover letter and start landing those
            interviews
          </p>
        </div>

        {/* Get Started Button */}
        <div className="text-center ">
          <GetStartedButton className="rounded-2xl step-button " />
        </div>
      </div>
    </div>
  );
}
