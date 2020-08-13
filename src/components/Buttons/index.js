import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../sass/global/components/_component.button.scss";
class Button extends Component {
    render() {
        const { text, type, icon, TextLink, className } = this.props;
        return (
            <div className={`ccs-button-cpn ${className}`}>
                <button className="ccs-button-wrap" type={type}>
                    <Link className="ccs-button-link" to={TextLink}>
                        {icon ? <img src={icon} alt="" /> : ""}
                        <span>{text}</span>
                    </Link>
                </button>
            </div>
        );
    }
}

export default Button;