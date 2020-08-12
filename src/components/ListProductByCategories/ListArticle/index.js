import React, { Component } from "react";
import Item from "../../Items";
import "../../../sass/global/components/_comopnent.list.scss";

class ListArticle extends Component {
    render() {
        const {
            logoHeader,
            titleHeader,
            displayTimeBox,
            marginTop,
            classComponent,
            btnExternal,
            data,
        } = this.props;
        return (
            <div
                className={`list-article-wrap ${classComponent}`}
                style={{ marginTop: marginTop }}
            >
                <div className="list-article-header">
                    <div className="article-header--left">
                        <div className="header--left_title">{titleHeader}</div>
                    </div>
                    <div className="article-header--right">
                        <span>{btnExternal ? btnExternal : "Xem Thêm"}</span>
                    </div>
                </div>
                <div className="list-article-content">
                    {data.map((item, index) => {
                        return (
                            <Item
                                type={4}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ListArticle;
