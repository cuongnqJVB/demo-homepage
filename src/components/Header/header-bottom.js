import React from "react";
import DropdownMenu from "../Menu/DropdownMenu";
import DropdownItem from "../Menu/Dropdown";
import "../../../src/sass/global/components/_component.menu.scss";

const HeaderBottom = (props) => {
    const data = [
        "TRANG ĐIỂM",
        "SON MÔI",
        "CHĂM SÓC DA",
        "CHĂM SÓC CƠ THỂ",
        "CHĂM SÓC TÓC",
        "DỤNG CỤ",
        "NƯỚC HOA",
        "MỸ PHẨM HIGH END",
        "COMBO",
        "THỰC PHẨM CHỨC NĂNG",
        "SẢN PHẨM KHÁC",
    ];

    return (
        <div className="header-bottom-wrap">
            <DropdownMenu
                title="DANH MỤC SẢN PHẨM"
                menuItem={data}
                setActiveMenu={props.setActiveMenu}
                // get props from child component
                setOverFlow={props.setOverFlow}
            />
            <DropdownItem title="GIỚI THIỆU" type="sale" />
            <DropdownItem title="THƯƠNG HIỆU" type="sale" />
            <DropdownItem
                title="KHUYẾN MÃI"
                // data={["Hot Deals", "Flash Deals", "Đang diễn ra"]}
                type="sale"
            />
            <DropdownItem title="XU HƯỚNG LÀM ĐẸP" type="sale" />
            <DropdownItem title="TRA CỨU ĐƠN HÀNG" type="tracking" />
            <DropdownItem title="TẢI ỨNG DỤNG" type="app" />
            <DropdownItem title="HỎI ĐÁP" type="sale" />
            <DropdownItem title="LIÊN HỆ" type="sale" />
        </div>
    );
}

export default HeaderBottom;
