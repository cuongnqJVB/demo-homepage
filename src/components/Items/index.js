import React, { Component } from "react";
import Button from "../Buttons";
import "../../sass/global/components/_component.item.scss";
class Item extends Component {
    render() {
        const {
            data,
            type,
            setLabel,
            setWidthCountdown
        } = this.props;
        if (type === 1) {
            return (
                <div className="ccs-item-wrap ccs-item-wrap-active">
                    <div className="ccs-item-hovered">
                        <div className="item-hovered--title">
                            Kem Chống Nắng The Saem Eco Earth Power
                     </div>
                        <div className="item-hovered--button">
                            <Button
                                text={<img src="./Images/ic-heart.svg" alt="" />}
                                className="ccs-btn ccs-btn-like"
                            />
                            <Button
                                text={<img src="./Images/ic-cart-red.svg" alt="" />}
                                className="ccs-btn ccs-btn-cart"
                            />
                            <Button
                                text="Mua ngay"
                                className="ccs-btn ccs-btn-buy"
                            />
                        </div>
                    </div>
                    <div className="ccs-item-label" style={{ display: setLabel }}>
                        <img src="./Images/ic-new.svg" alt="" />
                    </div>
                    <img src="./Images/product3.jpg" alt="" />
                    <div className="ccs-item-discount">
                        <span>-15%</span>
                    </div>
                    <div className="ccs-item-title" >
                        Nước tẩy trang Eucerin dành cho mọi loại da
                </div>
                    <div className="ccs-item-price">
                        <span>211.500 đ</span>
                        <span>235.500 đ</span>
                    </div>
                    <div className="ccs-item-countdown">
                        <div
                            className="ccs-item--countdownbar"
                            style={{
                                width: setWidthCountdown ? setWidthCountdown : "26%",
                            }}
                        ></div>
                        <span>Còn lại 12 ngày 13:27:17</span>
                    </div>
                </div>
            );
        } else if (type === 2) {
            return (
                // (data ? data.map((item, index) => {
                //     return (
                //         <div className="ccs-item-brand" key={index}>
                //             <img src="./Images/brand1.jpg" alt="" />
                //             <div className="ccs-item-brand--label">
                //                 <span>{item}</span>
                //             </div>
                //         </div>
                //     );
                // }) : null)
                <div className="ccs-item-brand">
                    <img src="./Images/brand1.jpg" alt="" />
                    <div className="ccs-item-brand--label">
                        <span>CLINIQUE</span>
                    </div>
                </div>
            );
        } else if (type === 3) {
            return (
                <div className="ccs-item-wrap ccs-item-wrap-active">
                    <div className="ccs-item-hovered">
                        <div className="item-hovered--title">
                            Nước tẩy trang Eucerin dành cho mọi loại da
                        </div>
                        <div className="item-hovered--button">
                            <Button
                                text={<img src="./Images/ic-heart.svg" alt="" />}
                                className="ccs-btn ccs-btn-like"
                            />
                            <Button
                                text={<img src="./Images/ic-cart-red.svg" alt="" />}
                                className="ccs-btn ccs-btn-cart"
                            />
                            <Button
                                text="Mua ngay"
                                className="ccs-btn ccs-btn-buy"
                            />
                        </div>
                    </div>
                    <img src="./Images/product2.jpg" alt="" />
                    <div className="ccs-item-title" >
                        Nước tẩy trang Eucerin dành cho mọi loại da
                    </div>
                    <div className="ccs-item-price">
                        <span>211.500 đ</span>
                        <span>235.500 đ</span>
                    </div>
                </div>
            );
        } else if (type === 4) {
            return (
                <div className="ccs-item-article">
                    <div className="ccs-item-background">
                        <div>
                            <div className="item-background--title">
                                Bộ sản phẩm AVÈNE cho mùa hè năng động
                            </div>
                            <div className="item-background--description">
                                Avène là dòng Dược Mỹ Phẩm của Pháp với lịch sử phát triển
                                gần 300 năm, đã được các bác sĩ da liễu trên toàn thế giới
                                xác nhận...
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (type === 5) {
            return (
                (data ? data.map((item, index) => {
                    return (
                        <div className="ccs-item-store">
                            <div className="ccs-item-img">
                                <img src="./Images/coco-store.png" alt="" />
                            </div>
                            <div className="ccs-item-text">
                                <span>258 Bà Triệu, Hà Nội</span>
                                <span>0988888948</span>
                            </div>
                        </div>
                    );
                }) : null)
            );
        } else if (type === 6) {
            return (
                (data ? data.map((item, index) => {
                    return (
                        <div className="ccs-cart-product">
                            <div className="ccs-cart-thumb">
                                <img src="./Images/product-sm-1.png" alt="" />
                            </div>
                            <div className="ccs-cart-detail">
                                <div className="cart-detail--title">M.O.I</div>
                                <div className="cart-detail--subtitle">Son Kem Lì M.O.I S-Girls 03 Sexy</div>
                                <span>Quà Tặng: Bông Tẩy Trang Silcot 82 Miếng (Sl có hạn)</span>
                            </div>
                        </div>
                    );
                }) : null)
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default Item;