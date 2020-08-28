import React, { useState, useEffect } from "react";
import "../../sass/global/components/_component.filter.scss";

const Filter = (props) => {
    const [listItem, setListItem] = useState([]);
    const { marginTop, filterTitle, listFilterChild, totalItem, data } = props;
    useEffect(() => {
        if (data) {
            setListItem(data);
        }
    }, []);
    return (
        <div className="coco-filter-wrapper" style={{ marginTop: marginTop }}>
            <div className="coco-filter-wrapper--toggle">
                <img src="./Images/ic-filter-black.svg" alt="" />
                <span>Bộ lọc tìm kiếm</span>
            </div>
            {listItem.map((item, index) => {
                return (
                    <div className="coco-filter-wrapper--collapse">
                        <div class="list-group">
                            <div className="list-group-title">
                                Trang điểm
                                <span style={{ display: totalItem ? "" : "none" }}>
                                    ({totalItem})
                                </span>
                            </div>
                            <div className="list-group-items">
                                <div className="item-group item-expand">
                                    <span class="item-group-title">Trang điểm mặt</span>
                                    <div className="item-group-child">
                                        <span>Kem Nền</span>
                                        <span>Kem Lót</span>
                                        <span>Che Khuyết Điểm</span>
                                        <span>Phấn Má Hồng</span>
                                        <span>Phấn Nước Cushion</span>
                                        <span>Phấn Phủ</span>
                                        <span>Tạo Khối - Highlighter</span>
                                        <span>Tạo Khối - Highlighter</span>
                                        <span>Tạo Khối - Highlighter</span>
                                    </div>
                                </div>
                                <div className="list-group-items">
                                    <div className="item-group">
                                        <span class="item-group-title">Tẩy Trang Mắt - Môi</span>
                                    </div>
                                </div>
                                <div className="list-group-items">
                                    <div className="item-group">
                                        <span class="item-group-title">Chăm sóc móng</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Filter;
