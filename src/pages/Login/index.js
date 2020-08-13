import React, { useState, useEffect } from "react";
import Button from "../../components/Buttons";
import Input from "../../components/Input";
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
                    <Input />
                </div>
                <div className='login-bottom--right'>
                    AHIIIII
                </div>
            </div>
        </div>
    );
}

export default Login;