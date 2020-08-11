import React, { Component } from "react";
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
                            <div className="list-article--item">
                                <div className=" article--item_background">
                                    <div>
                                        <div className="item_background_title">
                                            Bộ sản phẩm AVÈNE cho mùa hè năng động
                    </div>
                                        <div className="item_background_description">
                                            Avène là dòng Dược Mỹ Phẩm của Pháp với lịch sử phát triển
                                            gần 300 năm, đã được các bác sĩ da liễu trên toàn thế giới
                                            xác nhận...
                    </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ListArticle;
