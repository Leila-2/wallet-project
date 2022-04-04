import React from "react";
import styled from "styled-components";
import { baseTheme } from "../../../styles/variables";

const StyledExit = styled.button`
background: ${baseTheme.colors.white};
    @media ${baseTheme.media.mobileMax} {
      margin-left: 8px;
    };
    color: ${baseTheme.colors.grey};
    font-family: ${baseTheme.fonts.mainFont};
`;

const handler = () => {
  console.log("click exit")
}

export default function Exit({ children }) {
  return <StyledExit onClick={handler}>{children}</StyledExit>;
}
