import React, { useState } from "react";
import Button from "../../components/Buttons";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import SelectBox from "../../components/SelectBox";
import Textarea from "../../components/Textarea";

const OrderProcessing = (props) => {
    let [hidden, setHidden] = useState(null);
    const { isLogin } = props;
    if (isLogin) {
        return (
            <div className="ccs-order-info-islogin">
                <div className="order-info--title">
                    <span>Thông tin nhận hàng</span>
                    <span>
                        <img src="./Images/ic-check-correct.svg" alt="" />
                        Bạn đã đăng nhập
                    </span>
                </div>
                <div className={`ccs-order--form ${hidden}`}>
                    <div className="order--form_group order--form_address">
                        <Checkbox id="1" name="cbAddress" className="c-checkbox--normal" />
                        <div className="from_group__detail">
                            <div>Nguyễn Thùy Linh</div>
                            <span>Địa chỉ: 72 trần đăng ninh Phường Nghĩa Đô Quận Cầu Giấy Hà Nội</span>
                            <span>Điện thoại: 0967261194</span>
                        </div>
                    </div>
                    <Button
                        icon="./Images/ic-add.svg"
                        text="Thêm địa chỉ khác"
                        type="submit"
                        className="ccs-btn ccs-btn-black mt-16"
                        onClick={() => {
                            setHidden('abcd');
                        }}
                    />
                    <div className="order--form_group order--form_note">
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
        );
    } else {
        return (
            <div className="ccs-order-info-unlogin">
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
        );
    }
}

export default OrderProcessing;