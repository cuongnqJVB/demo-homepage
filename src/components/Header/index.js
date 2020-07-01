import React from "react";
import styled from "styled-components";
import LogoCoco from "./Logo";
import SearchBox from "../Search";
import Account from "./Account";
import Cart from "./Cart";
import TopHeader from "./TopHeader";
import Menu from "../../components/Menu";
import "./style.scss";

const WrapMenu = styled.div`
  width: 100%;
  background: #000000;
`;
const WrapHeader = styled.div`
  width: 100%;
  background: #f3f3f3;
`;

const Header = () => {
  return (
    <div className="header_Wrap">
      <TopHeader />
      <WrapHeader>
        <div className="hw__header">
          <LogoCoco />
          <SearchBox
            classname_input="hw__search"
            placeholder="Tìm sản phẩm, thương hiệu bạn mong muốn..."
          />
          <Account />
          <div className="hwh_right">
            <img src="./Images/ic-like.svg" />
            <Cart text="Giỏ hàng" total="1" />
          </div>
        </div>
      </WrapHeader>
      {/* <WrapMenu>
        <Menu />
      </WrapMenu> */}
    </div>
  );
};

export default Header;
