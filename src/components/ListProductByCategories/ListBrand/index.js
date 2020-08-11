import React, { Component } from "react";
import Slider from "react-slick";
import Button from "../../Buttons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../sass/global/components/_comopnent.list.scss";

function BtnNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img className={className} onClick={onClick} src="./Images/ic-next.svg" />
    );
}

class ListBrand extends Component {
    render() {
        const {
            data,
            titleHeader,
            item,
            marginTop,
            classComponent,
            btnExternal,
            type,
        } = this.props;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 3,
            nextArrow: <BtnNextArrow />,
        };
        return (
            <div
                className={`list-brand-wrap ${classComponent}`}
                style={{ marginTop: marginTop }}
            >
                <div className="list-brand-header">
                    <div className="brand--header_left">
                        <div className="header_left__title">{titleHeader}</div>
                    </div>
                    <div className="brand--header_right">
                        <span>{btnExternal ? btnExternal : "Xem Tất Cả"}</span>
                    </div>
                </div>
                <Slider {...settings} className="list-brand-slider">
                    {data.map((item, index) => {
                        return (
                            <div className="list-brand-product" key={index}>
                                <img src="./Images/brand1.jpg" />
                                <div className="list-brand-product--label">
                                    <span>{item}</span>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}

export default ListBrand;
