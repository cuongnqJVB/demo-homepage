import React, { Component } from "react";
import "../../sass/global/components/_component.checkbox.scss";

class Checkbox extends Component {
    render() {
        const { name, value, text, className } = this.props;
        return (
            <div>
                <label className={`c-checkbox ${className}`}>
                    <input
                        type="checkbox"
                        name={name}
                        value={value}
                    />
                    <label>{text}</label>
                    <span></span>
                </label>
            </div>
        );
    }
}

export default Checkbox;