import styled from "styled-components";
import { baseTheme } from "./variables";

export const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
  @media screen and ${baseTheme.media.tablet} {
    max-width: 768px;
  }
  @media screen and ${baseTheme.media.desktop} {
    max-width: 1200px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
