import BuildResume from "./components/BuildResume/index.jsx";
import CertificateCourses from "./components/CertificateCourses/index.jsx";
import EmpowerCareer from "./components/EmpowerCareer/index.jsx";
import Footer from "./components/Footer/index.jsx";
import HeroBanner from "./components/HeroBanner/index.jsx";
import InternshipSlider from "./components/Internships/index.jsx";
import JobsSlider from "./components/Jobs/index.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import PlacementCourses from "./components/PlacementCourses/index.jsx";
import Testimonial from "./components/Testimonial/index.jsx";
import TrendingNow from "./components/Trending/index.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto">
        <HeroBanner />
        <TrendingNow />
        <Testimonial />
        <JobsSlider />
        <InternshipSlider />
        <PlacementCourses />
        <CertificateCourses />
        <BuildResume />
        <EmpowerCareer />
        <Footer />
      </div>
    </div>
  );
};

export default App;
