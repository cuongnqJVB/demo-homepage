import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./style.scss";

const Wrap = styled.div`
  position: relative;
  display: flex;
`;
class Account extends Component {
  render() {
    return (
      <Wrap className="acc__wrap">
        <img src="./Images/ic-account.svg" />
        <div>
          <Link to="/">Đăng nhập / Đăng ký</Link>
          <div>Tài khoản</div>
        </div>
      </Wrap>
    );
  }
}

export default Account;
