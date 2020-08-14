import React, { Component } from "react";
import "../../sass/global/components/_component.input.scss";

class Input extends Component {
    render() {
        const { type, name, placeholder, style, className } = this.props;
        return (
            <div className={`ccs-input-cpn ${className}`}>
                <input type={type} name={name} placeholder={placeholder} />
            </div>
        );
    }
}

export default Input;