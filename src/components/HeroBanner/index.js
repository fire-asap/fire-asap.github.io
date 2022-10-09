import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import logoText from '../../assets/logo-text.png';

const HeroBannerWrap = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 64px;
  background-color: #fff;
  padding: 0px 25px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px #f0f1f2;
  text-align: left;

  span {
    font-weight: 700;
  }

  .logoName {
    font-size: 1.1rem;
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

function HeroBanner() {
  return (
    <HeroBannerWrap>
      <Icon>
        <img src={logo} alt="logo of SYSUCC" />
      </Icon>
      <span className="logoName">Data Science Lab</span>
      <img className="logoTextImg" src={logoText} alt="logo text of SYSUCC" />
    </HeroBannerWrap>
  );
}

export default HeroBanner;
