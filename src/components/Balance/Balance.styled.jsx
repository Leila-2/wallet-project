import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';

export const StyledBalance = styled.div`
  border-radius: 30px;
  background: ${baseTheme.colors.white};
  height: 80px;
  position: relative;

  span {
    position: absolute;
    top: 8px;
    left: 40px;
    font-family: ${baseTheme.fonts.mainFont};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.3;

    color: ${baseTheme.colors.lightGray2};
  }

  p {
    font-family: ${baseTheme.fonts.titleFont};
    font-weight: 400;
    font-size: 30px;
    line-height: 1.5;
    padding-top: 30px;
    padding-left: 40px;

    color: ${baseTheme.colors.black};
  }
  @media screen and ${baseTheme.media.desktop} {
    width: 395px;
    margin-bottom: 32px;
  }
  @media screen and ${baseTheme.media.tabletMin} and ${baseTheme.media
      .tabletMax} {
    width: 336px;
    margin-bottom: 20px;
  }

  @media screen and ${baseTheme.media.mobileMax} {
    width: 280px;
  }
`;
