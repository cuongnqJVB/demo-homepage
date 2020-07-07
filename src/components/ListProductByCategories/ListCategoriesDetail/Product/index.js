import React, { Component } from "react";
import Button from "../../../Buttons";
import "../../../../scss/ListProductByCategories/ListCategoriesDetail/Product/style.scss";

class Product extends Component {
  render() {
    return (
      <div className="product-component-wrap">
        <div className="product-component-item product-component-item-active">
          <div className="product-component-item--hovered">
            <div className="item--hovered_title">
              Kem Chống Nắng The Saem Eco Earth Power
            </div>
            <div className="item--hovered_button">
              <Button
                text={<img src="./Images/ic-heart.svg" />}
                className="item--hovered_button__like"
              />
              <Button
                text={<img src="./Images/ic-cart-red.svg" />}
                className="item--hovered_button__cart"
              />
              <Button text="Mua ngay" className="item--hovered_button__buy" />
            </div>
          </div>
          {/* <div className="product-component-item--label">
            <img src="./Images/ic-new.svg" />
          </div> */}
          <img src="./Images/product3.jpg" />
          {/* <div className="product-component-item--discount">
          <span>-15%</span>
        </div> */}
          <div className="product-component-item--title">
            Nước tẩy trang Eucerin dành cho mọi loại da
          </div>
          <div className="product-component-item--price">
            <span>211.500 đ</span>
            <span>235.500 đ</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
