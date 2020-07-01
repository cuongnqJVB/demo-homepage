// import Swiper from "swiper";
// import React, { Component } from "react";
// import "swiper/css/swiper.min.css";
// import "swiper/js/swiper.min.js";
// import "./style.scss";

// class Swiper extends Component {
//   componentDidMount() {
//     var mySwiper = new Swiper (".swiper-container", {
//         preloadImages: false,
//         lazy: true,
//         pagination: ".swiper-pagination",
//         paginationClickable: true,
//         slidesPerView: 1,
//         spaceBetween: 10,
//         keyboardControl: true,
//         a11y: true,
//         nextButton: ".swiper-button-next",
//         prevButton: ".swiper-button-prev"
//       });
//   }
//   render() {
//     return (
//         <div className="swiper-container">
//         <div className="swiper-wrapper">
      
//           <div className="swiper-slide">Slide 1
//           </div>
//           <div className="swiper-slide">Slide 2
//           </div>               
//           <div className="swiper-slide">Slide 3
//           </div>
      
//         </div>
//         <div className="swiper-pagination"></div>
//         <div className="swiper-button-next"></div>
//         <div className="swiper-button-prev"></div>
//       </div>
//     );
//   }
// }

// export default Swiper;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
