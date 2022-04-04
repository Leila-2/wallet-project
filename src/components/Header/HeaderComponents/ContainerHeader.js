import React from "react";
import styled from "styled-components";
import { baseTheme } from "../../../styles/variables";

const StyledContainerHeader = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "space-between"};
  padding: 15px 20px;

  @media ${baseTheme.media.tablet} {
    padding: 20px 32px;
  }
  @media ${baseTheme.media.desktop} {
    padding: 20px 16px;
  } ;
`;

export default function ContainerHeader({ children }) {
  return (
    <>
      <StyledContainerHeader>{children}</StyledContainerHeader>
    </>
  );
}
