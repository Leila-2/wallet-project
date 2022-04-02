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
  
a {
text-decoration: none;
}

body,
h1,
h2,
h3,
h4,
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
  cursor: pointer;
}
`;
