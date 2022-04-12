import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';
import currencyMobileImage from './currency-mobile.svg';
import currencyMobileTablet from './currency-tablet.svg';
import currencyMobileDesktop from './currency-desktop.svg';

export const StyledCurrency = styled.div`
  .sidebar {
    margin-left: auto;
    margin-right: auto;
    min-width: auto;
    min-height: auto;
    overflow: auto;
    padding-top: 30px;
  }

  @media screen and ${baseTheme.media.desktop} {
    .sidebar {
      width: 378px;
    }
  }

  @media screen and ${baseTheme.media.tabletMax} and ${baseTheme.media
      .tabletMin} {
    .sidebar {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 20px;
    }
  }

  @media screen and ${baseTheme.media.mobileMax} {
    .sidebar {
      margin-left: auto;
      margin-right: auto;
      width: fit-content;
    }
  }

  .table_container {
    /* max-width: 348px;
    min-width: 280px; */
    max-height: 347px;
    border-radius: 30px;
    background: ${baseTheme.colors.purple};
    color: ${baseTheme.colors.white};

    @media screen and ${baseTheme.media.tabletMin} and ${baseTheme.media
        .tabletMax} {
      width: 336px;
      height: 182px;
    }
  }

  @media screen and ${baseTheme.media.desktop} {
    .table_container {
      height: 347px;
      width: 393px;
    }
  }

  @media screen and ${baseTheme.media.mobileMax} {
    .table {
      margin-left: auto;
      margin-right: auto;
      min-width: auto;
      min-height: auto;
      width: 280px;
      height: 174px;
      overflow: hidden;
    }
  }

  .head {
    background: #626cdc;
  }

  .header {
    font-family: ${baseTheme.fonts.mainFont};
    font-size: 18px;
    font-weight: 700;
    padding-top: 12px;
    padding-bottom: 12px;
    color: ${baseTheme.colors.white};
    border-bottom: 0px;
  }

  @media screen and ${baseTheme.media.tabletMin} {
    .header {
      padding-top: 17px;
      padding-bottom: 17px;
    }
  }

  .body {
    background-size: contain;
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
      margintop: 30px;
      height: 130px;
      background-image: url(${currencyMobileDesktop});
    }
  }

  .name {
    font-family: Montserrat, san-serif;
    font-size: 16px;
    font-weight: 400;
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${baseTheme.colors.white};
    border-bottom: 0px;
  }

  .item {
    font-family: Montserrat, san-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${baseTheme.colors.white};
    border-bottom: 0px;
  }
`;
