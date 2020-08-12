import React, { Component } from "react";
import Banner from "../../components/Banners";
import Item from "../../components/Items";
import Card from "../../components/Cards";
import "./style.scss";

class HomePage extends Component {
    render() {
        const arr2 = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
        const arr3 = ["1", "1", "1", "1"];
        const arr4 = ["1", "1", "1", "1", "1"];
        return (
            <div className="coco-home-wrap">
                <div className="coco-home-content1">
                    <div className="home-content1--left"></div>
                    <div className="home-content1--right">
                        <Banner />
                    </div>
                </div>
                <Card
                    type="horizontal"
                    data={arr2}
                    marginTop="32px"
                    displayTimeBox="block"
                    logoHeader="./Images/logo-flashsale.svg"
                />
                <Card
                    type="horizontal"
                    data={arr2}
                    marginTop="56px"
                    titleHeader="HOT TRENDING"
                />
                <Card
                    type="brand"
                    data={arr2}
                    marginTop="56px"
                    titleHeader="THƯƠNG HIỆU NỔI BẬT"
                    borderBottom={true}
                />

                {/* Poster */}
                <div className="hpl__poster">
                    <img src="./Images/Rectangle 20.jpg" alt="" />
                    <img src="./Images/Rectangle 21.jpg" alt="" />
                </div>

                <Card
                    type="vertical"
                    posterTitle="TRANG ĐIỂM"
                    posterImg="./Images/Rectangle 25.jpg"
                    marginTop="72px"
                    data={arr2}
                    lstTab={["Trang Điểm Mặt", "Trang Điểm Vùng Mắt", "Tẩy trang"]}
                />
                <Card
                    type="vertical"
                    posterTitle="SON MÔI"
                    posterImg="./Images/Rectangle 31.jpg"
                    mode="reverse"
                    marginTop="72px"
                    data={arr2}
                    lstTab={[
                        "Son Môi",
                        "Kẻ Viền Môi",
                        "Tẩy Tế Bào Chết Môi",
                        "Mặt Nạ Môi",
                    ]}
                />
                <Card
                    type="vertical"
                    posterTitle="CHĂM SÓC DA"
                    posterImg="./Images/Rectangle 35.jpg"
                    categoriesType={1}
                    marginTop="72px"
                    data={arr2}
                    lstTab={["MẶT NẠ", "SỮA RỬA MẶT", "XỊT KHOÁNG", "KEM DƯỠNG DA"]}
                />

                {/* Banner */}
                <div className="hpl__banner1">
                    <img src="./Images/Rectangle.jpg" alt="" />
                    <img src="./Images/Rectangle 27.jpg" alt="" />
                    <img src="./Images/Rectangle 26.jpg" alt="" />
                </div>

                <Card
                    type="vertical"
                    posterTitle="Chăm sóc cơ thể"
                    posterImg="./Images/Rectangle 44.jpg"
                    mode="reverse"
                    marginTop="72px"
                    data={arr2}
                    lstTab={[
                        "Dưỡng Ẩm Toàn Thân",
                        "SỮA TẮM",
                        "TẨY TẾ BÀO CHẾT",
                        "KHỬ MÙI CƠ THỂ",
                    ]}
                />
                <Card
                    type="vertical"
                    posterTitle="CHĂM SÓC TÓC"
                    posterImg="./Images/Rectangle 43.jpg"
                    categoriesType={1}
                    marginTop="72px"
                    data={arr2}
                    lstTab={[
                        "Dầu Gội",
                        "Dầu Xả",
                        "Kem Ủ Tóc",
                        "Dầu Dưỡng Tóc",
                        "Thuốc Nhuộm",
                    ]}
                />
                <Card
                    type="vertical"
                    posterTitle="NƯỚC HOA"
                    posterImg="./Images/Rectangle 47.jpg"
                    mode="reverse"
                    marginTop="72px"
                    data={arr2}
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
                    <img src="./Images/Image 89.png" alt="" />
                </div>

                {/* BÀI VIẾT & SỰ KIỆN */}
                <Card
                    type="article"
                    titleHeader="BÀI VIẾT & SỰ KIỆN"
                    btnExternal="Xem THÊM"
                    marginTop="56px"
                    borderBottom={true}
                    data={arr3}
                />

                {/* DANH SÁCH CỬA HÀNG */}
                <div className="hpl__store">
                    <div className="hpls__title">DANH SÁCH CỬA HÀNG</div>
                    <div className="hpls_lstStore">
                        <Item type={5} data={arr4} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
