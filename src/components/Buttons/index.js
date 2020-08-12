import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../sass/global/components/_component.button.scss";
class Button extends Component {
    render() {
        const { text, TextLink, className } = this.props;
        return (
            <div className={`ccs-button-cpn ${className}`}>
                <button className="ccs-button-wrap">
                    <Link className="ccs-button-link" to={TextLink}>
                        <span>{text}</span>
                    </Link>
                </button>
            </div>
        );
    }
}

export default Button;