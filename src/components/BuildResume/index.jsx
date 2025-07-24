import React from "react";
import resumeImage from "../../assets/imgi_46_r991_v1.webp"; // <-- update path to your image

const BuildResume = () => {
  return (
    <section className="bg-[#e9f5ff] py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl md:p-10 flex flex-col md:flex-row items-center justify-evenly shadow-sm">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            No resume? No problem.
          </h2>
          <p className="text-gray-700 mb-5">
            Let us help you create one or improve the one you've got.
          </p>

          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">◆</span> AI-powered resume builder
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">◆</span> Intelligent feedback
              engine
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">◆</span> Optimized for freshers
            </li>
          </ul>

          <button className="bg-[#0096f1] hover:bg-[#0080d4] text-white font-semibold px-5 py-2 rounded-md transition-all">
            Build my resume →
          </button>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <img
            src={resumeImage}
            alt="Resume Preview"
            className="max-w-full h-fit object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BuildResume;
