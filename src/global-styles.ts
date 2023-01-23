import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: var(100vh);
    background-color: ${(props) => props.theme.dark};
}
`;

export const theme = {
  light: "rgba(255,255,255,0.7)",
  dark: "rgba(0,0,0,0.7)",
};
