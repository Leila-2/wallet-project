import styled from "styled-components";
import { baseTheme } from "../../../../styles/variables";

const StyledHeader = styled.div`
  .Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    @media ${baseTheme.media.tablet} {
      height: 80px;
    }
  }
  .FlexGroops {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Logo {
    width: 30px;
    height: 30px;
    margin-right: 15.56px;
    @media ${baseTheme.media.tablet} {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }
  }
  .Title {
    font-family: ${baseTheme.fonts.titleFont};
    font-size: 21.6px;
    line-height: 1.5;
    font-weight: 700;
    color: ${baseTheme.colors.black};
    @media ${baseTheme.media.tablet} {
      font-size: 30px;
    }
  }
  .Avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: green;
  }
  .HeaderButton {
    background: ${baseTheme.colors.white};
    color: ${baseTheme.colors.grey};
    font-family: ${baseTheme.fonts.mainFont};
    height: 24px;
  }
  .FontButton {
    font-size: 18px;
    line-height: 1.5;
  }
  .Name {
    text-align: end;
    width: 80px;
  }
  .Exit {
    width: 51px;
    margin-left: 8px;
  }
  .ExitIcon {
    height: 18px;
    @media ${baseTheme.media.mobileMax} {
      margin-left: 8px;
    }
  }
  .Slash {
    margin: 0 12px;
  }
  .Hidden {
    @media ${baseTheme.media.mobileMax} {
      display: none;
    }
  }
`;
export default StyledHeader;
