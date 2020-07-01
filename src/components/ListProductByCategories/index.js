import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

function BtnNextArrow(props) {
  const { className, onClick } = props;
  return (
    <img className={className} onClick={onClick} src="./Images/ic-next.svg" />
  );
}

class ListProductByCategories extends Component {
  render() {
    const {
      cateTitle,
      posterImg,
      lstItem,
      lstTab,
      marginTop,
      classComponent,
      categoriesType,
    } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      slidesPerRow: 2,
      nextArrow: <BtnNextArrow className="btn__next" />,
    };
    if (categoriesType === 1) {
      return (
        <div
          className={`lpbc__wrap ${classComponent}`}
          style={{ marginTop: marginTop }}
        >
          <div className="lpbcw__left">
            <div className="lpbcwl__header">{cateTitle}</div>
            <div className="lpbcwl__poster">
              <img src={posterImg} />
            </div>
          </div>
          <div className="lpbcw__right">
            <div className="lpbcwr__header">
              <div className="lpbcwrh__item">
                {lstTab.map((item, index) => {
                  return <div>{item}</div>;
                })}
              </div>
              <div className="lpbcwrh__item">XEM THÊM</div>
            </div>
            <div className="lpbcwr__content">
              <Slider {...settings}>
                {lstItem.map((item, index) => {
                  return (
                    <div className="lpbcwr__item">
                      <img src="./Images/product2.jpg" />
                      <div className="lpbcwri__title">
                        Nước tẩy trang Eucerin dành cho mọi loại da
                      </div>
                      <div className="lpbcwri__price">
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
    } else if (categoriesType === 2) {
      return (
        <div
          className={`lpbc__wrap lpbc__reverse ${classComponent}`}
          style={{ marginTop: marginTop}}
        >
          <div className="lpbcw__left">
            <div className="lpbcwl__header">{cateTitle}</div>
            <div className="lpbcwl__poster">
              <img src={posterImg} />
            </div>
          </div>
          <div className="lpbcw__right">
            <div className="lpbcwr__header">
              <div className="lpbcwrh__item">
                {lstTab.map((item, index) => {
                  return <div>{item}</div>;
                })}
              </div>
              <div className="lpbcwrh__item">XEM THÊM</div>
            </div>
            <div className="lpbcwr__content">
              <Slider {...settings}>
                {lstItem.map((item, index) => {
                  return (
                    <div className="lpbcwr__item">
                      <img src="./Images/product2.jpg" />
                      <div className="lpbcwri__title">
                        Nước tẩy trang Eucerin dành cho mọi loại da
                      </div>
                      <div className="lpbcwri__price">
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
    } else {
      return <div></div>;
    }
  }
}

export default ListProductByCategories;
