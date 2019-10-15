import { Fragment } from 'react'
import Head from 'next/head'

export default () => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Dominik Madarász</title>
      <meta name="application-name" content="Dominik Madarász" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="msapplication-TileImage"
        content="/static/mstile-144x144.png"
      />
      <meta name="theme-color" content="#000000" />
    </Head>
    <style jsx global>{`
      /*
        CSS Reset via github/wulkano/eightpoint modified for this usecase
      */
      html,
      body,
      div,
      span,
      object,
      iframe,
      p,
      blockquote,
      pre,
      a,
      abbr,
      address,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strong,
      sub,
      sup,
      var,
      b,
      i,
      dl,
      dt,
      dd,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      header,
      footer,
      section,
      article,
      nav,
      canvas,
      aside,
      figcaption,
      figure,
      hgroup,
      menuitem,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
      }
      html {
        box-sizing: border-box;
        font-size: 62.5%;
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Oxygen-Sans, 'Fira Sans', 'Droid Sans', Ubuntu, Cantarell,
          'Helvetica Neue', sans-serif;
        font-size: 16px;
        font-size: 1.6rem;
        line-height: 1.5em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      a {
        text-decoration: none;
      }
      :focus {
        outline: 0;
      }
      pre,
      code,
      kbd,
      samp,
      tt {
        font-family: Menlo, 'Courier New', Courier, monospace;
        font-size: 1em;
      }
      /*
        Custom Styles
        ---
      */
      body {
        background: black;
        color: white;
        font-size: 1.4rem;
      }
      a {
        color: #50e3c2;
        cursor: pointer;
        transition: color 0.2s ease;
      }
      a:hover {
        color: #3afacf;
      }
      a.dark {
        color: #999999;
        text-decoration: underline;
      }
      a.dark:hover {
        color: #666666;
      }
      ::selection {
        background-color: #f81ce5;
        color: #fff;
      }
      ::-moz-selection {
        /* Code for Firefox */
        background: #f81ce5;
        color: #fff;
      }
      /* Paragraphs */
      p {
        margin-bottom: 16px;
        font-size: 1.2rem;
      }
      /* nprogress */
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        position: fixed;
        z-index: 2000;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: white;
      }
      /* Helper Classes */
      .text-uppercase {
        text-transform: uppercase;
      }
      /* Helps maintain consistent width */
      .container {
        width: 900px;
        max-width: 100%;
        margin: 0 auto;
      }
      @media (max-width: 900px) {
        .container {
          padding: 0 40px;
        }
      }
    `}</style>
  </Fragment>
)
