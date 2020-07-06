import React, { useState, useEffect } from "react";
import Filter from "../../../components/Filter";
import "./style.scss";

const TrangDiem = () => {
  useEffect(() => {}, []);

  return (
    <div className="coco-trangdiem-wrap">
      <div className="coco-trangdiem-body">
        <div className="trangdiem-body--left">
          <Filter data={["1", "2", "3"]} />
        </div>
        <div className="trangdiem-body--right"></div>
      </div>
    </div>
  );
};

export default TrangDiem;
