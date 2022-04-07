import styled from "styled-components";
import { baseTheme } from "../../styles/variables";
import img from '../../images/MainBg/Rectangle-tablet.jpg';
import img2 from '../../images/MainBg/Rectangle-desktop.jpg';

export const MainBgImage=styled.div`
background-color:rgba(255, 255, 255, 0.4);
height: 100vh; 
display: flex;
justify-content: space-between;
align-items: center;
@media screen and ${baseTheme.media.tablet} {
    background-image:url(${img});
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  };
  @media screen and ${baseTheme.media.desktop} {
    background-image: url(${img2});
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;

     .wrapper-right{
    height: 100vh;
    min-width: 480px;
    border-right: 3px solid #e7e5f2;
    box-shadow: 1px 0 0 0 rgba(255, 255, 255, 0.8),-1px 0px
    rgba(0, 0, 0, 0.05);
  }
  }
  
`