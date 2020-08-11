import React, { Component } from "react";
import Slider from "react-slick";
import Button from "../../Buttons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../sass/global/components/ListProductByCategories/ListProductHorizontal/_list_horizontal.scss";

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
                <Slider {...settings} className="list-product-horizontal--slider">
                    {data && type === "flashsale" ? (
                        data.map((item, index) => {
                            return (
                                <div className="list-product-horizontal-product list-product-horizontal-product-active">
                                    <div className="list-product-horizontal--hovered">
                                        <div className="horizontal--hovered_title">
                                            Kem Chống Nắng The Saem Eco Earth Power
                    </div>
                                        <div className="horizontal--hovered_button">
                                            <Button
                                                text={<img src="./Images/ic-heart.svg" />}
                                                className="horizontal--hovered_button__like"
                                            />
                                            <Button
                                                text={<img src="./Images/ic-cart-red.svg" />}
                                                className="horizontal--hovered_button__cart"
                                            />
                                            <Button
                                                text="Mua ngay"
                                                className="horizontal--hovered_button__buy"
                                            />
                                        </div>
                                    </div>
                                    <div className="list-product-horizontal--label" style={{ display: setLabel }}>
                                        <img src="./Images/ic-new.svg" />
                                    </div>
                                    <img src="./Images/product3.jpg" />
                                    <div className="list-product-horizontal--discount">
                                        <span>-15%</span>
                                        {/* <img src="/Images/ic-discount.svg" /> */}
                                    </div>
                                    <div className="list-product-horizontal--title">
                                        Nước tẩy trang Eucerin dành cho mọi loại da
                  </div>
                                    <div className="list-product-horizontal--price">
                                        <span>211.500 đ</span>
                                        <span>235.500 đ</span>
                                    </div>
                                    <div className="list-product-horizontal--countdown">
                                        <div
                                            className="horizontal--countdown_bar"
                                            style={{
                                                width: setWidthCountdown ? setWidthCountdown : "26%",
                                            }}
                                        ></div>
                                        <span>Còn lại 12 ngày 13:27:17</span>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                            <div></div>
                        )}
                </Slider>
            </div>
        );
    }
}

export default ListProductHorizontal;
