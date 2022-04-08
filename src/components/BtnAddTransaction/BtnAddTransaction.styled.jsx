import styled from "styled-components";
import { baseTheme } from "../../styles/variables";

export const ButtonAdd=styled.button`
width:44px;
height:44px;
background-color: ${baseTheme.colors.green};
position:fixed;
border-radius:50%;
cursor: pointer;
right: 40px;
bottom: 40px;
display: inline-flex;
align-items: center;
justify-content: center;
`