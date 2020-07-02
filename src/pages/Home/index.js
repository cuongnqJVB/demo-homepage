import React, { Component } from "react";
import ListArticle from "../../components/ListArticle";
import FlashSale from "../../components/FlashSale";
import ListProductByCategories from "../../components/ListProductByCategories";
import "./style.scss";

class HomePage extends Component {
  render() {
    const arr = [
      "15%",
      "./Images/product1.jpg",
      "Nước tẩy trang Eucerin dành cho mọi loại da",
      "211.500 đ",
      "235.500 đ",
      "26%",
      "Còn lại 12 ngày 13:27:17",
    ];
    const arr2 = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
    const arr3 = ["1", "1", "1", "1"];
    const data = {
      product1: {
        discountVal: ["15%"],
        productImage: ["./Images/product1.jpg"],
        productTitle: "Nước tẩy trang Eucerin dành cho mọi loại da",
        price: "211.500 đ",
        priceStock: "235.500 đ",
        countDownWidth: "26%",
        countDown: "Còn lại 12 ngày 13:27:17",
      },
      product2: {
        discountVal: ["15%"],
        productImage: ["./Images/product1.jpg"],
        productTitle: "Nước tẩy trang Eucerin dành cho mọi loại da",
        price: "211.500 đ",
        priceStock: "235.500 đ",
        countDownWidth: "26%",
        countDown: "Còn lại 12 ngày 13:27:17",
      },
    };

    return (
      <div className="Homepage__Layout">
        <div className="hpl__content1">
          <div className="hplc_left"></div>
          <div className="hplc_right">
            <div className="hwb___item1">
              <img src="./Images/Rectangle 5.jpg" />
            </div>
            <div className="hwb___item2">
              <img src="./Images/Rectangle 5114.jpg" />
              <img src="./Images/Rectangle 5113.jpg" />
            </div>
          </div>
        </div>
        <FlashSale
          logoHeader="./Images/logo-flashsale.svg"
          type="flashsale"
          marginTop="32px"
          data={arr}
        />
        <FlashSale
          titleHeader="HOT TRENDING"
          displayTimeBox="none"
          marginTop="56px"
          type="flashsale"
          data={arr}
        />
        <FlashSale
          titleHeader="THƯƠNG HIỆU NỔI BẬT"
          displayTimeBox="none"
          marginTop="56px"
          type="brand"
          classComponent="fslist__brand"
          data={arr2}
          // item={arr.map((item, index) => {
          //   return (
          //     <div className="fslb__item">
          //       <img src="./Images/brand1.jpg" />
          //       <div className="fslbi__label">
          //         <span>CLINIQUE</span>
          //       </div>
          //     </div>
          //   );
          // })}
        />
        {/* Poster */}
        <div className="hpl__poster">
          <img src="./Images/Rectangle 20.jpg" />
          <img src="./Images/Rectangle 21.jpg" />
        </div>
        <ListProductByCategories
          cateTitle="TRANG ĐIỂM"
          posterImg="./Images/Rectangle 25.jpg"
          categoriesType={1}
          marginTop="72px"
          lstItem={arr2}
          lstTab={["Trang Điểm Mặt", "Trang Điểm Vùng Mắt", "Tẩy trang"]}
        />
        <ListProductByCategories
          cateTitle="SON MÔI"
          posterImg="./Images/Rectangle 31.jpg"
          categoriesType={2}
          marginTop="72px"
          lstItem={arr2}
          lstTab={[
            "Son Môi",
            "Kẻ Viền Môi",
            "Tẩy Tế Bào Chết Môi",
            "Mặt Nạ Môi",
          ]}
        />
        <ListProductByCategories
          cateTitle="CHĂM SÓC DA"
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
        <ListProductByCategories
          cateTitle="Chăm sóc cơ thể"
          posterImg="./Images/Rectangle 44.jpg"
          categoriesType={2}
          marginTop="72px"
          lstItem={arr2}
          lstTab={[
            "Dưỡng Ẩm Toàn Thân",
            "SỮA TẮM",
            "TẨY TẾ BÀO CHẾT",
            "KHỬ MÙI CƠ THỂ",
          ]}
        />
        <ListProductByCategories
          cateTitle="CHĂM SÓC TÓC"
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
        <ListProductByCategories
          cateTitle="NƯỚC HOA"
          posterImg="./Images/Rectangle 47.jpg"
          categoriesType={2}
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
