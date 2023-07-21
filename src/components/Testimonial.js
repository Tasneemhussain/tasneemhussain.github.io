import "./testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
          <h2> TESTIMONIALS</h2>
      <div className="testimonial" id="testimonial">
      
      <div>
      
        <Slider className="slider" {...settings}>
         
          <div className="box">
            <h3>1</h3>
            <p>gjhghjfghfvjkghjfgdcvhjmngfxcvghgjmnbv</p>
            <h4>hgbjhjkhjvjn </h4>
          </div>
          <div className="box">
            <h3>jkjhkjnkn</h3>
            <p>lorem ipsum</p>
          </div>
          <div className="box">
            <h3>3</h3>
          </div>
          <div className="box">
            <h3>4</h3>
          </div>
          <div className="box">
            <h3>5</h3>
          </div>
          <div className="box">
            <h3>6</h3>
          </div>
          
        </Slider>
      </div>
        
      </div>

      <hr className="line" />
    </>
  );
};

export default Testimonial;
