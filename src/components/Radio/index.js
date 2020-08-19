import React, { Component } from "react";
import "../../sass/global/components/_component.radio.scss";

class Radio extends Component {
    render() {
        const { id, name, value, text, className } = this.props;
        return (
            // <div className={`ccs-radio-cpn ${className}`}>
            //     <div className="ccs-radio-btn" onClick={onClick}>
            //         <input type="radio" id={id} name={name} value={value} class="ccs-radio-custom" />
            //         <label for={id} class="ccs-radio-custom-label">{text}</label>
            //     </div>
            // </div>
            <div className={`custom-control custom-radio custom-control-inline ${className}`}>
                <input type="radio" class="custom-control-input" name={name} id={id} />
                <label class="custom-control-label" for={id}>
                    {text}
                </label>
            </div>
        );
    }
}

export default Radio;