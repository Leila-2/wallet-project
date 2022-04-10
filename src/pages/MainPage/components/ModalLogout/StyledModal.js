import styled from 'styled-components';
import { baseTheme } from '../../../../styles/variables';

const StyledModal = styled.div`
  .ModalLogoutOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
  }
  .ModalLogoutModal {
    width: 400px;
    height: 400px;
    background: white;
    position: absolute;
  }
  .ModalLogoutQuestion {
    font-family: ${baseTheme.fonts.titleFont};
    color: ${baseTheme.colors.black};
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
    margin-top: 20px;
  }
  .ModalLogoutFlex {
    position: relative;
  }
  .ModalLogoutButtonYes {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%);
  }
  .ModalLogoutButtonCancel {
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translate(-50%);
  }
`;

export default StyledModal;
