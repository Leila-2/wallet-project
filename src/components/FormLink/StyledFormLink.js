import styled from "styled-components";
import { baseTheme } from "../../styles/variables";

const StyledFormLink = styled.div`
  width: 300px;
  height: 50px;

  background: ${baseTheme.colors.white};
  border: 1px solid ${baseTheme.colors.purple};
  box-sizing: border-box;
  border-radius: 20px;

  display: flex;
  align-items: center;

  font-family: ${baseTheme.fonts.mainFont};
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: ${baseTheme.colors.purple};

  .link {
    width: 100%;
  }

  @media screen and ${baseTheme.media.mobileMax} {
    width: 280px;
  }
`;

export default StyledFormLink;
