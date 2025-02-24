import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layouts from "../layouts/layout"
/**
 * Importing styled components
 */
import { createGlobalStyle } from 'styled-components'
export default function App({ Component, pageProps }: AppProps) {

  /**
 * Global styles for the web client 
 */
  const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
   font-size: 30px !important;
}

::-webkit-scrollbar {
  width: 3px !important;
  height: 2px;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`
  return (
    <>
      <GlobalStyle />
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  )
}
