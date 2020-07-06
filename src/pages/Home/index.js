import React, { Component } from "react";
import ListArticle from "../../components/ListProductByCategories/ListArticle";
import ListBrand from "../../components/ListProductByCategories/ListBrand";
import ListProductVertical from "../../components/ListProductByCategories/ListProductVertical";
import ListProductHorizontal from "../../components/ListProductByCategories/ListProductHorizontal";
import "./style.scss";

class HomePage extends Component {
  render() {
    const arr2 = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
    const arr3 = ["1", "1", "1", "1"];

    return (
      <div className="coco-home-wrap">
        <div className="coco-home-content1">
          <div className="home-content1--left"></div>
          <div className="home-content1--right">
            <div className="home-content1--right_item1">
              <img src="./Images/Rectangle 5.jpg" />
            </div>
            <div className="home-content1--right_item2">
              <img src="./Images/Rectangle 5114.jpg" />
              <img src="./Images/Rectangle 5113.jpg" />
            </div>
          </div>
        </div>
        <ListProductHorizontal
          logoHeader="./Images/logo-flashsale.svg"
          type="flashsale"
          marginTop="32px"
          data={arr2}
        />
        <ListProductHorizontal
          titleHeader="HOT TRENDING"
          displayTimeBox="none"
          marginTop="56px"
          type="flashsale"
          data={arr2}
        />
        <ListBrand
          titleHeader="THƯƠNG HIỆU NỔI BẬT"
          displayTimeBox="none"
          marginTop="56px"
          setSlidesToShow={5}
          setSlidesToScroll={2}
          type="brand"
          classComponent="fslist__brand"
          data={[
            "CLINIQUE",
            "CLINIQUE",
            "CLINIQUE",
            "CLINIQUE",
            "CLINIQUE",
            "CLINIQUE",
            "CLINIQUE",
          ]}
        />
        {/* Poster */}
        <div className="hpl__poster">
          <img src="./Images/Rectangle 20.jpg" />
          <img src="./Images/Rectangle 21.jpg" />
        </div>
        <ListProductVertical
          categoriesTitle="TRANG ĐIỂM"
          posterImg="./Images/Rectangle 25.jpg"
          marginTop="72px"
          lstItem={arr2}
          lstTab={["Trang Điểm Mặt", "Trang Điểm Vùng Mắt", "Tẩy trang"]}
        />
        <ListProductVertical
          categoriesTitle="SON MÔI"
          posterImg="./Images/Rectangle 31.jpg"
          mode="reverse"
          marginTop="72px"
          lstItem={arr2}
          lstTab={[
            "Son Môi",
            "Kẻ Viền Môi",
            "Tẩy Tế Bào Chết Môi",
            "Mặt Nạ Môi",
          ]}
        />
        <ListProductVertical
          categoriesTitle="CHĂM SÓC DA"
          posterImg="./Images/Rectangle 35.jpg"
          categoriesType={1}
          marginTop="72px"
          lstItem={arr2}
          lstTab={["MẶT NẠ", "SỮA RỬA MẶT", "XỊT KHOÁNG", "KEM DƯỠNG DA"]}
        />
        {/* Banner */}
        <div className="hpl__banner1">
          <img src="./Images/Rectangle.jpg" />
          <img src="./Images/Rectangle 27.jpg" />
          <img src="./Images/Rectangle 26.jpg" />
        </div>
        <ListProductVertical
          categoriesTitle="Chăm sóc cơ thể"
          posterImg="./Images/Rectangle 44.jpg"
          mode="reverse"
          marginTop="72px"
          lstItem={arr2}
          lstTab={[
            "Dưỡng Ẩm Toàn Thân",
            "SỮA TẮM",
            "TẨY TẾ BÀO CHẾT",
            "KHỬ MÙI CƠ THỂ",
          ]}
        />
        <ListProductVertical
          categoriesTitle="CHĂM SÓC TÓC"
          posterImg="./Images/Rectangle 43.jpg"
          categoriesType={1}
          marginTop="72px"
          lstItem={arr2}
          lstTab={[
            "Dầu Gội",
            "Dầu Xả",
            "Kem Ủ Tóc",
            "Dầu Dưỡng Tóc",
            "Thuốc Nhuộm",
          ]}
        />
        <ListProductVertical
          categoriesTitle="NƯỚC HOA"
          posterImg="./Images/Rectangle 47.jpg"
          mode="reverse"
          marginTop="72px"
          lstItem={arr2}
          lstTab={[
            "Floral",
            "Woody",
            "Citrus",
            "Fruity",
            "Oriental",
            "Oceanic",
            "Spices",
          ]}
        />
        {/* Banner */}
        <div className="hpl__banner2">
          <img src="./Images/Image 89.png" />
        </div>
        {/* BÀI VIẾT & SỰ KIỆN */}
        <ListArticle
          titleHeader="BÀI VIẾT & SỰ KIỆN"
          btnExternal="Xem THÊM"
          marginTop="56px"
          classComponent=""
          data={arr3}
        />
        {/* DANH SÁCH CỬA HÀNG */}
        <div className="hpl__store">
          <div className="hpls__title">DANH SÁCH CỬA HÀNG</div>
          <div className="hpls_lstStore">
            <div className="hplss__item">
              <div className="hplssi__img">
                <img src="./Images/coco-store.png" />
              </div>
              <div className="hplssi__text">
                <span>258 Bà Triệu, Hà Nội</span>
                <span>0988888948</span>
              </div>
            </div>
            <div className="hplss__item">
              <div className="hplssi__img">
                <img src="./Images/coco-store.png" />
              </div>
              <div className="hplssi__text">
                <span>258 Bà Triệu, Hà Nội</span>
                <span>0988888948</span>
              </div>
            </div>
            <div className="hplss__item">
              <div className="hplssi__img">
                <img src="./Images/coco-store.png" />
              </div>
              <div className="hplssi__text">
                <span>258 Bà Triệu, Hà Nội</span>
                <span>0988888948</span>
              </div>
            </div>
            <div className="hplss__item">
              <div className="hplssi__img">
                <img src="./Images/coco-store.png" />
              </div>
              <div className="hplssi__text">
                <span>258 Bà Triệu, Hà Nội</span>
                <span>0988888948</span>
              </div>
            </div>
            <div className="hplss__item">
              <div className="hplssi__img">
                <img src="./Images/coco-store.png" />
              </div>
              <div className="hplssi__text">
                <span>258 Bà Triệu, Hà Nội</span>
                <span>0988888948</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
