import React, { Component } from "react";
// import Slider from "react-slick";
import Button from "../../Buttons";
import Item from "../../Items";
import Slider from "../../Sliders";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../sass/global/components/_comopnent.list.scss";

function BtnNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img className={className} onClick={onClick} src="./Images/ic-next.svg" />
    );
}

class ListProductHorizontal extends Component {
    render() {
        const {
            data,
            logoHeader,
            titleHeader,
            displayTimeBox,
            item,
            marginTop,
            classComponent,
            btnExternal,
            setLabel,
            setWidthCountdown,
            setSlidesToShow,
            setSlidesToScroll,
            type,
        } = this.props;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: setSlidesToShow ? setSlidesToShow : 6,
            slidesToScroll: setSlidesToScroll ? setSlidesToScroll : 6,
            nextArrow: <BtnNextArrow />,
        };
        return (
            <div
                className={`list-product-horizontal-wrap ${classComponent}`}
                style={{ marginTop: marginTop }}
            >
                <div className="list-product-horizontal--header">
                    <div className="horizontal--header_left">
                        <div
                            className="header_left__logo"
                            style={{ display: logoHeader ? "" : "none" }}
                        >
                            <img src={logoHeader} />
                        </div>
                        <div className="header_left__title">{titleHeader}</div>
                        <div
                            className="header_left__time"
                            style={{ display: displayTimeBox }}
                        >
                            <div className="left-time_child">
                                <span>02</span>
                            </div>
                            <div className="left-time_child">
                                <span>50</span>
                            </div>
                            <div className="left-time_child">
                                <span>35</span>
                            </div>
                        </div>
                    </div>
                    <div className="horizontal--header_right">
                        <span>{btnExternal ? btnExternal : "Xem Tất Cả"}</span>
                    </div>
                </div>
                {/* <Slider
                    typeSlider={1}
                    data={["1", "1", "1", "1", "1", "1", "1", "1", "1"]}
                    className="list-product-horizontal--slider"
                /> */}

                <Slider typeSlider={1} className="list-product-horizontal--slider">
                    {data.map((item, index) => {
                        return (
                            <Item
                                type={1}
                            />
                        );
                    })}
                </Slider>
            </div>
        );
    }
}

export default ListProductHorizontal;
