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
                <div className="ccs-card-left">
                    <div
                        className="card-left--logo"
                        style={{ display: logoHeader ? "" : "none" }}
                    >
                        <img src={logoHeader} alt="" />
                    </div>
                    <div className="card-left--title">{titleHeader}</div>
                    <div
                        className="card-left--time"
                        style={{ display: displayTimeBox ? "" : "none" }}
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
                <div className="ccs-card-right">
                    <span>{btnExternal ? btnExternal : "Xem Tất Cả"}</span>
                </div>
            </div>
        );
    } else if (type === "tab") {
        return (
            <div className="ccs-card-tab">
                <div className="ccs-card-item">
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                                {item}
                            </div>
                        );
                    })}
                </div>
                <div className="ccs-card-item">XEM THÊM</div>
            </div>
        );
    } else if (type === "poster") {
        return (
            <div className="ccs-card-poster">
                <div className="ccs-card-left--header">{posterTitle}</div>
                <div className="ccs-card-left--poster">
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
