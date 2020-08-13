import React, { useState, useEffect } from "react";
import Button from "../../components/Buttons";
import SelectBox from "../../components/SelectBox";
// import PaginationTop from "./PaginationTop";
import "../../sass/global/components/_component.navbar.scss";

const Navbar = (props) => {
    const { width } = props;
    return (
        <div className="ccs-navbar-wrap" style={{ width: width }}>
            <span>Sắp xếp theo</span>
            <Button text="Nổi bật" className="ccs-btn-nav" />
            <Button text="Bán chạy" className="ccs-btn-nav" />
            <Button text="Hàng mới" className="ccs-btn-nav" />
            <Button text="Khuyến mại" className="ccs-btn-nav" />
            <Button text="Tên sản phẩm" className="ccs-btn-nav" />
            <SelectBox
                option="Giá sản phẩm"
                class_selectbox="navbar_left__selectbox"
            />
        </div>
    );
}

export default Navbar;