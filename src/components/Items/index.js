import React from "react";
import Button from "../Buttons";
import styled from "styled-components";
import "../../sass/global/components/_component.item.scss";

const WrapItem = styled.div`

`;

const Item = (...props) => {
    const {
        item,
        index,
        type,
        setLabel,
        setWidthCountdown
    } = props;

    if (type) {
        return (
            <WrapItem className="list-product-horizontal-product list-product-horizontal-product-active">
                <div className="list-product-horizontal--hovered">
                    <div className="horizontal--hovered_title">
                        Kem Chống Nắng The Saem Eco Earth Power
                    </div>
                    <div className="horizontal--hovered_button">
                        <Button
                            text={<img src="./Images/ic-heart.svg" alt="" />}
                            className="horizontal--hovered_button__like"
                        />
                        <Button
                            text={<img src="./Images/ic-cart-red.svg" alt="" />}
                            className="horizontal--hovered_button__cart"
                        />
                        <Button
                            text="Mua ngay"
                            className="horizontal--hovered_button__buy"
                        />
                    </div>
                </div>
                <div className="list-product-horizontal--label" style={{ display: setLabel }}>
                    <img src="./Images/ic-new.svg" alt="" />
                </div>
                <img src="./Images/product3.jpg" alt="" />
                <div className="list-product-horizontal--discount">
                    <span>-15%</span>
                    {/* <img src="/Images/ic-discount.svg" /> */}
                </div>
                <div className="list-product-horizontal--title" >
                    Nước tẩy trang Eucerin dành cho mọi loại da
                                    </div>
                <div className="list-product-horizontal--price">
                    <span>211.500 đ</span>
                    <span>235.500 đ</span>
                </div>
                <div className="list-product-horizontal--countdown">
                    <div
                        className="horizontal--countdown_bar"
                        style={{
                            width: setWidthCountdown ? setWidthCountdown : "26%",
                        }}
                    ></div>
                    <span>Còn lại 12 ngày 13:27:17</span>
                </div>
            </WrapItem>
        );
    } else if (type === 2) {
        // return (
        //     <div className="list-brand-product" key={index}>
        //         <img src="./Images/brand1.jpg" alt="" />
        //         <div className="list-brand-product--label">
        //             <span>{item}</span>
        //         </div>
        //     </div>
        // );
    } else {
        return (
            <div></div>
        );
    }
}

export default Item;