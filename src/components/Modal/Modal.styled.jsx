import styled from "styled-components";
import { baseTheme } from "../../styles/variables";

export const ModalWrapper=styled.div`
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
     .content {
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
    padding:20px;
    height:500px;
    width:500px;
    border-radius:10px;
    background-color:white;
    
  }
`