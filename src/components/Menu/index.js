import React, { Component } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./Dropdown";
import styled from "styled-components";
import "./style.scss";

const Menu = () => {
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
    <div className="menu__wrap">
      <DropdownMenu
        title="DANH MỤC SẢN PHẨM"
        item={data.map((item, index) => {
          return (
            <div>
              <span>{item}</span>
              <img src="./Images/ic-arrowback.svg" />
            </div>
          );
        })}
      />
      <DropdownItem title="GIỚI THIỆU" item="Unset" />
      <DropdownItem title="THƯƠNG HIỆU" item="Unset" />
      <DropdownItem title="KHUYẾN MÃI" item="Unset" />
      <DropdownItem title="XU HƯỚNG LÀM ĐẸP" item="Unset" />
      <DropdownItem title="TRA CỨU ĐƠN HÀNG" item="Unset" />
      <DropdownItem title="TẢI ỨNG DỤNG" item="Unset" />
      <DropdownItem title="HỎI ĐÁP" item="Unset" />
      <DropdownItem title="LIÊN HỆ" item="Unset" />
    </div>
  );
};

export default Menu;
