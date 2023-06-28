import {createGlobalStyle} from "styled-components";
import {vars} from "./vars";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :before {
      box-sizing: border-box;
    }

    :after {
      box-sizing: border-box;
    }
  }

  body {
		font-size: ${vars.$fontsizeRegular};
    font-family: 'Montserrat', sans-serif;
		color: #FFFFFF;
  }

  a, a:visited {
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
		cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  ul li {
    list-style: none;
  }
`