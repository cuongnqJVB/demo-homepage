import React, { Component } from "react";
import { Link } from "react-router-dom";
import SelectBox from "../../SelectBox";
import styled from "styled-components";
// import "./style.scss";

const Wrap = styled.div`
  position: relative;
  display: flex;
`;

class Account extends Component {
    render() {
        return (
            <Wrap className="account-wrap">
                <img src="./Images/ic-account.svg" />
                <div>
                    <Link to="/">Đăng nhập / Đăng ký</Link>
                    <div>Tài khoản</div>
                    {/* <SelectBox option="Tài khoản" /> */}
                </div>
            </Wrap>
        );
    }
}

export default Account;
