import styled from 'styled-components';
import { baseTheme } from '../../../../styles/variables';

const StyledRegisterForm = styled.div`
  .form {
    display: flex;
    flex-direction: column;

    margin: 40px auto 20px auto;
    max-width: 480px;

    @media screen and ${baseTheme.media.desktop} and (max-height: 719px) {
      margin-top: 10px;
    }

    @media screen and ${baseTheme.media.desktop} and (min-height: 720px) {
      margin-top: 20px;
    }

    @media screen and ${baseTheme.media.desktop} and (min-height: 800px) {
      margin-top: 30px;
    }

    @media screen and ${baseTheme.media.desktop} and (min-height: 960px) {
      margin-top: 40px;
    }
  }

  .field {
    height: 50px;
    width: 100%;
    font-size: 18px;
    padding: 10px 20px 10px 22px;
    border: none;
    background-color: ${baseTheme.colors.white};
    outline: none;

    @media screen and ${baseTheme.media.desktop} and (max-height: 719px) {
      padding: 3px 10px 3px 12px;
      height: 40px;
      font-size: 16px;
    }

    @media screen and ${baseTheme.media.desktop} and (min-height: 720px) {
      padding: 5px 10px 5px 12px;
      height: 46px;
      font-size: 18px;
    }

    @media screen and ${baseTheme.media.desktop} and (min-height: 960px) {
      height: 50px;
      padding: 10px 20px 10px 22px;
    }
  }

  .field::placeholder {
    color: ${baseTheme.colors.grey};
    font-size: 18px;
    font-family: 'Circe', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    width: 100%;
  }

  .text {
    text-align: end;
  }

  .progress {
    background-color: #e5f1ef;
    width: 100%;
    height: 4px;
    margin-top: -15px;
  }

  .buttons-area {
    margin: auto;
    margin-top: 20px;
  }

  .link_item {
    margin-top: 20px;
  }
`;

export default StyledRegisterForm;
