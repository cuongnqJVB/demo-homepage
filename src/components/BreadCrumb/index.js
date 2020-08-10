import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../scss/BreadCrumb/style.scss";

class BreadCrumb extends Component {
  render() {
    const {
      firstUrl,
      secondUrl,
      firstRouter,
      secondRouter,
      marginTop,
    } = this.props;
    if (secondUrl) {
      return (
        <div className="coco-breadcrumb-wrap" style={{ marginTop: marginTop }}>
          <Link to="/" className="coco-breadcrumb-home">
            <img src="/Images/ic-home20px.svg" alt="" />
            <span>Trang chủ</span>
          </Link>
          <a href={firstRouter} className="breadcrumb-home--first">
            {firstUrl}
          </a>
          <a href={secondRouter} className="breadcrumb-home--second">
            {secondUrl}
          </a>
        </div>
      );
    } else {
      return (
        <div className="coco-breadcrumb-wrap" style={{ marginTop: marginTop }}>
          <Link to="/" className="coco-breadcrumb-home">
            <img src="/Images/ic-home20px.svg" alt="" />
            <span>Trang chủ</span>
          </Link>
          <a href={firstRouter} className="breadcrumb-home--first">
            {firstUrl}
          </a>
        </div>
      );
    }
  }
}

export default BreadCrumb;
