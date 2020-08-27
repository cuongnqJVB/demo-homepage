import React, { Component } from "react";
import Button from "../../components/Buttons";

class HeaderTop extends Component {
    render() {
        return (
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
        );
    }
}

export default HeaderTop;
