import { StarIcon } from "@heroicons/react/24/solid";
export default function TestimonialCards({ children, name }) {
  return (
    <div className="flex flex-col items-center bg-primary-accent rounded-2xl m-4 md:max-w-56 ">
      <div className="flex flex-row my-3">
        <StarIcon className="h-6 w-6 text-primary" />
        <StarIcon className="h-6 w-6 text-primary" />
        <StarIcon className="h-6 w-6 text-primary" />
        <StarIcon className="h-6 w-6 text-primary" />
        <StarIcon className="h-6 w-6 text-primary" />
      </div>
      <p className="text-sm  mx-2">{children}</p>
      <div className="font-semibold my-3">{name}</div>
    </div>
  );
}
