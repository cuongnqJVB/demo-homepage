import React, { Component } from "react";
import "../../sass/global/components/_component.textarea.scss";

class Textarea extends Component {
    render() {
        const { name, placeholder, rows, className } = this.props;
        return (
            <div className={`ccs-textarea-cpn ${className}`}>
                <textarea rows={rows} name={name} placeholder={placeholder}></textarea>
            </div>
        );
    }
}

export default Textarea;