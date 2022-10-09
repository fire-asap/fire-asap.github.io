import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  text-align: center;
  // background-color: rgba(0, 0, 0, 0.1);
  padding: 10px 0px 20px 0px;
  margin-bottom: 40px;
`;

function Header() {
  return (
    <HeaderWrap>
      <h1>Delayed Treatment Effect Scoring(DTES) System</h1>
      <div>
        Voluptate laborum magna Lorem amet fugiat proident minim labore
        exercitation veniam mollit consequat minim.
      </div>
    </HeaderWrap>
  );
}

export default Header;
