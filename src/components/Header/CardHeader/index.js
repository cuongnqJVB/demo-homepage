import React from "react";
import "../../../sass/global/components/_component.header.scss";

const CardHeader = (props) => {
    const {
        type,
        data,
        logoHeader,
        titleHeader,
        displayTimeBox,
        borderBottom,
        posterImg,
        posterTitle,
        btnExternal
    } = props;
    if (type === "header") {
        return (
            <div className={`ccs-card-header ${borderBottom ? "ccs-card-header-line" : null}`}>
                <div className="ccs-card-header--left">
                    <div
                        className="ccs-card-header--left__logo"
                        style={{ display: logoHeader ? "" : "none" }}
                    >
                        <img src={logoHeader} alt="" />
                    </div>
                    <div className="ccs-card-header--left__title">{titleHeader}</div>
                    <div
                        className="ccs-card-header--left__time"
                        style={{ display: displayTimeBox ? "" : "none" }}
                    >
                        <div>
                            <span>02</span>
                        </div>
                        <div>
                            <span>50</span>
                        </div>
                        <div>
                            <span>35</span>
                        </div>
                    </div>
                </div>
                <div className="ccs-card-header--right">
                    <span>{btnExternal ? btnExternal : "Xem Tất Cả"}</span>
                </div>
            </div>
        );
    } else if (type === "tab") {
        return (
            <div className="ccs-card-header-tab">
                <div className="ccs-card-header-tab--item">
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                                {item}
                            </div>
                        );
                    })}
                </div>
                <div className="ccs-card-header-tab--item">XEM THÊM</div>
            </div>
        );
    } else if (type === "poster") {
        return (
            <div className="ccs-card-header-poster">
                <div className="ccs-card-header-poster--header">{posterTitle}</div>
                <div className="ccs-card-header-poster--image">
                    <img src={posterImg} alt="" />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
};

export default CardHeader;
