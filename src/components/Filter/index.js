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
        <div className="coco-filter-wrap" style={{ marginTop: marginTop }}>
            <div className="coco-filter--button">
                <img src="./Images/ic-filter-black.svg" alt="" />
                <span>Bộ lọc tìm kiếm</span>
            </div>
            {listItem.map((item, index) => {
                return (
                    <div className="coco-filter--list_item">
                        <div className="filter--list_item__header">
                            Trang điểm
                        <span style={{ display: totalItem ? "" : "none" }}>
                                ({totalItem})
                        </span>
                        </div>
                        <div className="filter--list_item__expand">
                            <div className="item_expand__root  item_expand__active">
                                Trang điểm mặt
                            </div>
                            <div className="item_expand__child">
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
                            <div className="item_expand__root">Trang Điểm Môi</div>
                            <div className="item_expand__root">Tẩy Trang Mắt - Môi</div>
                            <div className="item_expand__root">Chăm Sóc Móng</div>
                            <div className="item_expand__root"> Dụng Cụ Trang Điểm</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Filter;
