import BuildResume from "./components/BuildResume/index.tsx";
import CertificateCourses from "./components/CertificateCourses/index.tsx";
import EmpowerCareer from "./components/EmpowerCareer/index.tsx";
import Footer from "./components/Footer/index.tsx";
import HeroBanner from "./components/HeroBanner/index.tsx";
import InternshipSlider from "./components/Internships/index.tsx";
import JobsSlider from "./components/Jobs/index.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import PlacementCourses from "./components/PlacementCourses/index.tsx";
import Testimonial from "./components/Testimonial/index.tsx";
import TrendingNow from "./components/Trending/index.tsx";

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
