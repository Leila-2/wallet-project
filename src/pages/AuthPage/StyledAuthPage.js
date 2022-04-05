import styled from "styled-components";
import { baseTheme } from "../../styles/variables";

const StyledAuthPage = styled.div`
  background: rgb(231, 234, 242);

  min-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .authPage {
    display: flex;
  }
  .authPage-left-side {
    background: rgb(231, 234, 242);
    min-width: 521px;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: left bottom;

    display: flex;
    justify-content: center;
    align-items: center;

    .image {
      width: 435px;
    }
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
    background-repeat: no-repeat;
    background-size: auto auto;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    min-width: 533px;
    background-color: white;
  }
`;

export default StyledAuthPage;
