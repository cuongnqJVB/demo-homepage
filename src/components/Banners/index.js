import React from "react";
import "../../sass/global/components/_component.banner.scss";

const Banner = () => {
    return (
        <div className="ccs-banner-wrap">
            <div className="ccs-banner--left">
                <img src="./Images/Rectangle 5.jpg" alt="" />
            </div>
            <div className="ccs-banner--right">
                <img src="./Images/Rectangle 5114.jpg" alt="" />
                <img src="./Images/Rectangle 5113.jpg" alt="" />
            </div>
        </div>
    );
}

export default Banner;