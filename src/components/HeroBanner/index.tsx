import { assets } from "../../assets/assets";

const HeroBanner = () => {
  return (
    <div className="relative w-full overflow-hidden z-10">
      <div className="relative w-full min-h-[450px]">
        <img
          src={`${assets?.heroBannerBg}`}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                India's <span className="text-[#ffce49]">#1 Platform</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                For fresher jobs, internships and courses
              </p>

              <div className="flex space-x-4">
                <button className="bg-white text-gray-800 py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium">
                  <img src={`${assets?.google}`} className="w-4 h-4" />
                  <span>Continue with Google</span>
                </button>
                <button className="bg-[#376cb2] text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium">
                  <img src={`${assets?.email}`} className="w-6 h-6" />
                  <span>Continue with Email</span>
                </button>
              </div>

              <p className="text-sm mt-6">
                By continuing, you agree to our T&C.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[1200px]">
          <img
            src={`${assets?.profession}`}
            alt="profession"
            className="w-full h-auto object-contain max-h-[70vh]"
          />
        </div>
        <div className="absolute z-10 bottom-0 w-full bg-blue-900 py-2 overflow-hidden">
          <div className="px-20 mx-auto flex items-center space-x-8 container">
            <div className="text-white font-medium">
              <span className="text-lg">10K+</span>
              <p className="text-sm">Openings daily</p>
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="animate-marquee whitespace-nowrap flex space-x-8">
                <img
                  src={`${assets?.companies}`}
                  className="h-full inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
