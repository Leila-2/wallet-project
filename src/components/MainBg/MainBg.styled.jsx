import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';
import img from '../../images/MainBg/Rectangle-tablet.jpg';
import img2 from '../../images/MainBg/Rectangle-desktop.jpg';

export const MainBgImage = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  height: 100vh;
  display: flex;
  


  @media screen and ${baseTheme.media.tabletMin} {
    background-image: url(${img});
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: flex-start;
    .wrapper-right {
      padding: 40px 35px 47px 35px;
    }
    
    }
  }
  @media screen and ${baseTheme.media.desktop} {
    background-image: url(${img2});
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;

    .wrapper-right {
      padding: 40px 19px 40px 19px;
      height: 100vh;
      min-width: 480px;
      border-right: 3px solid #e7e5f2;
      box-shadow: 1px 0 0 0 rgba(255, 255, 255, 0.8),
        -1px 0px rgba(0, 0, 0, 0.05);
    }
.wrapper-left {
      padding: 40px 16px 47px 69px;
      display:flex;
    }

  }

  @media screen and ${baseTheme.media.mobileMax} {
    align-items: flex-start;
    .wrapper-right {
      padding: 15px 20px 0 20px;
    }
  }
`;
