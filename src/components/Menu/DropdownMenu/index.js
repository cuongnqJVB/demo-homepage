import React from "react";
import styled from "styled-components";
import "./style.scss";

const SanHead = styled.div`
  // font-family: NunitoSansRegular;
  // font-size: 15px;
  // line-height: 20px;
`;

export default ({ menuItem, title, width, padding, className, ...props }) => {
  return (
    <div className={`coco-menu_dropdown ${className} ${props.setActiveMenu}`}>
      <div class="coco-menu-dropdown_detail">
        <div className="coco-menu-dropdown_detail__hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <span>{title}</span>
        <div
          class="coco-menu-dropdown_detail__content"
          // set opacity for layout when hover menu
          onMouseEnter={() => {
            props.setOverFlow("layout_overflow");
          }}
          onMouseLeave={() => {
            props.setOverFlow("");
          }}
        >
          {menuItem ? (
            menuItem.map((item, index) => {
              return (
                <div className="coco-mdd_content__item">
                  <span>{item}</span>
                  <img src="./Images/ic-arrowback.svg" />
                  <div className="coco-mdd-content_item__child">
                    <div>
                      <div className="coco-mddd-item_child__block1">
                        <div className="coco-mdddi-child_block1__header">
                          <div>
                            <span>Nổi bật</span>
                          </div>
                          <div>
                            <span>Bán chạy</span>
                          </div>
                          <div>
                            <span>Hàng mới</span>
                          </div>
                          <div>
                            <span>Khuyến mại</span>
                          </div>
                        </div>
                        <div className="coco-mdddi-child_block1__content">
                          <div className="coco-mdddic-block1_content__col">
                            <div className="coco-mdddic-block1-content_col__title">
                              Trang Điểm Mặt
                            </div>
                            <div className="coco-mdddic-block1-content_col__subtitle">
                              <span>Kem Nền</span>
                              <span>Kem Lót</span>
                              <span>Che Khuyết Điểm</span>
                              <span>Phấn Má Hồng</span>
                              <span>Phấn Nước Cushion</span>
                              <span>Phấn Phủ</span>
                              <span>Tạo Khối - Highlighter</span>
                            </div>
                          </div>
                          <div className="coco-mdddic-block1_content__col">
                            <div className="coco-mdddic-block1-content_col__title">
                              Trang Điểm Vùng Mắt
                            </div>
                            <div className="coco-mdddic-block1-content_col__subtitle">
                              <span>Kẻ Chân Mày</span>
                              <span>Kẻ Mắt</span>
                              <span>Mascara</span>
                              <span>Phấn Mắt</span>
                            </div>
                          </div>
                          {/* <div className="dmdcic-block1-content-col">
                            <div className="dmdcicb-content-col-title">
                              Trang Điểm Vùng Mắt
                            </div>
                            <div className="dmdcicb-content-col-sub">
                              <span>Kẻ Chân Mày</span>
                              <span>Kẻ Mắt</span>
                              <span>Mascara</span>
                              <span>Phấn Mắt</span>
                            </div>
                          </div>
                          <div className="dmdcic-block1-content-col">
                            <div className="dmdcicb-content-col-title">
                              Trang Điểm Vùng Mắt
                            </div>
                            <div className="dmdcicb-content-col-sub">
                              <span>Kẻ Chân Mày</span>
                              <span>Kẻ Mắt</span>
                              <span>Mascara</span>
                              <span>Phấn Mắt</span>
                            </div>
                            <div className="dmdcicb-content-col-sub">
                              <span>Kẻ Chân Mày</span>
                              <span>Kẻ Mắt</span>
                              <span>Mascara</span>
                              <span>Phấn Mắt</span>
                            </div>
                          </div> */}
                        </div>
                      </div>
                      <div className="coco-mddd-item_child__block2">
                        <img src="./Images/trangdiem.png" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
