import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import logoText from '../../assets/logo-text.png';

const NavBarWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 64px;
  background-color: #fff;
  padding: 0px 25px;
  box-shadow: 0 2px 8px #f0f1f2;
  text-align: left;

  span {
    position: relative;
    top: 2px;
    font-weight: 700;
    color: #ggg;
  }

  a {
    color: #000;

    .logoName {
      font-size: 1.1rem;
    }
  }

  .logoTextImg {
    width: 80px;
    margin-left: auto;
  }
`;

const Icon = styled.div`
  position: relative;
  top: 4px;
  display: inline-block;
  width: 50px;
  height: 50px;
  font-size: 0px;
  vertical-align: middle;
  overflow: hidden;
  margin-right: 8px;

  img {
    width: 45px;
    height: 45px;
  }
`;

function NavBar() {
  return (
    <NavBarWrap>
      <Link to="/">
        <Icon>
          <img src={logo} alt="logo of SYSUCC" />
        </Icon>
        <span className="logoName">Data Science Lab</span>
      </Link>

      <img className="logoTextImg" src={logoText} alt="logo text of SYSUCC" />
    </NavBarWrap>
  );
}

export default NavBar;
