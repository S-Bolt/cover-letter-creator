import Navbar from "@/components/navbar";
import QuestionsForm from "@/components/Questions/questionsform";
export default function Start() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center mt-16 sm:mt-32 ">
        <div className="text-default text-2xl sm:text-5xl ">
          Time for the Rizz.
        </div>
        <div className="">
          <QuestionsForm />
        </div>
      </div>
    </>
  );
}
