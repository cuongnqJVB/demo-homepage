import React, { useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import "./style.scss";

const Layout = ({ ...props }) => {
  const [chatbox, setChatbox] = useState(null);
  const { children } = props;
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="Layout_wrap">
      <div className="lw_header_wrap">
        <Header />
        <Menu />
      </div>
      <div className="layout_content">{children}</div>
      <Footer />
      {/* ScrollBox */}
      <div className="lw_scrollBox">
        <div className="lwsb__lstIconWrapper">
          <img src="./Images/ic-fb-color.svg" />
          <img src="./Images/ic-youtube-color.svg" />
          <img src="./Images/ic-insta-color.svg" />
          <img src="./Images/ic-social-color.svg" />
        </div>
        <div className="lwsb__btnScroll" onClick={scrollTop}>
          <img src="./Images/ic-arrowback.svg" />
        </div>
      </div>
      {/* ChatBox */}
      <div className={`lw__chatboxWrapper ${chatbox}`}>
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
