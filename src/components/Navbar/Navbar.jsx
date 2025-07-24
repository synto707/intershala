import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import {
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const navLinks = [
    {
      name: "Jobs",
      path: "/jobs",
      submenu: {
        sections: [
          {
            label: "Top Locations",
            items: [
              "Work from home",
              "Jobs in Delhi",
              "Jobs in Mumbai",
              "Jobs in Bangalore",
              "Jobs in Hyderabad",
              "Jobs in Kolkata",
              "Jobs in Chennai",
              "Jobs in Pune",
              "Jobs in Jaipur",
              "View all jobs",
            ],
          },
          {
            label: "Top Categories",
            items: ["Engineering", "Marketing", "Design", "Content", "Finance"],
          },
          {
            label: "Explore More Jobs",
            items: ["Remote jobs", "Part-time jobs", "Women jobs"],
          },
          {
            label: "Placement Guarantee Courses",
            items: [],
            badge: "NEW",
          },
        ],
      },
    },
    {
      name: "Internships",
      path: "/internships",
      submenu: {
        sections: [
          {
            label: "Top Locations",
            items: [
              "Internships in Delhi",
              "Internships in Mumbai",
              "Internships in Bangalore",
              "Internships in Hyderabad",
              "Internships in Kolkata",
              "Internships in Chennai",
              "Internships in Pune",
            ],
          },
          {
            label: "Top Categories",
            items: ["Engineering", "Marketing", "Design"],
          },
          {
            label: "Explore More Internships",
            items: [],
          },
          {
            label: "Placement Guarantee Courses",
            items: [],
            badge: "NEW",
          },
        ],
      },
    },
    {
      name: "Courses",
      path: "/courses",
      submenu: [
        { name: "Programming", path: "/courses/programming" },
        { name: "Design", path: "/courses/design" },
      ],
    },
  ];

  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setActiveSection(0);
  };

  return (
    <nav className="relative z-[100] py-3 backdrop-blur-lg bg-white shadow-sm">
      {/* Top Bar */}
      <div className="container mx-auto px-4 flex items-center justify-between md:justify-start gap-4">
        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
          <Bars3Icon className="w-6 h-6 text-black" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={assets?.logo} alt="logo" className="h-9 opacity-80" />
        </Link>

        {/* Desktop Nav */}
        <div
          className="hidden md:flex gap-8 ml-10 relative"
          onMouseLeave={handleMouseLeave}
        >
          {navLinks.map((link, idx) => {
            const submenu = link.submenu;
            const isMegaMenu =
              submenu && typeof submenu === "object" && "sections" in submenu;
            const isCoursesMenu = link.name === "Courses";

            return (
              <div key={idx} className="relative group">
                <button
                  onMouseEnter={() => {
                    setActiveMenu(idx);
                    setActiveSection(0);
                  }}
                  className="inline-flex items-center gap-1 font-medium text-gray-700 hover:text-black"
                >
                  {link.name}
                  {link.name === "Courses" && (
                    <span className="ml-1 px-1 text-[10px] font-semibold bg-[#FF8C00] text-white rounded-sm">
                      OFFER
                    </span>
                  )}
                  <ChevronDownIcon className="w-4 h-4 text-gray-400 group-hover:text-black" />
                </button>

                {/* Mega Menu */}
                {activeMenu === idx && isMegaMenu && (
                  <div className="absolute left-0 top-full mt-2 w-[700px] bg-white shadow-xl rounded-md z-50 flex ring-1 ring-black/5">
                    <div className="w-1/3 p-4 border-r">
                      {submenu.sections.map((section, sIdx) => (
                        <div
                          key={sIdx}
                          onMouseEnter={() => setActiveSection(sIdx)}
                          className={`cursor-pointer text-sm font-medium mb-2 ${
                            activeSection === sIdx
                              ? "text-blue-600 font-semibold"
                              : "text-gray-800 hover:text-blue-600"
                          }`}
                        >
                          {section.label}
                          {section.badge && (
                            <span className="ml-2 text-xs bg-yellow-400 text-white px-2 py-0.5 rounded">
                              {section.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="w-2/3 p-4">
                      {submenu.sections[activeSection]?.items?.length > 0 ? (
                        <ul className="space-y-1">
                          {submenu.sections[activeSection].items.map(
                            (item, i) => (
                              <li key={i}>
                                <Link
                                  to="#"
                                  className="text-sm text-gray-700 hover:underline"
                                >
                                  {item}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-500">
                          No items available
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Courses Dropdown */}
                {activeMenu === idx &&
                  isCoursesMenu &&
                  Array.isArray(submenu) && (
                    <div className="absolute left-0 mt-2 w-[600px] bg-white shadow-lg rounded-md ring-1 ring-black/5 z-50 p-6 grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800 mb-2">
                          Certification Courses
                        </h4>
                        <ul className="space-y-1">
                          {[
                            "Web Development",
                            "Programming with Python",
                            "Digital Marketing",
                            "Machine Learning",
                            "Advanced Excel",
                            "AutoCAD",
                            "Data Science",
                            "Programming with C and C++",
                            "View 70+ more courses",
                          ].map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={"#"}
                                className={`text-sm text-gray-700 hover:underline ${
                                  item.toLowerCase().includes("view")
                                    ? "font-semibold"
                                    : ""
                                }`}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800 mb-2">
                          Placement Guarantee Courses
                        </h4>
                        <ul className="space-y-1">
                          {[
                            "Full Stack Development Course",
                            "Data Science Course",
                            "Human Resource Management Course",
                            "Digital Marketing Course",
                            "UI/UX Design Course",
                            "Product Management Course",
                            "Financial Modelling Course",
                            "Supply Chain Logistics Course",
                            "Banking Sales Course",
                            "Software Testing Course",
                          ].map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to="#"
                                className="text-sm text-gray-700 hover:underline"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
              </div>
            );
          })}
        </div>

        {/* Search (Desktop only) */}
        <div className="hidden md:flex items-center ml-auto">
          <button className="border px-4 py-2 min-w-[120px] text-sm rounded-full text-gray-500 flex items-center gap-2">
            <img src={assets?.searchIcon} alt="search" className="h-4 w-4" />
            Search
          </button>

          <button className="ml-4 border border-[#008BDC] text-[#008BDC] px-6 py-[7px] rounded-md">
            Login
          </button>
          <button className="ml-2 bg-[#008BDC] text-white px-6 py-[7px] rounded-md">
            Register
          </button>

          <div className="pl-4 flex items-center gap-2">
            <p className="text-[#008BDC] font-medium">For Employers</p>
            <ChevronRightIcon className="w-5 h-5 text-[#008BDC]" />
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-black bg-opacity-50">
          <div className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg p-5 overflow-y-auto">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <XMarkIcon className="w-6 h-6 mb-4 text-gray-600" />
            </button>
            <nav className="space-y-4 text-sm text-gray-800">
              <Link
                to="/internships"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Internships
              </Link>
              <Link to="/jobs" onClick={() => setIsMobileMenuOpen(false)}>
                Jobs
              </Link>
              <div className="flex items-center gap-2">
                <Link
                  to="/courses/certification"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Certification Courses
                </Link>
                <span className="bg-[#FF8C00] text-white text-xs font-semibold px-2 py-0.5 rounded">
                  OFFER
                </span>
              </div>
              <Link
                to="/courses/guarantee"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Placement Guarantee Courses
              </Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>

              <hr className="my-4" />

              <Link
                to="/register/student"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register - As a Student
              </Link>
              <Link
                to="/register/employer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register - As an Employer
              </Link>
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                Login
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
