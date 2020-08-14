import React, { useState, useEffect } from "react";
import Button from "../../components/Buttons";
import Input from "../../components/Input";
import Radio from "../../components/Radio";
import Checkbox from "../../components/Checkbox";
import SelectBox from "../../components/SelectBox";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

const Login = () => {

    return (
        <div className="ccs-login-wrap">
            <div className="ccs-login-top">
                <Button
                    icon="./Images/ic-btn-fb.svg"
                    text="Facebook"
                    type="submit"
                    className="ccs-btn-lg ccs-btn-fb"
                />
                <Button
                    icon="./Images/ic-btn-gg.svg"
                    text="Google"
                    type="submit"
                    className="ccs-btn-lg ccs-btn-gg"
                />
            </div>
            <div className="ccs-login-middle">
                <div className="login-middle--line"></div>
                <span>hoặc là</span>
                <div className="login-middle--line"></div>
            </div>
            <div className="ccs-login-bottom">
                <div className='login-bottom--left'>
                    <div className="bottom--left_title">TẠO TÀI KHOẢN COCO SHOP</div>
                    <Input
                        className="ccs-input-login"
                        placeholder="Họ và tên"
                    />
                    <Input
                        className="ccs-input-login"
                        placeholder="SĐT/ email"
                    />
                    <Input
                        className="ccs-input-login"
                        placeholder="Mật khẩu"
                    />
                    <div className="bottom-left_radiogr">
                        <Radio text="Nam" id="male" name="radioGender" />
                        <Radio text="Nữ" id="female" name="radioGender" />
                    </div>
                    <div className='bottom-left_selectbox'>
                        <SelectBox
                            option="Ngày"
                            className="selectbox__item"
                        />
                        <SelectBox
                            option="Tháng"
                            className="selectbox__item"
                        />
                        <SelectBox
                            option="Năm"
                            className="selectbox__item"
                        />
                    </div>
                    <Checkbox
                        text="Nhận thông tin khuyến mãi qua e-mail"
                        className="c-checkbox--normal c-checkbox-lg1"
                    />
                    <Checkbox
                        text="Tôi đã đọc và đồng ý thực hiện mọi giao dịch mua bán theo điều kiện sử dụng và chính sách của COCO SHOP"
                        className="c-checkbox--normal c-checkbox-lg2"
                    />
                    <Button
                        text="Đăng kí tài khoản"
                        type="submit"
                        className="ccs-btn ccs-btn-danger ccs-text-uppercase bottom-left_btn__login"
                    />
                </div>
                <div className='login-bottom--right'>
                    <div className="bottom--right_title">CHÍNH SÁCH COCO SHOP</div>
                    <div className="bottom--right_des">
                        <div className="right_des__header">ĐẢM BẢO HÀNG CHÍNH HÃNG</div>
                        <div className="right_des_sub">Phát hiện hàng giả, bạn trả hàng và nhận thêm 110% giá trị.</div>
                    </div>
                    <div className="bottom--right_des">
                        <div className="right_des__header">THANH TOÁN KHI NHẬN HÀNG</div>
                        <div className="right_des_sub">Thanh toán kiểm tra sản phẩm khi nhận hàng</div>
                    </div>
                    <div className="bottom--right_des">
                        <div className="right_des__header">ĐỔI TRẢ MIỄN PHÍ</div>
                        <div className="right_des_sub">14 ngày đổi trả sản phẩm miễn phí</div>
                    </div>
                    <div className="bottom--right_des">
                        <div className="right_des__header">Giao hàng trong 2 giờ</div>
                        <div className="right_des_sub">Giao hàng 2H miễn phí nội thành Hà Nội.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;