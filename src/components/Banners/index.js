import React from "react";
import styled from "styled-components";
import "../../sass/global/components/_component.banner.scss";

const WrapBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Banner = () => {
    return (
        <WrapBanner className="ccs-banner-wrap">
            <div className="ccs-banner--item1">
                <img src="./Images/Rectangle 5.jpg" alt="" />
            </div>
            <div className="ccs-banner--item2">
                <img src="./Images/Rectangle 5114.jpg" alt="" />
                <img src="./Images/Rectangle 5113.jpg" alt="" />
            </div>
        </WrapBanner>
    );
}

export default Banner;