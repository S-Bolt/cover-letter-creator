export default function ProgressBar({ step }) {
  const totalSteps = 7;
  return (
    <div className="flex flex-row space-x-2 my-8 mx-12 ">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`h-6 w-15 rounded-full transition-colors duration-500 ${
            step > index ? "bg-primary" : "bg-gray-200"
          } `}
        ></div>
      ))}
    </div>
  );
}
