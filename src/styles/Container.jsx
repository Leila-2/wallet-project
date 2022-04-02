import styled from "styled-components";
import { baseTheme } from "./variables";

export const Container = styled.div`
margin: auto;
width: 100%;
text-align: center;
padding - left: 20px;
padding - right: 20px;
@media ${baseTheme.media.tablet}{
    padding: 0 40px;
}
@media ${baseTheme.media.desctop}{
    padding: 0 80px;
}
`;
