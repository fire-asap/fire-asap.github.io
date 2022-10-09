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
  // background: linear-gradient(70deg, #ccc, #ddd);
  padding: 40px 0px 20px 0px;
  margin-bottom: 40px;

  img {
    height: 300px;
    position: absolute;
    top: 0;
    right: 100px;
    opacity: 0.04;
  }
`;

function Header() {
  return (
    <HeaderWrap>
      <img src={flowImg} alt="" />
      <h1>Delayed Treatment Effect Scoring(DTES) System</h1>
      <div>
        Voluptate laborum magna Lorem amet fugiat proident minim labore
        exercitation veniam mollit consequat minim.
      </div>
    </HeaderWrap>
  );
}

export default Header;
