import React, { useState, useEffect } from "react";
import PaginationRedirect from "../../Pagination/PaginationRedirect";
import PaginationPage from "../../Pagination/PaginationPage";
import Item from "../../../components/Items";
import Button from "../../../components/Buttons";
import SelectBox from "../../../components/SelectBox";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../sass/global/components/_component.card2.scss";

const CardDetailByCategories = (props) => {
    // const [activePage, setActivePage] = useState(null);
    const [listProduct, setListProduct] = useState([]);
    const [DataAfterPagination, setDataAfterPagination] = useState([]);
    const {
        marginTop,
        titleCard,
        lstProduct,
        totalProduct
    } = props;

    useEffect(() => {
        if (lstProduct) {
            setListProduct(lstProduct);
        }
    }, []);

    return (
        <div className="card-list-item" style={{ marginTop: marginTop }}>

            <div className="card-list-item--header">
                {titleCard}
                <span style={{ display: totalProduct ? "" : "none" }}>
                    ({totalProduct} sản phẩm)
                </span>
            </div>
            <div className="card-list-item--content">
                <div className="coco-navbar header-navbar nav-flex nav-padding">
                    <div className="ccs-navbar--left nav-flex-left ">
                        <span>Sắp xếp theo</span>
                        <Button text="Nổi bật" className="ccs-btn-nav" />
                        <Button text="Bán chạy" className="ccs-btn-nav" />
                        <Button text="Hàng mới" className="ccs-btn-nav" />
                        <Button text="Khuyến mại" className="ccs-btn-nav" />
                        <Button text="Tên sản phẩm" className="ccs-btn-nav" />
                        <SelectBox
                            option="Giá sản phẩm"
                            className="ccs-selectbox ccs-select-price"
                        />
                    </div>
                    <div className="coco-navbar--right">
                        <PaginationPage
                            data={lstProduct}
                            setDataAfterPagination={setDataAfterPagination}
                        />
                    </div>
                </div>
                <div className="coco-list-item">
                    {DataAfterPagination
                        ? DataAfterPagination.map((item, index) => {
                            return <Item type={3} key={index} />;
                        })
                        : listProduct.map((item, index) => {
                            return <Item type={3} key={index} />;
                        })}
                </div>
                <PaginationRedirect />
            </div>
        </div >
    );
};

export default CardDetailByCategories;
