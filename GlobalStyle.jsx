/**
 * @copyright Copyright © 2018-2019 Corretto, Inc. All rights reserved.
 */

import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

import spoqa from './themes/font/SpoqaHanSansNeo.ttf';

const Component = createGlobalStyle`
  ${normalize()};

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url(${spoqa}) format('truetype');
    font-display: fallback;
  }


  * {
    font-display: fallback;
    box-sizing: border-box;
  }

  html {
    line-height: 1;
  }

  #__next, body {
    position: relative;
    z-index: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  li, ul, ol, dl {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  div, header, aside, section, article, main, footer {

  }

  @page {
    size: A4;
    margin: 0;
  }
  @media print {
    html, body {
      width: 210mm;
      height: 297mm;
    }
  }

  body {
    font-family: 'Noto Sans KR';
    font-family: 'Roboto';
    /* font-family: 'Spoqa han sans Neo'; */
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; */
    /* font-family: 'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace; */
    font-size: 14px;
    /* src: local('Roboto'),url('https://fonts.googleapis.com/css2?family=Roboto&display=swap') format('woff2'); */
    /* -webkit-font-smoothing: antialiased; */
    /* -moz-osx-font-smoothing: grayscale; */
  }

  [data-rsbs-overlay] {
    max-width: 480px !important;
    margin: 0 auto !important;
  }
 `;

export default Component;
