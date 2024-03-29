import styled from 'styled-components';

const FormWrap = styled.section`
  width: 100%;
  padding: 0px 0px 20px 0px;
  margin-top: -15px;

  .chocieContainer {
    line-height: 2;
    .label {
      padding-right: 20px;
      font-size: 1rem;
    }

    .secLabel {
      font-size: 0.9rem;
    }

    .label.topLabel {
      display: block;
    }

    .label.secLabel {
      padding-left: 40px;
    }
  }

  .resultSection {
    display: flex;
    justify-content: center;

    .toolTipText {
      text-align: center;
    }

    .ant-btn-primary {
      width: 200px;
      margin-top: 20px;
      border-color: rgb(62, 122, 64);
      background-color: rgb(62, 122, 64);

      &[disabled] {
        border-color: #d9d9d9;
        background-color: #f5f5f5;
      }
    }
  }

  .toolTipText {
    cursor: help;

    &.center {
      text-align: center;
    }

    &.left {
      text-align: left;
    }

    span {
      padding-right: 4px;
    }
  }

  .cardContent {
    font-size: 1.5rem;
    color: rgb(62, 122, 64);
    font-weight: bold;

    &.center {
      text-align: center;
    }
  }

  #dataLabResetBtn {
    color: rgb(62, 122, 64);
    border-color: rgb(62, 122, 64);
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;

export default FormWrap;
