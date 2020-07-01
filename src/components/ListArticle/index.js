import React, { Component } from "react";
import "./style.scss";

class ListArticle extends Component {
  render() {
    const {
      logoHeader,
      titleHeader,
      displayTimeBox,
      marginTop,
      classComponent,
      btnExternal,
      data,
    } = this.props;
    return (
      <div
        className={`fslist__article ${classComponent}`}
        style={{ marginTop: marginTop }}
      >
        <div className="fsla__header">
          <div className="fslah__left">
            <div className="fslahl__logo">
              <img src={logoHeader} />
            </div>
            <div className="fslahl__title">{titleHeader}</div>
          </div>
          <div className="fslah_right">
            <span>{btnExternal ? btnExternal : "Xem Thêm"}</span>
          </div>
        </div>
        <div className="fsla__content">
          {data.map((item, index) => {
            return (
              <div className="fsla__item fsla__bgr">
                {/* <div className="fsla__bgr"></div> */}
                <div className="fslai__title">
                  Bộ sản phẩm AVÈNE cho mùa hè năng động
                </div>
                <div className="fslai__description">
                  Avène là dòng Dược Mỹ Phẩm của Pháp với lịch sử phát triển gần
                  300 năm, đã được các bác sĩ da liễu trên toàn thế giới xác
                  nhận...
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListArticle;
