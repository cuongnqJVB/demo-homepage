import React, { Component } from "react";
import "../../sass/global/components/_component.radio.scss";

class Radio extends Component {
    render() {
        const { id, name, value, text, className, onClick } = this.props;
        return (
            <div className={`ccs-radio-cpn ${className}`}>
                <div className="ccs-radio-btn" onClick={onClick}>
                    <input type="radio" id={id} name={name} value={value} class="ccs-radio-custom" />
                    <label for={id} class="ccs-radio-custom-label">{text}</label>
                </div>
            </div>
        );
    }
}

export default Radio;