import React, { useState, useEffect } from "react";
import Button from "../../../components/Buttons";
import Card from "../../../components/Cards";
import Tables from "../../../components/Tables";
import Item from "../../../components/Items";
import Input from "../../../components/Input";
import Radio from "../../../components/Radio";
import SelectBox from "../../../components/SelectBox";
import Textarea from "../../../components/Textarea";
import InputGroup from 'react-bootstrap/InputGroup';
import "./style.scss";

const OrderProcessing = () => {
    const [classActive, setClassActive] = useState(null);
    const arr2 = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
    const label = "Chuyển khoản: Tên tài khoản: PHẠM MINH CHƯƠNG \n- Vietcombank : 0451000502912 chi nhánh Thành Công \n- Techcombank: 19026463056013 chi nhánh Hà Nội \n- BIDV: xxxxxxxxxxxxxx chi nhánh Tràng An \n- Vietinbank: 100870533806 chi nhánh Chương Dương \n- Agribank: 1200209552247 Sở Giao Dịch";
    return (
        <div className="ccs-order-process-wrap">
            <div className="ccs-order-content">
                <div className="ccs-order-info">
                    <div className="order-info--title">
                        <span>Thông tin nhận hàng</span>
                        <span>
                            <a href="#" >Đăng nhập để đặt hàng</a>
                        </span>
                    </div>
                    <div className="ccs-order--form">
                        <div className="order--form_login">
                            <span>Với tài khoản:</span>
                            <div className="form_login__btn">
                                <Button
                                    icon="./Images/ic-btn-fb.svg"
                                    text="Facebook"
                                    type="submit"
                                    className="ccs-btn-lg ccs-btn-fb"
                                />
                                <Button
                                    icon="./Images/ic-btn-gg-white.svg"
                                    text="Google"
                                    type="submit"
                                    className="ccs-btn-lg ccs-btn-gg-white"
                                />
                            </div>
                            <div className="form_login_line">
                                <div></div>
                                <span>Hoặc</span>
                                <div></div>
                            </div>
                        </div>
                        <div className="order--form_group">
                            <span>Họ và tên *</span>
                            <Input
                                type="text"
                                name="name"
                                className="ccs-input-login ccs-input-h-56"
                                placeholder="Vui lòng nhập họ tên"
                            />
                        </div>
                        <div className="order--form_group">
                            <span>Email</span>
                            <Input
                                type="email"
                                name="email"
                                className="ccs-input-login ccs-input-h-56"
                                placeholder="Nhập email"
                            />
                        </div>
                        <div className="order--form_group">
                            <span>Khu vực *</span>
                            <SelectBox
                                name="country"
                                option="Chọn Tỉnh/ TP, Quận/ Huyện"
                                className="ccs-selectbox"
                            />
                        </div>
                        <div className="order--form_group">
                            <span>Phường / xã *</span>
                            <SelectBox
                                name="province"
                                option="Chọn Phường/ Xã"
                                className="ccs-selectbox"
                            />
                        </div>
                        <div className="order--form_group">
                            <span>Địa chỉ *</span>
                            <Input
                                type="text"
                                name="country"
                                className="ccs-input-login ccs-input-h-56"
                                placeholder="Số nhà + tên đường"
                            />
                        </div>
                        <div className="order--form_group">
                            <span>Số điện thoại nhận hàng *</span>
                            <Input
                                type="text"
                                name="country"
                                className="ccs-input-login ccs-input-h-56"
                                placeholder="Nhập số điện thoại di động"
                            />
                        </div>
                        <div className="order--form_group">
                            <span>Ghi chú</span>
                            <Textarea
                                name="note"
                                rows={2}
                                placeholder="Nhập ghi chú nếu có"
                                className="ccs-textarea-form"
                            />
                        </div>
                    </div>
                </div>
                <div className="ccs-order-detail">
                    <div className="ccs-order-header">
                        <span>Đơn hàng</span>
                        <span>
                            <a href="#" >Sửa</a>
                        </span>
                    </div>
                    <div className="ccs-order-list-product">
                        <Item
                            type={7}
                            data={["1", "1", "1", "1", "1"]}
                        />
                    </div>
                    <div className="ccs-order-form">
                        <div className="ccs-order-label-group">
                            <span>Tạm tính:</span>
                            <span>634.500 ₫</span>
                        </div>
                        <div className="ccs-order-promotion">
                            <Input
                                name="promotion"
                                className="ccs-input-h-40"
                                placeholder="Nhập mã khuyến mãi"
                            />
                            <Button
                                text="Áp dụng"
                                type="submit"
                                className="ccs-btn ccs-btn-danger"
                            />
                        </div>
                        <div className="ccs-order-label-group">
                            <span>Giảm giá:</span>
                            <span>-0 ₫</span>
                        </div>
                        <div className="ccs-order-label-group">
                            <span>COCO Coins:</span>
                            <span>0</span>
                        </div>
                        <div className="ccs-order-label-group">
                            <span>Phí vận chuyển:</span>
                            <span>0</span>
                        </div>
                        <div className="ccs-order-label-group">
                            <span>Được giảm giá:</span>
                            <span>0</span>
                        </div>
                        <div className="ccs-order-border"></div>
                        <div className="ccs-order-label-total">
                            <span>TỔNG CỘNG</span>
                            <span>634.500 ₫</span>
                        </div>
                        <div className="ccs-order-label-coin">
                            <span>Bạn sẽ nhận được</span>
                            <span>6345 COCO COIN</span>
                        </div>
                        <Button
                            text="ĐẶT HÀNG"
                            type="submit"
                            className="ccs-btn ccs-btn-danger ccs-btn-order"
                        />
                    </div>
                </div>
                <div className="ccs-order-deliver">
                    <div className="order-deliver--header">Vận chuyển & Thanh toán</div>
                    <div className="order-deliver--option">
                        <div className='deliver--option_title'>Hình thức vận chuyển</div>
                        <div className='deliver--option_item'>
                            <Radio text="Giao hàng trong 48 giờ: 0 đ" id="48h" name="radioDeliver" />
                        </div>
                        <div className='deliver--option_item'>
                            <Radio text="[NowFree] Giao hàng nhanh trong 2 giờ: 9,000 đ" className="ccs-radio-disable" id="2h" name="radioDeliver" />
                            <span className="option_item__warning">Đơn hàng không đủ điều kiện giao nhanh 2 giờ (Xem thêm)</span>
                        </div>
                    </div>

                    <div className="order-deliver--option">
                        <div className='deliver--option_title'>Hình thức thanh toán</div>
                        <div className='deliver--option_item'>
                            <Radio
                                text="Thanh toán tiền khi nhận hàng (COD)"
                                id="option1"
                                name="radioPayment" />
                        </div>
                        <div className='deliver--option_item'>
                            <Radio
                                text="Thẻ ATM nội địa (Internet Banking, VNPAY-QR, Ví VnMart - Miễn phí thanh toán)"
                                id="option2"
                                name="radioPayment" />
                            <a> (Xem thêm)</a>
                        </div>
                        <div className='deliver--option_item'>
                            <Radio
                                text={label}
                                id="option3"
                                name="radioPayment"
                                className={`option_item_radio3 ${classActive}`}
                            />
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" name="customRadio" id="customRadio2" checked />
                            <label class="custom-control-label" for="customRadio2">Another custom radio</label>
                        </div>
                    </div>
                </div>
            </div>
            <Card
                type="horizontal"
                data={arr2}
                marginTop="44px"
                titleHeader="SẢN PHẨM ĐÃ XEM"
            />
        </div>
    );
}

export default OrderProcessing;