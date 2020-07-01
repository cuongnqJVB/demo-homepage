import React from "react";
import styled from "styled-components";
import "./style.scss";

const WrapFooter = styled.div`
  width: 100%;
  background: #000000;
`;

const Footer = () => {
  return (
    <WrapFooter className="footer__wrap">
      <div className="fw__content">
        <div className="fwcd__detail">
          <div className="fwcd__block1">
            <div className="fwcdb1__logo">
              <img src="" />
              <span>B E A U T Y & C O S M E T I C</span>
            </div>
            <div className="fwcdb1__image">
              <img src="./Images/bocongthuong_small.png" />
            </div>
            <div className="fwcdb1__icon">
              <img src="" />
              <img src="" />
              <img src="" />
              <img src="" />
            </div>
          </div>
          <div className="fwcd__block2">
            <div className="fwcdb2__intro">
              COCO SHOP là hệ thống mỹ phẩm chính hãng và uy tín có quy mô lớn
              số 1 Việt Nam,đa dạng các loại mỹ phẩm đến từ các hãng nổi tiếng
              trên toàn thế giới,,,Đến với COCOSHOP các bạn có quyền được yên
              tâm khi mua sắm cũng như được đáp ứng mọi nhu cầu về làm đẹp. Với
              phương châm luôn nỗ lực vì khách hàng thân yêu, COCOSHOP không
              ngừng cố gắng để xứng đáng là địa điểm mua săm tin cậy trong lòng
              các bạn trẻ
            </div>
            <div className="fwcdb2__image">
            <img src="./Images/Image 14.png" />
            </div>
          </div>
          <div className="fwcd__block3">
            <div className="fwcdb3__item1">
              <div className="item1__title">HỖ TRỢ KHÁCH HÀNG</div>
              <div className="item1__sub">
                <span>Hướng dẫn mua hàng...</span>
                <span>Giải đáp thắc mắc</span>
                <span>Chính sách đổi trả</span>
              </div>
            </div>
            <div className="fwcdb3__item2">
              <div className="item2__title">LIÊN HỆ VỚI CHÚNG TÔI</div>
              <div className="item2__sub">
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
            <div className="fwcdb3__item3">
              <div className="item3__title">TẢI ỨNG DỤNG COCO SHOP</div>
              <div className="item3__content">
                <img src="./Images/ic-qrcode.png" />
                <div className="item3c__span">
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
        <div className="fwcd__copyright">
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
