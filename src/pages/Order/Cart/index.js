import React, { useState, useEffect } from "react";
import Button from "../../../components/Buttons";
import Card from "../../../components/Cards";
import Tables from "../../../components/Tables";
import Item from "../../../components/Items";
import Input from "../../../components/Input";
import "./style.scss";

const Cart = () => {
    const columns = ["Sản phẩm", "Giá sản phẩm", "Số lượng", "Thành tiền", "Thao tác"];
    const rows = [
        {
            product:
                <Item
                    type={6}
                    data={["1"]}
                />,
            price: "211.500 đ",
            quantity:
                <Input
                    type="number"
                    className="cart-input-qty"
                />,
            cash: "211.500 đ",
            action: "<a>Xoá</a>"
        },
        {
            product:
                <Item
                    type={6}
                    data={["1"]}
                />,
            price: "211.500 đ",
            quantity:
                <Input
                    type="number"
                    className="cart-input-qty"
                />,
            cash: "211.500 đ",
            action: "<a>Xoá</a>"
        }
    ];
    const arr2 = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
    useEffect(() => {

    }, []);

    return (
        <div className="coco-cart-wrap">
            <div className="coco-cart-title">Giỏ hàng(1 sản phẩm)</div>
            <Tables
                columns={columns}
                rows={rows}
                mode="custom"
                marginTop="15px"
            />
            <div className="coco-cart-confirm">
                <div className="cart-confirm--label">
                    <div className="confirm--label_item">
                        Tổng tiền hàng (2 Sản phẩm):
                        <span>₫423.000</span>
                    </div>
                    <div className="confirm--label_item">
                        Nhận thêm: 200 COCO COIN
                    </div>
                </div>
                <Button
                    text="Tiến hành đặt hàng"
                    className="ccs-btn ccs-btn-danger cart-confirm-btn"
                />
            </div>
            <Card
                type="horizontal"
                data={arr2}
                marginTop="56px"
                titleHeader="SẢN PHẨM ĐÃ XEM"
            />
        </div>
    );
};

export default Cart;
