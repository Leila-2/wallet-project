import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';
import currencyMobileImage from './currency-mobile.svg';
import currencyMobileTablet from './currency-tablet.svg';
import currencyMobileDesktop from './currency-desktop.svg';

export const StyledCurrency = styled.div`
  .spinner-container{
      display: flex;
      justify-content: center;
  }

  .table_container {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    min-width: 280px;
    border-radius: 30px;
    background: ${baseTheme.colors.purple};
    color: ${baseTheme.colors.white};
    overflow: hidden;
}

  @media screen and ${baseTheme.media.tabletMin} and ${baseTheme.media
    .tabletMax} {
    .table_container {
      margin-bottom: 20px;
      width: 336px;
      overflow: hidden;
    }
  }

  @media screen and ${baseTheme.media.desktop} {
    .table_container {
      margin: 0;
      width: 395px;
      height: 347px;
      overflow: hidden;
    }
  }

  @media screen and ${baseTheme.media.mobileMax} {
    .table {
      margin-left: auto;
      margin-right: auto;
      min-width: 280px;
      min-height: auto;
      width: 100%;
      height: 174px;
      overflow: hidden;
    }
  }

  .head {
    background: #626cdc;
  }

  .header {
    min-width: 73px;
    font-family: ${baseTheme.fonts.mainFont};
    font-size: 18px;
    font-weight: 700;
    padding-top: 12px;
    padding-bottom: 12px;
    color: ${baseTheme.colors.white};
    border-bottom: 0px;
  }

  @media screen and ${baseTheme.media.mobileMax} {
    .header{
      padding-right: 5px;
      padding-left: 5px;
    }
  }

  @media screen and ${baseTheme.media.tabletMin} and ${baseTheme.media
    .tabletMax} {
    .header{
      padding-right: 10px;
      padding-left: 10px;
    }
  }
  
  @media screen and ${baseTheme.media.tabletMin} and ${baseTheme.media
    .tabletMax} {
    .header {
      min-width: 112px;
    }
  }

  @media screen and ${baseTheme.media.desktop} {
    .header {
      width: 132px;
      padding-top: 17px;
      padding-bottom: 17px;
    }
  }

  .body {
    background-size: cover;
    background-position: bottom;
  }

  @media screen and ${baseTheme.media.mobileMax} {
    .body {
      background-image: url(${currencyMobileImage});
      background-repeat: no-repeat;
    }
  }

  @media screen and ${baseTheme.media.tabletMin} and ${baseTheme.media
      .tabletMax} {
    .body {
      background-image: url(${currencyMobileTablet});
      background-repeat: no-repeat;
    }
  }

  .background {
    display: none;
  }

  @media screen and ${baseTheme.media.desktop} {
    .background {
      display: block;
      margin-top: 30px;
      height: 130px;
      background-image: url(${currencyMobileDesktop});
      background-repeat: no-repeat;
    }
  }

  .name {
    font-family: Montserrat, san-serif;
    font-size: 16px;
    font-weight: 400;
    padding-top: 6px;
    padding-bottom: 6px;
    color: ${baseTheme.colors.white};
    border-bottom: 0px;
  }

  .item {
    font-family: Montserrat, san-serif;
    font-size: 16px;
    font-weight: 400;
    padding-top: 6px;
    padding-bottom: 6px;
    color: ${baseTheme.colors.white};
    border-bottom: 0px;
  }
`;
