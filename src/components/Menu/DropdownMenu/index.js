import React from "react";
import styled from "styled-components";
import "./style.scss";

const SanHead = styled.div`
    font-family: NunitoSansRegular;
    font-size: 16px;
    line-height: 21px;
`;

export default ({ title, item, width, padding, className, ...props }) => {
  return (
    <SanHead className={`dropdownMenu ${className}`}>
      <div class="dropdown">
        <div className="dmic__hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <span>{title}</span>
        <div class="dropdown-content">
          {/* <span>{item}</span> */}
          {/* <div> */}
            {/* <span>{item}</span> */}
            {item}
            {/* <img src="./Images/ic-arrowback.svg" /> */}
          {/* </div> */}
        </div>
      </div>
    </SanHead>
  );
};
