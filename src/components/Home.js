import Sidebar from "./Sidebar";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Mywork from "./Mywork";
import Contact from "./Contact";
import "./home.css";
//  import Testimonial from './Testimonial';

const Home = () => {
  return (
    <div className="container-fluid d-flex">
      <div className="sidebar_container">
        <Sidebar />
      </div>
      <div className="content">
        <Welcome />
        <AboutMe />
        <Skills />
        <Mywork />
        {/* <Testimonial />    */}
        <Contact />
      </div>
    </div>

    // <BrowserRouter>
    //   <Sidebar>
    //     <Routes>
    //       <Route path="/" element={<Welcome />} />
    //       <Route path="/about" element={<AboutMe />} />

    //     </Routes>
    //   </Sidebar>
    // </BrowserRouter>
  );
};

export default Home;
