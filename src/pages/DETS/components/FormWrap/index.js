import styled from 'styled-components';

const FormWrap = styled.section`
  width: 100%;
  // background-color: rgba(0, 0, 0, 0.05);
  padding: 10px 0px 20px 0px;

  .label {
    padding-right: 20px;
  }

  .resultSection {
    display: flex;
    justify-content: center;
  }

  .toolTipText {
    cursor: help;

    &.center {
      text-align: center;
    }

    &.left {
      text-align: left;
    }
  }

  .cardContent {
    font-size: 1.5rem;
    // color: rgb(219, 117, 53);
    color: rgb(62, 122, 64);
    font-weight: bold;

    &.center {
      text-align: center;
    }

    &.left {
      text-align: left;
    }
  }
`;

export default FormWrap;