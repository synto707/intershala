import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { assets } from "../../assets/assets";

const courses = [
  {
    title: "Web Development",
    duration: "8 weeks",
    rating: 4.1,
    learners: "91,313 learners",
    image: assets.WebDev,
  },
  {
    title: "Programming with Python",
    duration: "6 weeks",
    rating: 4.1,
    learners: "73,600 learners",
    image: assets.Python,
  },
  {
    title: "Digital Marketing",
    duration: "8 weeks",
    rating: 4.1,
    learners: "56,913 learners",
    image: assets.Marketing,
  },
  {
    title: "Machine Learning",
    duration: "6 weeks",
    rating: 4.5,
    learners: "28,103 learners",
    image: assets.MachineLearning,
  },
];

const items = [
  { id: 1, image: assets?.WebDevelopment },
  { id: 2, image: assets?.Python },
  { id: 3, image: assets?.DigitalMarketing2 },
  { id: 4, image: assets?.MachineLearning },
];

const COURSES_PER_PAGE = 3;

const CertificateCourses = () => {
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
          Popular certification courses
        </h2>
        <h6>Fastest way to build your CV</h6>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[200px] transition-all duration-500 mt-10 ease-in-out">
          {visibleCourses.map((course, idx) => {
            const absoluteIndex = currentPage * COURSES_PER_PAGE + idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg shadow flex flex-col"
              >
                {items[absoluteIndex] && (
                  <img
                    src={items[absoluteIndex].image}
                    alt={`logo-${items[absoluteIndex].id}`}
                    className="w-full h-fit object-contain"
                  />
                )}
                <div className="py-2 px-4 flex flex-col gap-2">
                  <p className="text-gray-500 text-sm mb-1">
                    {course.duration}
                  </p>
                  <h4 className="font-semibold mb-1">{course.title}</h4>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-yellow-400">★</span>
                    <span>{course.rating}</span>
                    <span className="text-gray-500 ml-2">
                      {course.learners}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 text-sm mt-auto hover:underline"
                  >
                    Know more &gt;
                  </a>
                </div>
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

export default CertificateCourses;
