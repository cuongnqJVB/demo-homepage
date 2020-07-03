import React from "react";
import styled from "styled-components";
import "./style.scss";

export default ({
  name,
  text,
  option,
  value,
  class_selectbox,
  data = [],
  ...props
}) => {
  return (
    <div className={`coco-selectbox-wrap ${class_selectbox}`}>
      <select style={{ width: "100%", height: "100%" }}>
        <option value={option}>{option}</option>
      </select>
    </div>
  );
};
