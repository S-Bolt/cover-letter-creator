import GetStartedButton from "../getStartedButton";
import Rizz from "./rizzAnimation";

export default function DesktopHow() {
  return (
    <div className="bg-white mt-24 ">
      <div className="text-4xl text-center font-bold my-18">How it Works</div>
      {/* Steps Grid */}
      <div className="grid grid-cols-2 max-w-2xl mx-auto">
        {/*Step 1*/}
        <div className="flex flex-col items-center  ">
          <div className="w-15 h-15 flex items-center justify-center bg-circles text-white rounded-full text-2xl font-bold ">
            1
          </div>
          <div className="w-1 h-1 bg-primary my-2 "></div>{" "}
          <div className="w-1 h-1 bg-primary my-2 "></div>{" "}
          <div className="w-1 h-1 bg-primary my-2 "></div>{" "}
        </div>
        <div className="w-5/6  mb-4">
          <h3 className="text-2xl font-semibold text-center mb-1">
            Enter Your Details
          </h3>
          <p className="text-gray-600 text-center">
            Start by filling out a quick form with the job details and your
            background.
          </p>
        </div>

        {/*Step 2*/}
        <div className="flex flex-col items-center">
          <div className="w-15 h-15  flex items-center justify-center bg-circles text-white rounded-full text-2xl font-bold ">
            2
          </div>
          <div className="w-1 h-1 bg-primary my-2"></div>{" "}
          <div className="w-1 h-1 bg-primary my-2"></div>{" "}
          <div className="w-1 h-1 bg-primary my-2"></div>{" "}
        </div>
        <div className="w-5/6 mb-4">
          <h3 className="text-2xl font-semibold text-center mb-1">
            Let <Rizz />
            Work Its Magic
          </h3>
          <p className="text-gray-600 text-center">
            Our advanced AI tailors a profesional cover letter just for you.
          </p>
        </div>

        {/*Step 3*/}
        <div className="flex flex-col items-center">
          <div className="w-15 h-15  flex items-center justify-center bg-circles text-white rounded-full text-2xl font-bold ">
            3
          </div>
          <div className="w-1 h-1 bg-primary my-2"></div>{" "}
          <div className="w-1 h-1 bg-primary my-2"></div>{" "}
          <div className="w-1 h-1 bg-primary my-2"></div>{" "}
        </div>
        <div className="w-5/6 mb-4">
          <h3 className="text-2xl font-semibold text-center mb-1">
            Review and Customize
          </h3>
          <p className="text-gray-600 text-center">
            Make any changes to ensure your letter perfectly reflects your voice
          </p>
        </div>

        {/*Step 4*/}
        <div className="flex flex-col items-center">
          <div className="w-15 h-15  flex items-center justify-center bg-circles text-white rounded-full text-2xl font-bold ">
            4
          </div>
          <div className="w-1 h-1 bg-primary my-2"></div>{" "}
          <div className="w-1 h-1 bg-primary my-2"></div>{" "}
          <div className="w-1 h-1 bg-primary my-2"></div>{" "}
        </div>
        <div className="w-5/6  mb-4">
          <h3 className="text-2xl font-semibold text-center mb-1">
            Seal the Deal
          </h3>
          <p className="text-gray-600 text-center">
            Download your ready-to-use cover letter and start landing those
            inverviews
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
