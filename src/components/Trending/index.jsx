import { useState } from "react";
import { assets } from "../../assets/assets.js";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { desktop } from "../../helper/constants/screensize.js";
import useMediaQuery from "../../helper/hooks/useMediaQuery.js";
import Slider from "../atoms/slider/index.jsx";

const TrendingNow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktopSize] = useMediaQuery(desktop);

  const items = [
    { id: 1, image: assets?.trending1 },
    { id: 2, image: assets?.trending2 },
    { id: 3, image: assets?.trending3 },
    { id: 4, image: assets?.trending4 },
    { id: 5, image: assets?.trending5 },
    { id: 6, image: assets?.trending6 },
  ];
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= items.length - 3;

  const nextSlide = () => {
    if (!isAtEnd) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (!isAtStart) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
        Trending now
      </h1>

      <div className="relative overflow-hidden">
        {isDesktopSize ? (
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="lg:w-1/3 max-w-full flex-shrink-0 px-2"
              >
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt={`Trending item ${item.id}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <Slider
            slidesPerView={1}
            spaceBetween={16}
            dots={true}
            arrows={true}
            allowTouchMove={true}
          >
            {items.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={`Trending item ${item.id}`}
                className="w-full h-full object-cover rounded-lg"
              />
            ))}
          </Slider>
        )}

        {isDesktopSize && (
          <button
            onClick={prevSlide}
            disabled={isAtStart}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 ${
              isAtStart ? "opacity-50" : "hover:bg-gray-100"
            }`}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        )}
        {isDesktopSize && (
          <button
            onClick={nextSlide}
            disabled={isAtEnd}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 ${
              isAtEnd ? "opacity-50" : "hover:bg-gray-100"
            }`}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TrendingNow;
