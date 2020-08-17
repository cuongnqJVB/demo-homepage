import React from "react";
import Form from "react-bootstrap/Form";
import "../../sass/global/components/_component.selectbox.scss";

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
            alt=""
        />
    </a>
));

export default ({
    name,
    text,
    option,
    value,
    className,
    data = [],
    ...props
}) => {
    return (
        <div className={`coco-selectbox-wrap ${className}`}>
            <Form.Control as="select" name={name}>
                <option>{option}</option>
            </Form.Control>
        </div>
    );
};
