import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';


export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1200;
  .content {
    position:relative;
    padding: 20px;
    height: 603px;
    width: 540px;
    border-radius: 20px;
    background-color: ${baseTheme.colors.white};

  .closeBtn{
    height: 16px;
    width: 16px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 8px;
    right: 8px;
    margin-top:20px;
    margin-right:20px;
    cursor:pointer;
  }  
  .title{
    font:${baseTheme.fonts.titleFont}
    color:${baseTheme.colors.black}
    font-style: rnormal;
    font-weight: 400;
    font-size: 30px;
    margin-top:20px;
    margin-bottom:42px;
    line-height: 1.5;
    text-align:center;
  }
  
`;

