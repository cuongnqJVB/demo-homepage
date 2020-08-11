import React, { Component } from "react";
import Slider from "react-slick";
import Button from "../../Buttons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../sass/global/components/ListProductByCategories/ListProductVertical/_list_vertical.scss";

function BtnNextArrow(props) {
    const { className, onClick } = props;
    return (
        <img className={className} onClick={onClick} src="./Images/ic-next.svg" />
    );
}

class ListProductVertical extends Component {
    state = {
        tabActive: 0,
    };
    render() {
        const { tabActive } = this.state;
        const {
            categoriesTitle,
            posterImg,
            lstItem,
            lstTab,
            marginTop,
            classComponent,
            categoriesType,
            mode,
        } = this.props;
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            speed: 500,
            slidesPerRow: 2,
            nextArrow: <BtnNextArrow />,
        };
        return (
            <div
                className={`list-product-vertical-wrap ${
                    mode === "reverse" ? "lpbc__reverse" : ""
                    } ${classComponent}`}
                style={{ marginTop: marginTop }}
            >
                <div className="list-product-vertical--left">
                    <div className="vertical--left_header">{categoriesTitle}</div>
                    <div className="vertical--left_poster">
                        <img src={posterImg} />
                    </div>
                </div>
                <div className="list-product-vertical--right">
                    <div className="vertical--right_tab">
                        <div className="right_tab__item">
                            {lstTab.map((item, index) => {
                                return (
                                    <div
                                        onClick={() => {
                                            this.setState({
                                                tabActive: index,
                                            });
                                        }}
                                    >
                                        {item}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="right_tab__item">XEM THÊM</div>
                    </div>
                    <div className={`vertical--right_content `}>
                        <Slider
                            {...settings}
                            className={`${
                                tabActive === 0
                                    ? "right-content_item__active"
                                    : "right-content_item__inactive"
                                }`}
                        >
                            {lstItem.map((item, index) => {
                                return (
                                    <div className="right-content_item">
                                        <div className="right-content_item__hovered">
                                            <div className="item-hovered_title">
                                                Nước tẩy trang Eucerin dành cho mọi loại da
                      </div>
                                            <div className="item-hovered_button">
                                                <Button
                                                    text={<img src="./Images/ic-heart.svg" />}
                                                    className="item-hovered_button__like"
                                                />
                                                <Button
                                                    text={<img src="./Images/ic-cart-red.svg" />}
                                                    className="item-hovered_button__cart"
                                                />
                                                <Button
                                                    text="Mua ngay"
                                                    className="item-hovered_button__buy"
                                                />
                                            </div>
                                        </div>
                                        <img src="./Images/product2.jpg" />
                                        <div className="right-content_item__title">
                                            Nước tẩy trang Eucerin dành cho mọi loại da
                    </div>
                                        <div className="right-content_item__price">
                                            <span>211.500 đ</span>
                                            <span>235.500 đ</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListProductVertical;
