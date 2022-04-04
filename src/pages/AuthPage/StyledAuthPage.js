import styled from "styled-components";

const StyledAuthPage = styled.div`
  background: rgb(231, 234, 242);

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .authPage {
    display: flex;
  }
  .authPage-left-side {
    /* height: 100vh; */
    /* width: 48%; */

    /* background-size: auto auto; */
    /* background-repeat: no-repeat; */

    display: flex;
    justify-content: center;
    align-items: center;

    .image {
      /* position: relative; */
      /* padding: 150px 38px 150px 95px; */
    }

    .ellipse {
      position: absolute;
    }
  }

  .authPage-right-side {
    height: 100vh;
    min-width: 731px;
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
