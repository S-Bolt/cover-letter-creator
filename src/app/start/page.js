import Navbar from "@/components/navbar";
import QuestionsForm from "@/components/Questions/questionsform";
export default function Start() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center mt-16 sm:mt-32 ">
        <h1 className="text-default text-2xl sm:text-5xl ">
          Cover Letter Creation
        </h1>
        <div className="">
          <QuestionsForm />
        </div>
      </div>
    </>
  );
}
