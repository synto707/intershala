import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  const footerSections = [
    {
      title: "Internships by places",
      links: [
        "Internship in India",
        "Internship in Delhi",
        "Internship in Bangalore",
        "Internship in Hyderabad",
        "Internship in Mumbai",
        "Internship in Chennai",
        "Internship in Gurgaon",
        "Internship in Kolkata",
        "Virtual internship",
        "View all internships",
      ],
    },
    {
      title: "Internship by Stream",
      links: [
        "Computer Science Internship",
        "Electronics Internship",
        "Mechanical Internship",
        "Civil Internship",
        "Marketing Internship",
        "Chemical Internship",
        "Finance Internship",
        "Summer Research Fellowship",
        "Campus Ambassador Program",
        "View all internships",
      ],
    },
    {
      title: "Jobs by Places",
      links: [
        "Jobs in Delhi",
        "Jobs in Mumbai",
        "Jobs in Bangalore",
        "Jobs in Jaipur",
        "Jobs in Kolkata",
        "Jobs in Hyderabad",
        "Jobs in Pune",
        "Jobs in Chennai",
        "Jobs in Lucknow",
        "View all jobs",
      ],
    },
    {
      title: "Jobs by Stream",
      links: [
        "Marketing jobs",
        "Content writing jobs",
        "Web development jobs",
        "Sales jobs",
        "Finance jobs",
        "Digital Marketing jobs",
        "Computer Science jobs",
        "Graphic Design jobs",
        "Data Science jobs",
        "View all jobs",
      ],
    },
    {
      title: "Placement Guarantee Courses",
      links: [
        "Full Stack Development",
        "Data Science",
        "Human Resource Management",
        "Digital Marketing",
        "UI/UX Design",
        "Product Management",
        "Financial Modelling",
        "Supply Chain Logistics",
        "Banking Sales",
        "Software Testing",
      ],
    },
  ];

  const footerLinks = [
    "About us",
    "We're hiring",
    "Hire interns for your company",
    "Post a Job",
    "Team Diary",
    "Blog",
    "Our Services",
    "Free Job Alerts",
    "Terms & Conditions",
    "Privacy",
    "Contact us",
    "Resume Maker",
    "Sitemap",
    "College TPO registration",
    "List of Companies",
    "Jobs for Women",
  ];

  return (
    <footer className="bg-gray-900 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm font-light">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-2 text-white">{section.title}</h4>
              <ul className="space-y-1">
                {section.links.map((link, idx) => (
                  <li key={idx} className="hover:underline cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 text-sm">
          <span className="font-semibold">Certification Courses</span>{" "}
          <span className="bg-orange-500 px-2 py-0.5 rounded text-xs font-bold">
            OFFER
          </span>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm mb-6">
          {footerLinks.map((link, i) => (
            <div key={i} className="hover:underline cursor-pointer">
              {link}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 gap-4">
          <div className="flex items-center gap-4">
            <button className="bg-black text-white px-4 py-2 flex items-center gap-2 rounded border border-white">
              <FaGooglePlay />
              Get it on Play Store
            </button>
            <button className="bg-black text-white px-4 py-2 flex items-center gap-2 rounded border border-white">
              <FaApple />
              Download on App Store
            </button>
            <div className="flex items-center gap-4 text-lg">
              <FaInstagram className="cursor-pointer w-4 h-4" />
              <FaTwitter className="cursor-pointer w-4 h-4" />
              <FaYoutube className="cursor-pointer w-4 h-4" />
              <FaLinkedin className="cursor-pointer w-4 h-4" />
            </div>
          </div>

          <div className="text-sm mt-6 text-gray-400">
            © Copyright 2025 Internshala (Scholiverse Educare Private Limited)
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
