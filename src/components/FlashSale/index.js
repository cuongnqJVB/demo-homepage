import React, { Component } from "react";
import Slider from "react-slick";
import Button from "../Buttons";
import Item from "../Items";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../sass/global/components/_component.flashsale.scss";

function BtnNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img className={className} onClick={onClick} src="./Images/ic-next.svg" />
    );
}

class FlashSale extends Component {
    state = {
        activeItem: null,
    };
    render() {
        const { activeItem } = this.state;
        const {
            data,
            logoHeader,
            titleHeader,
            displayTimeBox,
            item,
            marginTop,
            classComponent,
            btnExternal,
            setNextArrow,
            setSlidesToShow,
            setSlidesToScroll,
            type,
        } = this.props;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: setSlidesToShow ? setSlidesToShow : 6,
            slidesToScroll: setSlidesToScroll ? setSlidesToScroll : 3,
            nextArrow: <BtnNextArrow className="btn__next" />,
        };
        return (
            <div
                className={`flashsale__wrap ${classComponent}`}
                style={{ marginTop: marginTop }}
            >
                <div className="fsw__header">
                    <div className="fswh__left">
                        <div className="fswhl__logo">
                            <img src={logoHeader} />
                        </div>
                        <div className="fswhl__title">{titleHeader}</div>
                        <div className="fswhl__time" style={{ display: displayTimeBox }}>
                            <div className="fswhlt__box">
                                <span>02</span>
                            </div>
                            <div className="fswhlt__box">
                                <span>50</span>
                            </div>
                            <div className="fswhlt__box">
                                <span>35</span>
                            </div>
                        </div>
                    </div>
                    <div className="fswh_right">
                        <span>{btnExternal ? btnExternal : "Xem Tất Cả"}</span>
                    </div>
                </div>
                <Slider {...settings}>
                    {data && type === "flashsale" ? (
                        data.map((item, index) => {
                            return (
                                <Item />
                                // <div className="fsws__item fsws__itemActive ">
                                //     <div className="fswsic__actived">
                                //         <div className="fswsica__title">
                                //             Kem Chống Nắng The Saem Eco Earth Power
                                //         </div>
                                //         <div className="fswsica__btn">
                                //             <Button
                                //                 text={<img src="./Images/ic-heart.svg" alt="" />}
                                //                 className="fswsica__btnLike"
                                //             />
                                //             <Button
                                //                 text={<img src="./Images/ic-cart-red.svg" alt="" />}
                                //                 className="fswsica__btnCart"
                                //             />
                                //             <Button text="Mua ngay" className="fswsica__btnBuy" />
                                //         </div>
                                //     </div>
                                //     <div className="fswsi_label">
                                //         <img src="./Images/ic-new.svg" alt="" />
                                //     </div>
                                //     <img src="./Images/product3.jpg" alt="" />
                                //     <div className="fswsi_discount">
                                //         <span>-15%</span>
                                //     </div>
                                //     <div className="fswsi__title">
                                //         Nước tẩy trang Eucerin dành cho mọi loại da
                                //     </div>
                                //     <div className="fswsi__price">
                                //         <span>211.500 đ</span>
                                //         <span>235.500 đ</span>
                                //     </div>
                                //     <div className="fswsi__countdown">
                                //         <div
                                //             className="countdown_bar"
                                //             style={{ width: "26%" }}
                                //         ></div>
                                //         <span>Còn lại 12 ngày 13:27:17</span>
                                //     </div>
                                // </div>
                            );
                        })
                    ) : data && type === "brand" ? (
                        data.map((item, index) => {
                            return (
                                <div className="fslb__item" key={index}>
                                    <img src="./Images/brand1.jpg" alt="" />
                                    <div className="fslbi__label">
                                        <span>{item}</span>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                                <div></div>
                            )}

                    {/* {data.map((item, index) => {
            return (
              <div className="fsws__item">
                <div className="fswsi_label">
                  <img src="./Images/ic-new.svg" />
                </div>
                <img src="./Images/product1.jpg" />
                <div className="fswsi_discount">
                  <span>15%</span>
                </div>
                <div className="fswsi__title">
                  Nước tẩy trang Eucerin dành cho mọi loại da
                </div>
                <div className="fswsi__price">
                  <span>211.500 đ</span>
                  <span>235.500 đ</span>
                </div>
                <div className="fswsi__countdown">
                  <div className="countdown_bar" style={{ width: "26%" }}></div>
                  <span>Còn lại 12 ngày 13:27:17</span>
                </div>
              </div>
            );
          })} */}
                </Slider>
            </div >
        );
    }
}

export default FlashSale;
