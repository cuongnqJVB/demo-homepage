import React, { useState } from "react";
import Button from "../../Buttons";
import styled from "styled-components";
import "./style.scss";

export default ({ title, data, width, padding, type, className, ...props }) => {
  const [dataDropdown, setDataDropdown] = useState([]);
  const renderDropdownSale = (type, data) => {
    if (type === "sale") {
      return (
        <div class="coco-menu-dropdownd-x_wrap__list coco-mdx-wrap_list__sale">
          <div className="coco-md-x-wrap_list_item">Hot Deals</div>
          <div className="coco-md-x-wrap_list_item">Flash Deals</div>
          <div className="coco-md-x-wrap_list_item">Đang diễn ra</div>
        </div>
      );
    }
  };
  const renderDropdownTrackingOrder = (type, data) => {
    if (type === "tracking") {
      return (
        <div class="coco-menu-dropdownd-x_wrap__list coco-mdx-wrap_list__tracking">
          <div>
            <div className="coco-mdxw-list-tracking__input">
              <input placeholder="Nhập mã đơn hàng" />
            </div>
            <Button
              className="coco-mdxw-list-tracking__button"
              text="Kiểm tra đơn hàng"
            />
          </div>
        </div>
      );
    }
  };
  const renderDropdownDownloadApp = (type, data) => {
    if (type === "app") {
      return (
        <div class="coco-menu-dropdownd-x_wrap__list coco-mdx-wrap_list__app">
          <div>
            <img src="./Images/app-qrcode.png" />
            <div className="coco-mdxw-list-app_icon">
              <div>
                <img src="./Images/ic-appstore-black.svg" />
                <span> App Store</span>
              </div>
              <div>
                <img src="./Images/ic-googleplay-black.svg" />
                <span> Google Play</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className={`coco-menu-dropdownd_x ${className}`}>
      <div class="coco-menu-dropdownd-x_wrap">
        <span>{title}</span>
        {renderDropdownSale(type, data)}
        {renderDropdownTrackingOrder(type, data)}
        {renderDropdownDownloadApp(type, data)}
      </div>
    </div>
  );
};
