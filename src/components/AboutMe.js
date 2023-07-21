import "./about.css";
import aboutimg from "../images/aboutimg.png";

const AboutMe = () => {
  return (
    <div className="about" id="about">
      <div className="row justify-content-around mt-5 ">
        <div className="col-6 align-self-center">
          <h1 className="abt-title">ABOUT ME</h1>
          <p className="abt-para">
            Hi! My name is Tasneem Tajamull Hussain. I'm an Indian with
            a passion for creating beautiful and well-functioning websites. I'm
            a nature enthusiast with a love for photography . I'm always
            on the lookout for the next adventure and will jump at any
            opportunity to grow and learn something new. My passion for web
            development started as a curiosity for how websites work, which lead
            to a couple of months spending every free minute I had learning HTML
            and CSS through pluralsight. To my great pleasure I was accepted
            into Sundgården Folkhögskola intensive course for front end development.
            I now spend every day working on improving my programming skills and
            diving deep into the fascinating world of web programming and
            design.
          </p>
        </div>
        <div className="col-6 ">
          <img src={aboutimg} alt="laptop-img" className="about-img" />
        </div>
      </div>
      <hr className="line" />
    </div>
  );
};

export default AboutMe;
