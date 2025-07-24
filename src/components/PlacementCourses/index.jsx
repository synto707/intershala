import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { assets } from "../../assets/assets";

const courses = [
  {
    title: "Full Stack Development Course",
    label: "course with guaranteed job",
    duration: "6 months course",
    salary: "Get placed with ₹3–10 LPA salary",
    opportunities: "1.08 Lac+ opportunities",
    rating: "New",
    image: "/images/fullstack.png",
  },
  {
    title: "Data Science Course",
    label: "course with internship placement",
    duration: "6 months course",
    salary: "Get confirmed ₹40,000 total stipend",
    opportunities: "45,500+ opportunities",
    rating: "4.5",
    image: "/images/datascience.png",
  },
  {
    title: "Human Resource Management Course",
    label: "course with job placement",
    duration: "3 months course",
    salary: "Get placed with ₹3–10 LPA salary",
    opportunities: "2.91 Lac+ opportunities",
    rating: "4.3",
    image: "/images/hr.png",
  },
  {
    title: "Digital Marketing Course",
    label: "course with guaranteed job",
    duration: "5 months course",
    salary: "Get placed with ₹3–10 LPA salary",
    opportunities: "6.25 Lac+ opportunities",
    rating: "4.4",
    image: "/images/marketing.png",
  },
];

const items = [
  { id: 1, image: assets?.Fullstackdev },
  { id: 2, image: assets?.DataScience },
  { id: 3, image: assets?.HumanResource },
  { id: 4, image: assets?.DigitalMarketing },
];

const COURSES_PER_PAGE = 3;

const PlacementCourses = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(courses.length / COURSES_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const visibleCourses = courses.slice(
    currentPage * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE + COURSES_PER_PAGE
  );

  return (
    <section
      className=" py-10 px-4"
      style={{
        backgroundImage: "linear-gradient(180deg,#e9f5ff 0,#c4deff 129.9%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Placement guarantee courses
        </h2>

        <div className="flex flex-wrap gap-4 mb-8">
          {[
            "Guaranteed placement",
            "Get 100% refund if not hired",
            "Become job ready",
          ].map((text, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 border border-blue-300 rounded-full bg-white text-sm"
            >
              ✅ {text}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[420px] transition-all duration-500 ease-in-out">
          {visibleCourses.map((course, idx) => {
            const absoluteIndex = currentPage * COURSES_PER_PAGE + idx;
            return (
              <div
                key={idx}
                className="bg-white relative rounded-xl shadow-md flex flex-col"
              >
                <div className="relative">
                  {items[absoluteIndex] && (
                    <img
                      src={items[absoluteIndex].image}
                      alt={`logo-${items[absoluteIndex].id}`}
                      className="w-full h-fit object-contain"
                    />
                  )}
                  <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    {course.rating}
                  </span>
                </div>

                <div className="p-4 flex-grow">
                  <h4 className="font-semibold mb-1">{course.title}</h4>
                  <p className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded w-fit mb-3 font-medium">
                    {course.label}
                  </p>

                  <ul className="text-sm text-gray-700 space-y-2 mb-4">
                    <li>⏱️ {course.duration}</li>
                    <li>💰 {course.salary}</li>
                    <li>📦 {course.opportunities}</li>
                  </ul>
                </div>
                <a
                  href="#"
                  className="absolute bottom-4 left-4 text-blue-600 text-sm font-medium hover:underline"
                >
                  Know more →
                </a>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="disabled:opacity-50"
          >
            <ChevronLeftIcon className="w-8 h-8 rounded-full bg-white shadow cursor-pointer" />
          </button>

          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === currentPage ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="disabled:opacity-50"
          >
            <ChevronRightIcon className="w-8 h-8 rounded-full bg-white shadow cursor-pointer" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlacementCourses;
