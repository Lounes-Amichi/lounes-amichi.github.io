import { createGlobalStyle } from "styled-components";

const title = props => props.theme.fonts.title;
const body = props => props.theme.fonts.body;
const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: ${body};
    font-weight: 400;
    background-color: ${props => props.theme.colors.background};
}

h1, h2, h3, h4, h5 {
    font-family: ${title};
    font-weight: 700;
    color: ${props => props.theme.colors.text};
}

html {font-size: 100%;} /* 16px */

h1 {font-size: 4.210rem; /* 67.36px */}

h2 {font-size: 3.158rem; /* 50.56px */}

h3 {font-size: 2.369rem; /* 37.92px */}

h4 {font-size: 1.777rem; /* 28.48px */}

h5 {font-size: 1.333rem; /* 21.28px */}

small {font-size: 0.750rem; /* 12px */}

html {
    scroll-behavior: smooth;
}

a {
    text-decoration: none;
    cursor: pointer;
}

p,
a,
li {
    font-family: 'Noto Sans';
    color: ${props => props.theme.colors.text};
    margin: 0px;
}

`;

export default GlobalStyles;