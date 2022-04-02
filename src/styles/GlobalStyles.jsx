import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *,
*::before,
*::after {
  box-sizing: border-box;
} 
ul {
  padding: 0;
  list-style: none;
  margin: 0;
}
body {
  min-height: 100vh;
 font-family: 'Rubik';
  font-weight:400;
  
}
body,
h1,
p,
li {
  margin: 0;
}
img {
  max-width: 100%;
  display: block;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}
`;
