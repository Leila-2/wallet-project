import styled from "styled-components";
import { baseTheme } from "../../styles/variables";

const StyledFormButton = styled.button`
  width: 300px;
  height: 50px;
  background: ${baseTheme.colors.green};
  border-radius: 20px;
  font-family: ${baseTheme.fonts.mainFont};
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${baseTheme.colors.white};
  @media screen and ${baseTheme.media.mobileMax} {
    width: 280px;
  }
`;

export default StyledFormButton;
