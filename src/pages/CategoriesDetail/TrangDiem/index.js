import React, { useState, useEffect } from "react";
import Filter from "../../../components/Filter";
import BreadCrumb from "../../../components/BreadCrumb";
import ListProductHorizontal from "../../../components/ListProductByCategories/ListProductHorizontal";
import ListCategoriesDetail from "../../../components/ListProductByCategories/ListCategoriesDetail";
import "./style.scss";

const TrangDiem = () => {
  const demoData = () => {
    let data = [];
    for (let i = 0; i < 110; i++) {
      data.push([i]);
    }
    return data;
  };
  const arr2 = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
  useEffect(() => {
    demoData();
  }, []);

  return (
    <div className="coco-trangdiem-wrap">
      <BreadCrumb marginTop="13px" firstUrl="SON MÔI" secondUrl="Son Dưỡng" />
      <div className="coco-trangdiem-body">
        <div className="trangdiem-body--left">
          <Filter marginTop="32px" data={["1", "2", "3"]} />
        </div>
        <div className="trangdiem-body--right">
          <ListCategoriesDetail marginTop="32px" lstProduct={demoData()} />
        </div>
      </div>
      <div className="coco-trangdiem-bottom">
        <ListProductHorizontal
          titleHeader="SẢN PHẨM ĐÃ XEM"
          displayTimeBox="none"
          setLabel="none"
          marginTop="64px"
          classComponent="trangdiem-list-product-horizontal"
          type="flashsale"
          data={arr2}
        />
      </div>
    </div>
  );
};

export default TrangDiem;
