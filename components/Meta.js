import { Fragment } from 'react'
import Head from 'next/head'

export default () => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Dominik Madarász</title>
      <meta name="application-name" content="Dominik Madarász" />
      <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png">
      <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png">
      <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png">
      <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png">
      <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png">
      <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png">
      <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png">
      <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png">
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png">
      <link rel="icon" type="image/png" sizes="192x192"  href="/static/android-icon-192x192.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png">
      <link rel="manifest" href="/static/manifest.json">
      <meta name="msapplication-TileColor" content="#000000">
      <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png">
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
