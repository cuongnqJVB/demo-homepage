import React, { useState, useEffect } from "react";
import PaginationRedirect from "../../Pagination/PaginationRedirect";
import PaginationPage from "../../Pagination/PaginationPage";
import Item from "../../../components/Items";
import Navbar from "../../../components/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../sass/global/components/_component.card.scss";

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
        <div className="coco-card-detail-wrap" style={{ marginTop: marginTop }}>
            <div className="coco-card-detail-header">
                {titleCard}
                <span style={{ display: totalProduct ? "" : "none" }}>
                    ({totalProduct} sản phẩm)
                </span>
            </div>
            <div className="coco-card-detail-body">
                <div className="coco-card-detail--navbar">
                    <Navbar width="75%" />
                    <div className="categories--navbar_right">
                        <PaginationPage
                            data={lstProduct}
                            setDataAfterPagination={setDataAfterPagination}
                        />
                    </div>
                </div>
                <div className="coco-card-detail--list">
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
