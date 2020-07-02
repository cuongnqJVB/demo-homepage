import React from "react";
import styled from "styled-components";
import "./style.scss";

const WrapFooter = styled.div`
  width: 100%;
  background: url("/Images/bgr-footer.jpg") center no-repeat;
  background-size: cover;
`;

const Footer = () => {
  return (
    <WrapFooter className="coco-footer_wrap">
      <div className="coco-footer-wrap_content">
        <div className="coco-footer-wrap-content_detail">
          <div className="coco-fw-content_detail__block1">
            <div className="coco-fwc-detail_block1__logo">
              <img src="./Images/big-logo-coco.svg" />
            </div>
            <div className="coco-fwc-detail_block1__image">
              <img src="./Images/bocongthuong_small.png" />
            </div>
            <div className="coco-fwc-detail_block1__icon">
              <img src="./Images/ic-facebook.svg" />
              <img src="./Images/ic-insta.svg" />
              <img src="./Images/ic-youtube.svg" />
              <img src="./Images/ic-google-plus.svg" />
            </div>
          </div>
          <div className="coco-fw-content_detail__block2">
            <div className="coco-fwc-detail_block2__textarea">
              COCO SHOP là hệ thống mỹ phẩm chính hãng và uy tín có quy mô lớn
              số 1 Việt Nam,đa dạng các loại mỹ phẩm đến từ các hãng nổi tiếng
              trên toàn thế giới,,,Đến với COCOSHOP các bạn có quyền được yên
              tâm khi mua sắm cũng như được đáp ứng mọi nhu cầu về làm đẹp. Với
              phương châm luôn nỗ lực vì khách hàng thân yêu, COCOSHOP không
              ngừng cố gắng để xứng đáng là địa điểm mua săm tin cậy trong lòng
              các bạn trẻ
            </div>
            <div className="coco-fwc-detail_block2__image">
              <img src="./Images/Image 14.png" />
            </div>
          </div>
          <div className="coco-fw-content_detail__block3">
            <div className="coco-fwc-detail_block3__item1">
              <div className="coco-fwcd-block3_item1__title">HỖ TRỢ KHÁCH HÀNG</div>
              <div className="coco-fwcd-block3_item1__subtitle">
                <span>Hướng dẫn mua hàng...</span>
                <span>Giải đáp thắc mắc</span>
                <span>Chính sách đổi trả</span>
              </div>
            </div>
            <div className="coco-fwc-detail_block3__item2">
              <div className="coco-fwcd-block3_item2__title">LIÊN HỆ VỚI CHÚNG TÔI</div>
              <div className="coco-fwcd-block3_item2__subtitle">
                <div>
                  <img src="./Images/ic-phone.svg" />
                  <span>Điện thoại: +84-988888290</span>
                </div>
                <div>
                  <img src="./Images/ic-mail.svg" />
                  <span>Email: cskh@cocoshop.vn</span>
                </div>
                <div>
                  <img src="./Images/ic-global.svg" />
                  <span>Website: http://cocoshop.vn</span>
                </div>
              </div>
            </div>
            <div className="coco-fwc-detail_block3__item3">
              <div className="coco-fwcd-block3_item3__title">TẢI ỨNG DỤNG COCO SHOP</div>
              <div className="coco-fwcd-block3_item3__content">
                <img src="./Images/ic-qrcode.png" />
                <div className="coco-fwcd-block3-item3_content__span">
                  <div>
                    <img src="./Images/ic-appstore.svg" />
                    <span> App Store</span>
                  </div>
                  <div>
                    <img src="./Images/ic-googleplay.svg" />
                    <span> Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="coco-footer-wrap-content_detail__copyright">
          <span>
            © Bản quyền thuộc về Coco Shop - Chuỗi cửa hàng mỹ phẩm chính hãng
            làm đẹp.
          </span>
        </div>
      </div>
    </WrapFooter>
  );
};

export default Footer;
