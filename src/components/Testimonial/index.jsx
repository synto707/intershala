import {
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { assets } from "../../assets/assets";
import React, { useState } from "react";
import { desktop } from "../../helper/constants/screensize.js";
import useMediaQuery from "../../helper/hooks/useMediaQuery.js";
import Slider from "../atoms/slider/index.jsx";

const testimonials = [
  {
    title: "Go-to platform for students and freshers",
    message:
      "I landed my first internship from Internshala! This app has opportunities for every student and is a must-have for students looking to build their careers.",
    name: "Yogesh Singh",
    placement: "Placed in Flipkart",
    image: "/avatars/yogesh.jpg",
  },
  {
    title: "Got my dream job at Amazon!",
    message:
      "I applied to Amazon and got the job! It was my dream. I wanted to get into tech but I was from an electrical background. I learned the skills, which came in handy in my interviews. Thanks to Internshala, I was able to explain the concepts and applications well. They helped me with everything.",
    name: "Yaswanth Mandapati",
    placement: "Placed in Amazon",
    image: "/avatars/yaswanth.jpg",
  },
  {
    title: "Turning doubts into success",
    message:
      "I had no idea how to enter the corporate world... eventually led to a job offer from Flipkart.",
    name: "Pankaj",
    placement: "Placed in Star Health and Allied Insurance Co. Ltd",
    image: "/avatars/pankaj.jpg",
  },
  {
    title: "Got my dream job at Amazon!",
    message:
      "I applied to Amazon and got the job! It was my dream. I wanted to get into tech but I was from an electrical background. I learned the skills, which came in handy in my interviews. Thanks to Internshala, I was able to explain the concepts and applications well. They helped me with everything.",
    name: "Yaswanth Mandapati",
    placement: "Placed in Amazon",
    image: "/avatars/yaswanth.jpg",
  }
];

const Testimonial = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDesktopSize] = useMediaQuery(desktop);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const startIndex = currentPage * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  const goToPage = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between min-h-[320px]">
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-500 mb-2">
          {testimonial.title}
        </h3>
        <p className="text-gray-400 text-sm">{testimonial.message}</p>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <UserIcon className="w-6 h-6" />
        <div>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-gray-500 text-xs">{testimonial.placement}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#eef6ff] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-10">
          28,48,723 + placements - read their stories
        </h2>

        {isDesktopSize ? (
          <>
            <div className="flex gap-6 transition-transform duration-300 ease-in-out">
              {currentTestimonials.map((testimonial, index) => (
                <div key={index} className="w-1/3 flex-shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
            <div className="flex justify-center my-8 gap-6 items-center">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 0}
                className={`p-2 rounded-full bg-white shadow ${
                  currentPage === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>

              <div className="flex items-center space-x-3">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`w-3 h-3 rounded-full ${
                      i === currentPage ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                className={`p-2 rounded-full bg-white shadow ${
                  currentPage === totalPages - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </>
        ) : (
          <Slider
            spaceBetween={16}
            dots={true}
            arrows={false}
            slidesPerView={1.1}
            allowTouchMove={true}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Slider>
        )}

        {/* Partner Logos */}
        <div className="w-full bg-white rounded-xl shadow-sm border px-6 py-10 mt-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-8">
            Proud partner of leading government bodies
          </h3>
          <img
            src={`${assets?.companies2}`}
            className="lg:max-w-[850px] mx-auto max-h-[200px] object-contain block"
            alt="Government Partners"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
