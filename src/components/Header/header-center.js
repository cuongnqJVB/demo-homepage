import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../Search";
import Button from "../../components/Buttons";

class HeaderCenter extends Component {
    render() {
        return (
            <div className="header-center-wrap">
                <div>
                    <div className="header-center-logo">
                        <Link to='/'>
                            <img src='./Images/logo_cocoshop.png' alt="" />
                        </Link>
                    </div>
                    <SearchBox
                        classname_input="header-center-searchbox"
                        placeholder="Tìm sản phẩm, thương hiệu bạn mong muốn..."
                    />
                    <div className="header-ceneter-account">
                        <img src="./Images/ic-account.svg" alt="" />
                        <div>
                            <Link to="/">Đăng nhập / Đăng ký</Link>
                            <div>Tài khoản</div>
                            {/* <SelectBox option="Tài khoản" /> */}
                        </div>
                    </div>
                    <div className="header-center-item">
                        <img src="./Images/ic-like.svg" alt="" />
                        <div className="center-item--button">
                            <button>
                                <Link to="#">
                                    <img src="./Images/ic-cart.svg" alt="" />
                                    <span>Giỏ hàng</span>
                                    <span>(1)</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderCenter;
