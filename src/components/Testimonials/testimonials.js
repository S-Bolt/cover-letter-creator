/* eslint-disable react/no-unescaped-entities */

import TestimonialCards from "./testimonialCards";

export default function Testimonials() {
  return (
    <div className="m-4 text-center ">
      <div className="text-2xl font-bold md:text-3xl md:mb-4">
        What our customers say
      </div>
      {/*Testimonials*/}
      <div className="flex flex-col sm:flex-row justify-center lg:gap-4 xl:gap-8">
        {/*Card*/}
        <TestimonialCards name="User 101">
          {" "}
          We're currently gathering feedback from early users. Check back soon
          for real stories on how CoverLetterRizz is transforming job
          applications.
        </TestimonialCards>
        <TestimonialCards name="User 102">
          {" "}
          We're currently gathering feedback from early users. Check back soon
          for real stories on how CoverLetterRizz is transforming job
          applications.
        </TestimonialCards>
        <TestimonialCards name="User 103">
          {" "}
          We're currently gathering feedback from early users. Check back soon
          for real stories on how CoverLetterRizz is transforming job
          applications.
        </TestimonialCards>
      </div>
    </div>
  );
}
