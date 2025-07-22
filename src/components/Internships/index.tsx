import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

// Example job data (same as yours)
const jobsData = {
  "Big brands": [
    {
      title: "Customer Service Associate",
      company: "Paisabazaar",
      location: "Gurgaon",
      salary: "₹ 2,55,000 - 4,00,000 /year",
      activelyHiring: true,
      logo: "/logos/paisabazaar.png",
    },
    {
      title: "Digital Marketing Executive",
      company: "IREED Academy India Private Limited",
      location: "Gurgaon",
      salary: "₹ 2,00,000 - 2,40,000 /year",
      activelyHiring: true,
      logo: "",
    },
    {
      title: "Graphic Designer",
      company: "IDEX",
      location: "Bangalore",
      salary: "₹ 2,40,000 - 4,00,000 /year",
      activelyHiring: true,
      logo: "",
    },
    {
      title: "Corporate Sales Executive",
      company: "IREED Academy India Private Limited",
      location: "Gurgaon",
      salary: "₹ 2,50,000 - 3,00,000 /year",
      activelyHiring: true,
      logo: "",
    },
    {
      title: "Graphic Designer",
      company: "IDEX",
      location: "Bangalore",
      salary: "₹ 2,40,000 - 4,00,000 /year",
      activelyHiring: true,
      logo: "",
    },
    {
      title: "Customer Service Associate",
      company: "Paisabazaar",
      location: "Gurgaon",
      salary: "₹ 2,55,000 - 4,00,000 /year",
      activelyHiring: true,
      logo: "/logos/paisabazaar.png",
    },
  ],
  "Work from home": [],
  "Part-time": [],
  MBA: [],
  Engineering: [],
  Media: [],
  Design: [],
  "Data Science": [],
};

const tabs = Object.keys(jobsData);
const JOBS_PER_PAGE = 4;

const InternshipSlider = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [currentPage, setCurrentPage] = useState(0);

  const jobs = jobsData[activeTab] || [];
  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0); // reset to first page on tab change
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const visibleJobs = jobs.slice(
    currentPage * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE + JOBS_PER_PAGE
  );

  return (
    <section
      className="py-10 px-4"
      style={{
        backgroundImage: "linear-gradient(180deg,#e9f5ff 0,#c4deff 129.9%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold mb-6">Internships</h3>

        <div className="flex flex-wrap gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-2 rounded-full border ${
                tab === activeTab
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {visibleJobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out transform animate-slide-in">
            {visibleJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm flex flex-col justify-between"
              >
                {job.activelyHiring && (
                  <span className="text-sm font-medium text-blue-600 border border-gray-300 px-2 py-1 rounded w-fit mb-2">
                    🔼 Actively hiring
                  </span>
                )}
                <div className="mb-4">
                  <h4 className="font-semibold">{job.title}</h4>
                  <p className="text-sm text-gray-600">{job.company}</p>
                </div>
                <div className="text-sm text-gray-700 flex flex-col gap-2 mb-4">
                  <p>📍 {job.location}</p>
                  <p>💰 {job.salary}</p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="px-2 py-1 rounded bg-gray-100 text-gray-600">
                    Job
                  </span>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline flex items-center gap-1"
                  >
                    View details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">
            No jobs available in this category.
          </p>
        )}

        {visibleJobs.length > 0 && (
          <div className="flex justify-center mt-10 gap-4 items-center">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="disabled:opacity-50"
            >
              <ChevronLeftIcon className="w-8 h-8 rounded-full bg-white shadow" />
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
              <ChevronRightIcon className="w-8 h-8 rounded-full bg-white shadow" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InternshipSlider;
