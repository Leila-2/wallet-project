import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';

const StyledAuthPage = styled.div`
  background: rgb(231, 234, 242);

  min-width: 100%;
  height: 100vh;

  @media screen and ${baseTheme.media.mobileMax} {
    background: none;
  }

  .authPage {
    display: flex;
  }
  .authPage-left-side {
    background: rgb(231, 234, 242);
    min-width: 521px;
    height: 720px;
    background-repeat: no-repeat;
    background-position: left bottom;

    display: flex;
    justify-content: center;
    align-items: center;

    .authPage-title {
      margin-top: 28px;

      font-family: ${baseTheme.fonts.titleFont};
      font-size: 30px;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      color: ${baseTheme.colors.black};
    }
  }

  .authPage-right-side {
    min-width: 731px;
    height: 100vh;
    height: 720px;
    background-repeat: no-repeat;
    background-size: auto auto;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    @media screen and ${baseTheme.media.tabletMax} {
      padding-bottom: 48px;
    }
  }

  /* tablet */

  .authPage-tablet {
    width: 100%;
    background-repeat: no-repeat;
    background-position: left bottom;

    .authPage-tablet-pink-background {
      background-repeat: no-repeat;
      background-position: right top;
    }
    .authPage-tablet-title-area {
      padding-top: 60px;
      padding-bottom: 50px;

      display: flex;
      justify-content: center;
      align-items: center;

      .authPage-tablet-image {
        width: 260px;
      }
      .authPage-tablet-title {
        margin-left: 40px;

        font-family: ${baseTheme.fonts.titleFont};
        font-size: 30px;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        color: ${baseTheme.colors.black};
      }
    }
  }

  /* mobile */

  .authPage-mobile {
    min-width: 320px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledAuthPage;
