import React from "react";
import styled from "styled-components";
import LogoCoco from "./Logo";
import SearchBox from "../Search";
import Account from "./Account";
import Cart from "./Cart";
import TopHeader from "./TopHeader";
import "../../sass/global/components/_component.header.scss";

const WrapHeader = styled.div`
  width: 100%;
  background: #f3f3f3;
`;

const Header = () => {
    return (
        <div className="coco-layout-wrap-main-dad_header">
            <TopHeader />
            <WrapHeader>
                <div className="coco-layout-wrap-main-child_header">
                    <LogoCoco />
                    <SearchBox
                        classname_input="coco-layout-wrap-main-child-header-search_field"
                        placeholder="Tìm sản phẩm, thương hiệu bạn mong muốn..."
                    />
                    <Account />
                    <div className="coco-layout-wrap-main-child-header-list_item">
                        <img src="./Images/ic-like.svg" alt="" />
                        <Cart text="Giỏ hàng" total="1" />
                    </div>
                </div>
            </WrapHeader>
        </div>
    );
};

export default Header;
