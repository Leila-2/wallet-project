import styled from 'styled-components';
import { baseTheme } from "../../styles/variables";


export const StyledLoader = styled.div`   
    background-color: ${baseTheme.colors.white};
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999999999;

  .loader {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
  }

  .loader:after {
      content: " ";
      display: block;
      border-radius: 50%;
      width: 0;
      height: 0;
      margin: 8px;
      box-sizing: border-box;
      border: 32px solid ${baseTheme.colors.green};
      border-color: ${baseTheme.colors.green} transparent ${baseTheme.colors.green} transparent;
      animation: lds-hourglass 1.2s infinite;
  }

  @keyframes lds-hourglass {
      0% {
          transform: rotate(0);
          animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      50% {
          transform: rotate(900deg);
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      100% {
          transform: rotate(1800deg);
      }
  }

`;