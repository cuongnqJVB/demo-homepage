import React, { Component } from "react";
// import Slider from "react-slick";
import Slider from "../../Sliders";
import Button from "../../Buttons";
import Item from "../../Items";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../sass/global/components/_comopnent.list.scss";

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
                        <img src={posterImg} alt="" />
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

                        <Slider typeSlider={2}>
                            {lstItem.map((item, index) => {
                                return (
                                    <Item
                                        type={3}
                                    />
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
