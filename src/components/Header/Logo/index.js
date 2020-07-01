import React, { Component } from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';

const Logo = styled.div`
  a{
    display: inline-block;
    // margin-left:35px;
    
    img{
      width: 88px;
    }
  }
`;
class LogoCoco extends Component {
  render() {
    return (
      <Logo style={{ position: 'relative', zIndex: '99' }}>
        <Link to='/'>
          <img src='./Images/logo_cocoshop.png' alt=""/>
        </Link>
      </Logo>
    );
  }
}

export default LogoCoco;
