import React, { useState, useEffect } from "react";
import SelectBox from "../../../components/SelectBox";
import Product from "./Product";
import PaginationTop from "./PaginationTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../sass/global/components/_comopnent.list.scss";

const ListCategoriesDetail = (props) => {
    const [activePage, setActivePage] = useState(null);
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
                    ({totalProduct}) sản phẩm)
        </span>
            </div>
            <div className="coco-list-categories-body">
                <div className="coco-list-categories--navbar">
                    <div className="categories--navbar_left">
                        <span>Sắp xếp theo</span>
                        <button className="navbar_left__button">Nổi bật</button>
                        <button className="navbar_left__button">Bán chạy</button>
                        <button className="navbar_left__button">Hàng mới</button>
                        <button className="navbar_left__button">Khuyến mại</button>
                        <button className="navbar_left__button">Tên sản phẩm</button>
                        {/* <Button text="Nổi bật" className="navbar_left__button" /> */}
                        {/* <Button text="Bán chạy" className="navbar_left__button" />
            <Button text="Hàng mới" className="navbar_left__button" />
            <Button text="Khuyến mại" className="navbar_left__button" />
            <Button text="Tên sản phẩm" className="navbar_left__button" /> */}
                        <SelectBox
                            option="Giá sản phẩm"
                            class_selectbox="navbar_left__selectbox"
                        />
                    </div>
                    <div className="categories--navbar_right">
                        <PaginationTop
                            data={lstProduct}
                            setDataAfterPagination={setDataAfterPagination}
                        />
                    </div>
                </div>
                <div className="coco-list-categories--list">
                    {/* {lstProduct.map((item, index) => {
            return <Product key={index} />;
          })} */}
                    {DataAfterPagination
                        ? DataAfterPagination.map((item, index) => {
                            return <Product key={index} />;
                        })
                        : lstProduct.map((item, index) => {
                            return <Product key={index} />;
                        })}
                </div>
                <div className="coco-list-categories-paginate">
                    <div className="coco-list-categories-item">
                        <img
                            src="./Images/sort-next.svg"
                            className="categories-item--transform"
                        />
                        <img
                            src="./Images/sort-down.svg"
                            className="categories-item--transform"
                        />
                        <div className="categories-item--child">
                            <button>
                                <span>1</span>
                            </button>
                            <button>
                                <span>2</span>
                            </button>
                            <button>
                                <span>3</span>
                            </button>
                            <button>
                                <span>4</span>
                            </button>
                            <button>
                                <span>5</span>
                            </button>
                        </div>
                        <img src="./Images/sort-down.svg" />
                        <img src="./Images/sort-next.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListCategoriesDetail;
