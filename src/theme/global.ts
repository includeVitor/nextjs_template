import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    @import url('/fonts/Rubik-Light.ttf');
    @import url('/fonts/Rubik-Medium.ttf');
    @import url('/fonts/Rubik-Regular.ttf');

    html,
    body{
        padding: 0;
        margin: 0;
        text-rendering: optimizeLegibility;
        -webkit-font-ssmoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: Rubik, sans-serif;
        /* line-height: 1.6;
        font-size: 18px; */
    }

    * {
        box-sizing: border-box;
    }

    a {
        color: #0070f3;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    /**
    * Chrome has a bug with transitions on load since 2012!
    *
    * To prevent a "pop" of content, you have to disable all transitions until
    * the page is done loading.
    *
    * https://lab.laukstein.com/bug/input
    * https://twitter.com/timer150/status/1345217126680899584
    */
    body.loading * {
        transition: none !important;
    }

`

export default GlobalStyles
