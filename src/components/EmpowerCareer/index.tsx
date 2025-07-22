import React from "react";
import { assets } from "../../assets/assets";
import footerBgImage from "../../assets/imgi_48_footer_bg_767.png";

const EmpowerCareer = () => {
  return (
    <div
      className="py-12 px-4 text-white"
      style={{ backgroundImage: `url(${footerBgImage})`, width: "100%" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            Empower your career with <br /> Internshala today
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-col">
            <div className="flex md:flex-row items-center gap-4">
              <button className="bg-white text-gray-800 py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium">
                <img src={`${assets?.google}`} className="w-4 h-4" />
                <span>Continue with Google</span>
              </button>
              <button className="bg-[#376cb2] text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium">
                <img src={`${assets?.email}`} className="w-6 h-6" />
                <span>Continue with Email</span>
              </button>
            </div>
            <div className="text-end text-sm text-white mt-4">
              By continuing, you agree to our{" "}
              <a href="#" className="underline font-medium">
                T&C.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpowerCareer;
