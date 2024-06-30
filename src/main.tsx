import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
font-size:62.5%
overflow-x: hidden;
}
body,
input,
button,
textarea,
select{
font-family: 'Space Mono, sans-serif;' 
}
*{
marging: 0;
padding: 0;
box-sizing: border-box;
}
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
