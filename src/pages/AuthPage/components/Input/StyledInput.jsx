import styled from "styled-components";
import { baseTheme } from "../../../../styles/variables";

const StyledInput = styled.div`
  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 34px;
    padding-left: 14px;
    border-bottom: 1px solid ${baseTheme.colors.lightGray};

    @media screen and ${baseTheme.media.desktop} and (max-height: 719px) {
      margin-bottom: 10px;
    }

    @media screen and ${baseTheme.media.desktop} and (min-height: 720px) {
      margin-bottom: 16px;
    }

    @media screen and ${baseTheme.media.desktop} and (min-height: 800px) {
      margin-bottom: 26px;
    }

    @media screen and ${baseTheme.media.desktop} and (min-height: 960px) {
      margin-bottom: 34px;
    }
  }

  .container-field {
    position: relative;
  }

  .field-error {
    position: absolute;
    top: 28px;
    right: 0;
    color: ${baseTheme.colors.redTextColor};

    @media screen and ${baseTheme.media.tabletMin} {
      top: 14px;
    }

    @media screen and ${baseTheme.media.desktop} {
      top: 9px;
    }
  }
`;

export default StyledInput;
