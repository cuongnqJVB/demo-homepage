import React, { useState } from "react";
import styled from "styled-components";
import LogoCoco from "./Logo";
import SearchBox from "../Search";
import Account from "./Account";
import Cart from "./Cart";
import HeaderTop from "./header-top";
import HeaderCenter from "./header-center";
import HeaderBottom from "./header-bottom";
import "../../sass/global/components/_component.header.scss";

const WrapHeader = styled.div`
  width: 100%;
  background: #f3f3f3;
`;

const Header = () => {
    let [overFlow, setOverFlow] = useState(null);
    let [activeMenu, setActiveMenu] = useState(null);

    return (
        <div className="coco-layout-wrap-main-dad_header">
            <HeaderTop />
            <HeaderCenter />
            <HeaderBottom setOverFlow={setOverFlow} setActiveMenu={activeMenu} />
        </div>
    );
};

export default Header;
