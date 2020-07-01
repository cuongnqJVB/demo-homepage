import React from "react";
import styled from "styled-components";
import "./style.scss";

const SanHead = styled.div`
    // font-family: NunitoSansRegular;
    // font-size: 16px;
    // line-height: 21px;
`;

export default ({ title, item, width, padding, className, ...props }) => {
  return (
    <SanHead className={`dropdownItem ${className}`}>
      <div class="dropdown" style={{padding: {padding}}}>
        <span>{title}</span>
        <div class="dropdown-content" style={{padding: {padding}}}>
          <span>{item}</span>
        </div>
      </div>
    </SanHead>
  );
};
