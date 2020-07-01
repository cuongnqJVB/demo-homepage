import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import styles from "./style.module.scss";
import "./style.scss";

class Cart extends Component {
  render() {
    const { text, total, TextLink, className } = this.props;
    const Wrap = styled.div``;
    return (
      // <Wrap className={`${styles.WrapCart} ${className}`}>
      //   <button className={`${styles.wc_button}`}>
      //     <Link className={styles.wcb_link} to={TextLink}>
      //       <img src="./Images/ic-cart.svg" />
      //       <span>{text}</span>
      //     </Link>
      //   </button>
      // </Wrap>
      <Wrap className={`WrapCart ${className}`}>
      <button className="wc_button">
        <Link className="wcb_link" to={TextLink}>
          <img src="./Images/ic-cart.svg" />
          <span>{text}</span>
          <span>({total})</span>
        </Link>
      </button>
    </Wrap>
    );
  }
}

export default Cart;
