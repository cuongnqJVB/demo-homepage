import React from "react";
import styled from "styled-components";
import "../../sass/global/components/_component.search.scss";

const SanHead = styled.div`
  font-family: NunitoSansRegular;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
`;

export default ({
    type,
    text,
    Width,
    placeholder,
    maxLength,
    Margin,
    classname_input,
    name,
    value,
    ...props
}) => {
    return (
        <SanHead className="searchBox">
            <input
                type={type}
                name={name}
                value={value}
                className={`sb__input ${classname_input}`}
                placeholder={placeholder}
            />
            <div className="sb__icon">
                <img src="./Images/ic-search.svg" alt="" />
            </div>
        </SanHead>
    );
};
