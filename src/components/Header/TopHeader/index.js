import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../Buttons";
import styled from "styled-components";
// import styles from './style.module.scss';
// import "./style.scss";

const Wrap = styled.div`
  width: 100%;
  background: #000000;
`;

class TopHeader extends Component {
    render() {
        return (
            <Wrap>
                <div className="top-header-wrap">
                    <div className="top-header--phone">
                        <img src="./Images/ic-phone.svg" alt="" />
                        <span>0988888290</span>
                    </div>
                    <div className="top-header--title">
                        COCO Shop - Hệ thống thương hiệu mỹ phẩm chính hãng, với 600 thương
                        hiệu mỹ phẩm - uy tín - chất lượng Top 1 Việt Nam
          </div>
                    <div className="top-header--groupBtn">
                        <Button text="VI" textLink="/" className="btnLang" />
                        <Button text="EN" textLink="/" className="btnLang" />
                    </div>
                </div>
            </Wrap>
        );
    }
}

export default TopHeader;
