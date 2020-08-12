import React, { useState, useEffect } from "react";
import SelectBox from "../../../components/SelectBox";
import Product from "./Product";
import Button from "../../Buttons";
import Pagination from "../../Pagniation";
import PaginationTop from "./PaginationTop";
import Item from "../../../components/Items";
import Navbar from "../../../components/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../sass/global/components/_comopnent.list.scss";

const ListCategoriesDetail = (props) => {
    // const [activePage, setActivePage] = useState(null);
    const [listProduct, setListProduct] = useState([]);
    const [DataAfterPagination, setDataAfterPagination] = useState([]);
    const { marginTop, lstProduct, listFilterChild, totalProduct, data } = props;
    useEffect(() => {
        // if (data) {
        //   setListItem(data);
        // }
        if (lstProduct) {
            setListProduct(lstProduct);
        }
    }, []);
    return (
        <div className="coco-list-categories-wrap" style={{ marginTop: marginTop }}>
            <div className="coco-list-categories-header">
                Trang điểm mặt
                <span style={{ display: totalProduct ? "" : "none" }}>
                    ({totalProduct}) sản phẩm
                </span>
            </div>
            <div className="coco-list-categories-body">
                <div className="coco-list-categories--navbar">
                    <Navbar />
                    <div className="categories--navbar_right">
                        <PaginationTop
                            data={lstProduct}
                            setDataAfterPagination={setDataAfterPagination}
                        />
                    </div>
                </div>
                <div className="coco-list-categories--list">
                    {DataAfterPagination
                        ? DataAfterPagination.map((item, index) => {
                            return <Item type={3} key={index} />;
                        })
                        : lstProduct.map((item, index) => {
                            return <Item type={3} key={index} />;
                        })}
                </div>
                <Pagination />
            </div>
        </div>
    );
};

export default ListCategoriesDetail;
