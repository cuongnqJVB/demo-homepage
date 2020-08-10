import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "./style.module.scss";

class Button extends Component {
  render() {
    const { text, TextLink, className } = this.props;
    const Wrap = styled.div``;
    return (
      <Wrap className={`${styles.WrapButton} ${className}`}>
        <button className={`${styles.wb_button}`}>
          <Link className={styles.wbb_link} to={TextLink}>
            <span>{text}</span>
          </Link>
        </button>
      </Wrap>
    );
  }
}

export default Button;