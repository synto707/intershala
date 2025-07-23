import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
type MegaMenuSection = {
  label: string;
  items: string[];
  badge?: string;
};

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
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState(0);

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setActiveSection(0);
  };

  return (
    <nav className="relative z-[100] py-3 backdrop-blur-lg">
      <div className="container flex items-center justify-between px-4 mx-auto relative lg:text-sm">
        <div className="flex items-center gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img
                src={`${assets?.logo}`}
                alt="logo"
                className={`h-9 opacity-80`}
              />
            </Link>
          </div>

          <div
            className="hidden md:flex gap-8 relative"
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
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.72-3.7a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

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

                  {/* Simple Dropdown */}
                  {activeMenu === idx &&
                    !isMegaMenu &&
                    !isCoursesMenu &&
                    Array.isArray(submenu) && (
                      <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md ring-1 ring-black/5 z-50">
                        {submenu.map((item, i) => (
                          <Link
                            key={i}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center">
          <div className="border-r border-gray-200 pr-4">
            <button
              className={`border px-4 py-2 min-w-[120px] md:flex items-center gap-2 text-sm font-light rounded-full cursor-pointer text-gray-400`}
            >
              <img
                src={`${assets?.searchIcon}`}
                alt="search"
                className={`h-4 w-4 text-black`}
              />
              Search
            </button>
          </div>
          <div className="hidden md:flex items-center border-r border-gray-200 pr-4">
            <button className="border border-[#008BDC] text-[#008BDC] px-10 py-[7px] rounded-md ml-4 cursor-pointer">
              Login
            </button>
            <button className="bg-[#008BDC] text-white px-10 py-[7px] rounded-md ml-4 cursor-pointer">
              Register
            </button>
          </div>
          <div className="pl-4 flex flex-row gap-2 items-center">
            <p className="text-[#008BDC] font-medium">For Employers </p>
            <span>
              <ChevronRightIcon className="w-6 h-6 text-[#008BDC]"/>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
