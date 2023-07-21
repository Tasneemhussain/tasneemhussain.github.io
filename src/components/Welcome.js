import "./welcome.css";
import heroimg from "../images/heroimg.png";

const Welcome = () => {
  return (
    <div className="hero" id="hero">
      <img src={heroimg} alt="mountains" className="image-hero" />
      <div class="content">
        <h1>Hey!
          <span className="intro"> I'm a front end developer!</span></h1>
        <p className="intro-para">
          Welcome to my portfolio! Have a look around and send me a message
          through the contact form if you have any questions. I'm looking
          forward to hearing from you! Enjoy your time on my portfolio!
        </p>
      </div>
      <hr className="line" />
    </div>
  );
};

export default Welcome;
