import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../sass/global/components/_component.breadcum.scss";

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
                    <Link to="/" className="coco-breadcrumb-wrap--home">
                        <img src="/Images/ic-home20px.svg" alt="" />
                        <span>Trang chủ</span>
                    </Link>
                    <a href={firstRouter} className="coco-breadcrumb-wrap--first">
                        {firstUrl}
                    </a>
                    <a href={secondRouter} className="coco-breadcrumb-wrap--second">
                        {secondUrl}
                    </a>
                </div>
            );
        } else {
            return (
                <div className="coco-breadcrumb-wrap" style={{ marginTop: marginTop }}>
                    <Link to="/" className="coco-breadcrumb-wrap--home">
                        <img src="/Images/ic-home20px.svg" alt="" />
                        <span>Trang chủ</span>
                    </Link>
                    <a href={firstRouter} className="coco-breadcrumb-wrap--first">
                        {firstUrl}
                    </a>
                </div>
            );
        }
    }
}

export default BreadCrumb;
