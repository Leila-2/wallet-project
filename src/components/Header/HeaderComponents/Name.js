import React from "react";
import styled from "styled-components";
import { baseTheme } from "../../../styles/variables";

const StyledName = styled.button`
background: ${baseTheme.colors.white};
    color: ${baseTheme.colors.grey};
    font-family: ${baseTheme.fonts.mainFont};
`;

const handler = () => {
  console.log("click name")
}


export default function Name({ children }) {
  return <StyledName onClick={handler}>{children}</StyledName>;
}