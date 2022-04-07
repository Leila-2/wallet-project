import styled from 'styled-components';
import { baseTheme } from '../../../../styles/variables';

const StyledRegisterForm = styled.div`
  .form {
    display: flex;
    flex-direction: column;

    margin: 40px auto 20px auto;
    max-width: 480px;
  }

  .field {
    height: 50px;
    width: 100%;
    font-size: 18px;
    padding: 10px 20px 10px 22px;
    border: none;
    background-color: ${baseTheme.colors.white};
    outline: none;
  }

  .field::placeholder {
    color: ${baseTheme.colors.grey};
    font-size: 18px;
    font-family: ${baseTheme.fonts.mainFont};
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
    margin-bottom: 16px;
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
