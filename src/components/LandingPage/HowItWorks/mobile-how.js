import GetStartedButton from "../getStartedButton";
import Dot from "./dotAnimation";
import Rizz from "./rizzAnimation";

export default function MobileHow() {
  return (
    <div className="bg-background my-12 ">
      <div className="text-2xl text-center font-bold my-12">How it Works</div>
      {/* Steps Grid */}
      <div className="grid grid-cols-1  max-w-2xl mx-auto">
        {/*Step 1*/}
        <div className="flex flex-col items-center ">
          <div className="w-10 h-10 flex items-center justify-center bg-circles-h text-circles rounded-full text-lg font-bold step-circle">
            1
          </div>
          <Dot />{" "}
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-center">
            Enter your details
          </h3>
          <p className="text-default text-center">
            Start by filling out a quick form with the job details and your
            background.
          </p>
        </div>
        {/*Step 2*/}
        <div className="flex flex-col items-center">
          <Dot />{" "}
          <div className="w-10 h-10 flex items-center justify-center bg-circles-h text-circles  rounded-full text-lg font-bold step-circle">
            2
          </div>
          <Dot />{" "}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-center">
            Let <Rizz />
            Work Its Magic
          </h3>
          <p className="text-default text-center">
            Our advanced AI tailors a profesional cover letter just for you.
          </p>
        </div>
        {/*Step 3*/}
        <div className="flex flex-col items-center">
          <Dot />{" "}
          <div className="w-10 h-10 flex items-center justify-center bg-circles-h text-circles  rounded-full text-lg font-bold step-circle">
            3
          </div>
          <Dot />{" "}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-center">
            Review and Customize
          </h3>
          <p className="text-default text-center">
            Make any changes to ensure your letter perfectly reflects your voice
          </p>
        </div>
        {/*Step 4*/}
        <div className="flex flex-col items-center">
          <Dot />{" "}
          <div className="w-10 h-10 flex items-center justify-center bg-circles-h text-circles  rounded-full text-lg font-bold step-circle">
            4
          </div>
          <Dot />{" "}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-center">Seal the Deal</h3>
          <p className="text-default text-center">
            Download your ready-to-use cover letter and start landing those
            inverviews
          </p>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="flex flex-col items-center">
        <Dot />{" "}
        <div className="text-center ">
          <GetStartedButton className="rounded-2xl py-2 px-4" />
        </div>
      </div>
    </div>
  );
}
