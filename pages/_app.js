import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

const GlobalStyles = createGlobalStyle`
  body {
    background-color:#eee;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
