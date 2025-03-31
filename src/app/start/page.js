import Navbar from "@/components/Navbar/navbar";
import QuestionsForm from "@/components/CLGenerator/Questions/questionsform";

export default function Start() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center mt-16 sm:mt-32 ">
        <div className="w-full">
          <QuestionsForm />
        </div>
      </div>
    </>
  );
}
