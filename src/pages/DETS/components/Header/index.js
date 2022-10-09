import React from 'react';
import styled from 'styled-components';

import flowImg from '../../../../assets/flow.png';

const HeaderWrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 360px;
  text-align: center;
  background: linear-gradient(70deg, rgb(146, 198, 58, 0.4), rgb(62, 122, 64));
  padding: 40px 0px 20px 0px;
  margin-bottom: 40px;
  color: #eee;

  h1 {
    color: #eee;
  }

  img {
    height: 300px;
    position: absolute;
    bottom: 24px;
    right: 0px;
    opacity: 0.04;
  }
`;

function Header() {
  return (
    <HeaderWrap>
      <img src={flowImg} alt="" />
      <h1>Delayed Treatment Effect Scoring(DTES) System</h1>
      <div>
        A calculation tool for predicting delayed treatment effects of immune
        checkpoint inhibitors (ICIs)
      </div>
    </HeaderWrap>
  );
}

export default Header;
