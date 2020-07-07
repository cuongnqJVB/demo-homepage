import React from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import "./style.scss";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <img
      src="./Images/ic-arrowtop.svg"
      style={{ transform: "rotate(-180deg)" }}
    />
  </a>
));

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
      <Form.Control as="select">
        <option>{option}</option>
      </Form.Control>
    </div>
  );
};
