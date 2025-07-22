import {
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { assets } from "../../assets/assets";
import React from "react";

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
      "I had no idea how to enter the corporate world, what kind of job would be a good fit for me, or where to even start. Internshala guided me through the entire process, helping me build the right skills and confidence. Thanks to their support and resources, I was able to secure an internship, which eventually led to a job offer from Flipkart.",
    name: "Pankaj",
    placement: "Placed in Star Health and Allied Insurance Co. Ltd",
    image: "/avatars/pankaj.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-[#eef6ff] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-10">
          28,48,723 + placements - read their stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-500 mb-2">
                  {testimonial.title}
                </h3>
                <p className="text-gray-400 text-sm">{testimonial.message}</p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                {<UserIcon className="w-6 h-6" />}
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.placement}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots (Static UI) */}
        <div className="flex justify-center my-8 gap-4">
          <button>
            <ChevronLeftIcon className="w-8 h-8 rounded-full bg-white shadow" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
          <button>
            <ChevronRightIcon className="w-8 h-8 rounded-full bg-white shadow" />
          </button>
        </div>

        <div className="w-full bg-white rounded-xl shadow-sm border px-6 py-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-8">
            Proud partner of leading government bodies
          </h3>
          <img
            src={`${assets?.companies2}`}
            className="max-w-[850px] mx-auto max-h-[200px] object-contain block"
            alt="Government Partners"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
