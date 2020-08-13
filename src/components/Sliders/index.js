import React, { Component } from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../sass/global/components/_component.slider.scss";

function BtnNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img
            className={className}
            onClick={onClick}
            src="./Images/ic-next.svg"
            alt=""
        />
    );
}

class Slider extends Component {
    render() {
        const {
            typeSlider,
            className,
            setSlidesToShow,
            setSlidesToScroll,
            children
        } = this.props;
        const horizontalSettings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: setSlidesToShow ? setSlidesToShow : 6,
            slidesToScroll: setSlidesToScroll ? setSlidesToScroll : 6,
            nextArrow: <BtnNextArrow />,
        };
        const verticalSettings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            speed: 500,
            slidesPerRow: 2,
            nextArrow: <BtnNextArrow />,
        };
        if (typeSlider === 1) {
            return (
                <Sliders {...horizontalSettings} className={className}>
                    {children}
                </Sliders>
            );
        } else if (typeSlider === 2) {
            return (
                <Sliders {...verticalSettings} className={className}>
                    {children}
                </Sliders>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}
export default Slider;