import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Inter", "Roboto", sans-serif;
  }

  html,
  body,
  #root,
  .app {
    height: 100%;
  }

  input {
    outline: none;
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  button,
  input[type="submit"],
  input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  ul {
    list-style-type: none;
  }

  em {
    font-style: normal;
  }
`}
    `;
