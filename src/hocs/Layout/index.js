import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import "./style.scss";

const Layout = ({ ...props }) => {
  let location = useLocation();
  let checkPath = location.pathname === "/" ? "coco-active-dropdown" : "";
  let [chatbox, setChatbox] = useState(null);
  let [activeMenu, setActiveMenu] = useState(checkPath);
  let [overFlow, setOverFlow] = useState(null);
  const { children } = props;
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`coco-layout_wrap ${overFlow}`}>
      <div className="coco-layout-wrap-home_header">
        <Header />
        <Menu setOverFlow={setOverFlow} setActiveMenu={activeMenu} />
      </div>
      <div className={`coco-layout-wrap_content ${overFlow}`}>{children}</div>
      <Footer />
      {/* ScrollBox */}
      <div className={`coco-layout-wrap_scrollbox ${overFlow}`}>
        <div className="coco-layout-wrap-scrollbox_lstIconWrapper">
          <img src="./Images/ic-fb-color.svg" />
          <img src="./Images/ic-youtube-color.svg" />
          <img src="./Images/ic-insta-color.svg" />
          <img src="./Images/ic-social-color.svg" />
        </div>
        <div
          className="coco-layout-wrap-scrollbox_scrolltop"
          onClick={scrollTop}
        >
          <img src="./Images/ic-btn-to-top.svg" />
        </div>
      </div>
      {/* ChatBox */}
      <div
        className={`coco-layout-wrap-scrollbox_chatbox ${chatbox} ${overFlow}`}
      >
        <div>
          <span> Chat với chúng tôi</span>
          <img src="./Images/ic-arrowtop.svg" />
        </div>
        <img
          src="./Images/ic-close.svg"
          onClick={() => {
            setChatbox("hiddenChatBox");
          }}
        />
      </div>
    </div>
  );
};

export default Layout;
