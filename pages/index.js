import Head from "next/head";
import Script from "next/script";

import Layout from "../components/Layout.js";
import Footer from "../components/Footer.js";
import Projects from "../components/Projects.js";
import MediaLinks from "../components/MediaLink.js";
import Technologies from "../components/Technologies.js";

const Index = () => (
  <Layout>
    <Head>
      <title>Dominik Madarász</title>
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@DMadarasz" />
      <meta property="og:title" content="Dominik Madarász" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ZaKlaus" />
      <meta property="og:url" content="https://madaraszd.net" />
      <meta
        property="description"
        content="Back-end, Front-end, full-stack software engineer."
      />
      <meta
        property="og:description"
        content="Back-end, Front-end, full-stack software engineer."
      />
      <meta property="og:image" content="https://madaraszd.net/logo.png" />

      <link
        type="application/json+oembed"
        href="https://madaraszd.net/oembed.json"
      />
    </Head>

    <Script
      src="https://kit.fontawesome.com/6b6c57fb81.js"
      crossOrigin="anonymous"
      samesite="strict"
    ></Script>

    <div id="main">
      <div id="top">
        <div id="logo">
          <h3>Welcome, I am</h3>
          <svg width="290" height="142" viewBox="0 0 122 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H122V60H0V0Z" fill="black"/>
            <rect x="8" y="8" width="44" height="44" fill="black" stroke="black" strokeWidth="6"/>
            <path d="M66.46 22.53C66.46 23.8367 66.1633 24.7433 65.57 25.25C64.9833 25.75 64.2667 26 63.42 26H61.93V19.13H63.31C64.25 19.13 65.01 19.3733 65.59 19.86C66.17 20.34 66.46 21.23 66.46 22.53ZM65.77 22.53C65.77 21.7367 65.6567 21.1333 65.43 20.72C65.2033 20.3 64.9267 20.0233 64.6 19.89C64.28 19.7567 63.9167 19.69 63.51 19.69H62.56V25.45H63.52C64.1467 25.45 64.6767 25.2367 65.11 24.81C65.55 24.3767 65.77 23.6167 65.77 22.53ZM70.0061 20.65C70.7128 20.65 71.2494 20.8933 71.6161 21.38C71.9828 21.86 72.1661 22.5233 72.1661 23.37C72.1661 24.1833 71.9761 24.8433 71.5961 25.35C71.2228 25.85 70.6894 26.1 69.9961 26.1C69.2961 26.1 68.7594 25.8567 68.3861 25.37C68.0128 24.8767 67.8261 24.2133 67.8261 23.38C67.8261 22.5533 68.0128 21.8933 68.3861 21.4C68.7661 20.9 69.3061 20.65 70.0061 20.65ZM70.0061 21.2C69.0061 21.2 68.5061 21.9267 68.5061 23.38C68.5061 24.8267 69.0028 25.55 69.9961 25.55C70.9894 25.55 71.4861 24.8233 71.4861 23.37C71.4861 21.9233 70.9928 21.2 70.0061 21.2ZM77.4222 20.65C78.0822 20.65 78.4122 21.1267 78.4122 22.08V26H77.8122V22.21C77.8122 21.9233 77.8022 21.71 77.7822 21.57C77.7689 21.4233 77.7289 21.3167 77.6622 21.25C77.6022 21.1767 77.5022 21.14 77.3622 21.14C76.9689 21.14 76.6255 21.38 76.3322 21.86V26H75.6422V22.21C75.6422 21.9233 75.6322 21.71 75.6122 21.57C75.5989 21.4233 75.5589 21.3167 75.4922 21.25C75.4322 21.1767 75.3322 21.14 75.1922 21.14C74.8055 21.14 74.4622 21.38 74.1622 21.86V26H73.5722V20.75H74.0722L74.1122 21.39C74.2655 21.1567 74.4322 20.9767 74.6122 20.85C74.7989 20.7167 75.0189 20.65 75.2722 20.65C75.7922 20.65 76.1222 20.89 76.2622 21.37C76.4155 21.1367 76.5822 20.96 76.7622 20.84C76.9422 20.7133 77.1622 20.65 77.4222 20.65ZM81.9883 18.38C82.1483 18.38 82.2749 18.4267 82.3683 18.52C82.4683 18.6133 82.5183 18.73 82.5183 18.87C82.5183 19.0233 82.4683 19.1467 82.3683 19.24C82.2749 19.3333 82.1483 19.38 81.9883 19.38C81.8416 19.38 81.7216 19.3333 81.6283 19.24C81.5349 19.1467 81.4883 19.0233 81.4883 18.87C81.4883 18.73 81.5349 18.6133 81.6283 18.52C81.7216 18.4267 81.8416 18.38 81.9883 18.38ZM82.5783 20.75V25.46H84.0983V26H80.2983V25.46H81.9583V21.29H80.3483V20.75H82.5783ZM86.0744 20.75H86.5944L86.6544 21.52C86.8544 21.2533 87.121 21.0433 87.4544 20.89C87.7877 20.73 88.1077 20.65 88.4144 20.65C88.9344 20.65 89.311 20.7833 89.5444 21.05C89.7844 21.31 89.9044 21.6933 89.9044 22.2V26H89.2844V22.87C89.2844 22.43 89.261 22.0933 89.2144 21.86C89.1744 21.6267 89.081 21.4533 88.9344 21.34C88.7877 21.2267 88.5644 21.17 88.2644 21.17C87.9444 21.17 87.641 21.27 87.3544 21.47C87.0744 21.6633 86.8544 21.8833 86.6944 22.13V26H86.0744V20.75ZM93.9805 18.38C94.1405 18.38 94.2671 18.4267 94.3605 18.52C94.4605 18.6133 94.5105 18.73 94.5105 18.87C94.5105 19.0233 94.4605 19.1467 94.3605 19.24C94.2671 19.3333 94.1405 19.38 93.9805 19.38C93.8338 19.38 93.7138 19.3333 93.6205 19.24C93.5271 19.1467 93.4805 19.0233 93.4805 18.87C93.4805 18.73 93.5271 18.6133 93.6205 18.52C93.7138 18.4267 93.8338 18.38 93.9805 18.38ZM94.5705 20.75V25.46H96.0905V26H92.2905V25.46H93.9505V21.29H92.3405V20.75H94.5705ZM98.7666 18.54V26H98.1466V18.62L98.7666 18.54ZM102.297 20.75L99.7466 23.13L102.607 26H101.707L98.8666 23.13L101.377 20.75H102.297ZM67.996 39H66.268L66.172 35.436C66.164 35.26 66.16 35.02 66.16 34.716C66.16 34.316 66.172 33.928 66.196 33.552C66.22 33.168 66.248 32.768 66.28 32.352L65.344 37.584H63.856L62.836 32.352C62.924 33.272 62.968 34.1 62.968 34.836L62.956 35.472L62.896 39H61.204L61.672 30.684H63.7L64.624 36.06L65.5 30.684H67.528L67.996 39ZM74.3993 37.164C74.3993 37.396 74.4313 37.568 74.4953 37.68C74.5593 37.792 74.6673 37.876 74.8193 37.932L74.4233 39.18C74.0393 39.14 73.7193 39.056 73.4633 38.928C73.2073 38.792 73.0073 38.596 72.8633 38.34C72.6233 38.62 72.3193 38.836 71.9513 38.988C71.5833 39.132 71.1913 39.204 70.7753 39.204C70.1193 39.204 69.5953 39.02 69.2033 38.652C68.8113 38.276 68.6153 37.792 68.6153 37.2C68.6153 36.512 68.8873 35.98 69.4313 35.604C69.9753 35.22 70.7393 35.028 71.7233 35.028H72.5753V34.8C72.5753 34.144 72.1553 33.816 71.3153 33.816C71.0993 33.816 70.8273 33.848 70.4993 33.912C70.1793 33.968 69.8673 34.048 69.5633 34.152L69.1313 32.892C69.5393 32.74 69.9633 32.624 70.4033 32.544C70.8513 32.456 71.2553 32.412 71.6153 32.412C73.4713 32.412 74.3993 33.164 74.3993 34.668V37.164ZM71.4233 37.848C71.6393 37.848 71.8553 37.788 72.0713 37.668C72.2953 37.54 72.4633 37.368 72.5753 37.152V36.108H72.1073C71.0833 36.108 70.5713 36.428 70.5713 37.068C70.5713 37.316 70.6433 37.508 70.7873 37.644C70.9393 37.78 71.1513 37.848 71.4233 37.848ZM81.7506 30.096V39H80.0706L79.9746 38.304C79.7826 38.576 79.5386 38.796 79.2426 38.964C78.9466 39.124 78.6026 39.204 78.2106 39.204C77.4426 39.204 76.8586 38.9 76.4586 38.292C76.0666 37.684 75.8706 36.852 75.8706 35.796C75.8706 35.14 75.9746 34.556 76.1826 34.044C76.3906 33.532 76.6866 33.132 77.0706 32.844C77.4546 32.556 77.9026 32.412 78.4146 32.412C78.9906 32.412 79.4706 32.612 79.8546 33.012V29.892L81.7506 30.096ZM78.9186 33.804C78.5746 33.804 78.3066 33.968 78.1146 34.296C77.9226 34.616 77.8266 35.12 77.8266 35.808C77.8266 36.544 77.9106 37.064 78.0786 37.368C78.2546 37.664 78.4986 37.812 78.8106 37.812C79.2106 37.812 79.5586 37.568 79.8546 37.08V34.332C79.7186 34.156 79.5746 34.024 79.4226 33.936C79.2786 33.848 79.1106 33.804 78.9186 33.804ZM88.7899 37.164C88.7899 37.396 88.8219 37.568 88.8859 37.68C88.9499 37.792 89.0579 37.876 89.2099 37.932L88.8139 39.18C88.4299 39.14 88.1099 39.056 87.8539 38.928C87.5979 38.792 87.3979 38.596 87.2539 38.34C87.0139 38.62 86.7099 38.836 86.3419 38.988C85.9739 39.132 85.5819 39.204 85.1659 39.204C84.5099 39.204 83.9859 39.02 83.5939 38.652C83.2019 38.276 83.0059 37.792 83.0059 37.2C83.0059 36.512 83.2779 35.98 83.8219 35.604C84.3659 35.22 85.1299 35.028 86.1139 35.028H86.9659V34.8C86.9659 34.144 86.5459 33.816 85.7059 33.816C85.4899 33.816 85.2179 33.848 84.8899 33.912C84.5699 33.968 84.2579 34.048 83.9539 34.152L83.5219 32.892C83.9299 32.74 84.3539 32.624 84.7939 32.544C85.2419 32.456 85.6459 32.412 86.0059 32.412C87.8619 32.412 88.7899 33.164 88.7899 34.668V37.164ZM85.8139 37.848C86.0299 37.848 86.2459 37.788 86.4619 37.668C86.6859 37.54 86.8539 37.368 86.9659 37.152V36.108H86.4979C85.4739 36.108 84.9619 36.428 84.9619 37.068C84.9619 37.316 85.0339 37.508 85.1779 37.644C85.3299 37.78 85.5419 37.848 85.8139 37.848ZM95.4813 32.436C95.8653 32.436 96.2173 32.5 96.5373 32.628L96.1893 35.292H94.9893V34.128C94.6373 34.184 94.3253 34.372 94.0533 34.692C93.7813 35.012 93.5693 35.416 93.4173 35.904V37.728H94.6773V39H90.6813V37.728H91.5213V33.888H90.6813V32.628H92.9733L93.3092 34.056C93.5413 33.512 93.8333 33.108 94.1853 32.844C94.5373 32.572 94.9693 32.436 95.4813 32.436ZM103.181 37.164C103.181 37.396 103.213 37.568 103.277 37.68C103.341 37.792 103.449 37.876 103.601 37.932L103.205 39.18C102.821 39.14 102.501 39.056 102.245 38.928C101.989 38.792 101.789 38.596 101.645 38.34C101.405 38.62 101.101 38.836 100.733 38.988C100.365 39.132 99.9726 39.204 99.5566 39.204C98.9006 39.204 98.3766 39.02 97.9846 38.652C97.5926 38.276 97.3966 37.792 97.3966 37.2C97.3966 36.512 97.6686 35.98 98.2126 35.604C98.7566 35.22 99.5206 35.028 100.505 35.028H101.357V34.8C101.357 34.144 100.937 33.816 100.097 33.816C99.8806 33.816 99.6086 33.848 99.2806 33.912C98.9606 33.968 98.6486 34.048 98.3446 34.152L97.9126 32.892C98.3206 32.74 98.7446 32.624 99.1846 32.544C99.6326 32.456 100.037 32.412 100.397 32.412C102.253 32.412 103.181 33.164 103.181 34.668V37.164ZM100.205 37.848C100.421 37.848 100.637 37.788 100.853 37.668C101.077 37.54 101.245 37.368 101.357 37.152V36.108H100.889C99.8646 36.108 99.3526 36.428 99.3526 37.068C99.3526 37.316 99.4246 37.508 99.5686 37.644C99.7206 37.78 99.9326 37.848 100.205 37.848ZM101.405 28.98L102.149 30.408L99.3046 31.536L98.7886 30.564L101.405 28.98ZM107.568 37.848C107.896 37.848 108.152 37.8 108.336 37.704C108.528 37.6 108.624 37.448 108.624 37.248C108.624 37.104 108.584 36.988 108.504 36.9C108.432 36.812 108.292 36.728 108.084 36.648C107.876 36.56 107.552 36.456 107.112 36.336C106.472 36.168 105.984 35.936 105.648 35.64C105.312 35.336 105.144 34.92 105.144 34.392C105.144 33.808 105.384 33.332 105.864 32.964C106.352 32.596 107.032 32.412 107.904 32.412C108.912 32.412 109.772 32.672 110.484 33.192L109.728 34.308C109.144 33.948 108.556 33.768 107.964 33.768C107.652 33.768 107.42 33.808 107.268 33.888C107.124 33.968 107.052 34.092 107.052 34.26C107.052 34.372 107.088 34.468 107.16 34.548C107.24 34.62 107.384 34.696 107.592 34.776C107.808 34.856 108.128 34.956 108.552 35.076C109.008 35.204 109.38 35.344 109.668 35.496C109.964 35.648 110.192 35.852 110.352 36.108C110.512 36.364 110.592 36.692 110.592 37.092C110.592 37.54 110.456 37.924 110.184 38.244C109.912 38.564 109.548 38.804 109.092 38.964C108.636 39.124 108.132 39.204 107.58 39.204C106.988 39.204 106.452 39.12 105.972 38.952C105.492 38.784 105.084 38.548 104.748 38.244L105.696 37.176C106.272 37.624 106.896 37.848 107.568 37.848ZM114.475 37.56H117.655L117.475 39H112.231V37.656L115.399 34.056H112.495V32.628H117.595V33.96L114.475 37.56Z" fill="white"/>
            <path d="M11 49V18L27 49H11Z" fill="white"/>
            <path d="M47 11H14L30.5 43.5L47 11Z" fill="white"/>
            <path d="M49 18L34 49H49V18Z" fill="white"/>
          </svg>
        </div>

        <div id="summary">
          <h2>
            Systems Architect with &gt;15 years of experience. <br />
            Innovative. Creative. Reliable.
          </h2>

          <p>
            My fields: #gamedev, #backend, #frontend <br />
            explore my <a href="#portfolio">portfolio</a> | read my{" "}
            <a href="/resume_en.pdf">C.V.</a>
            <a href="/resume_sk.pdf">
              <sup>SK</sup>
            </a>{" "}
            <br />
            you can also <a href="#contactme">contact me</a> or follow on{" "}
            <a href="#contactme">social media</a>.
          </p>

          <div id="arrow">
            <a href="#aboutme">
              <img src="/arrow.svg" width={18} />
            </a>
          </div>
        </div>
      </div>

      <div id="content">
        <h2 id="aboutme">
          <a href="#aboutme">About Me</a>
        </h2>

        <p>
          I'm an ever-curious software engineer, with over a decade of experience, specializing in back-end, front-end and full-stack development projects, coding, and product development for a global client base.
        </p>

        <p>
          Currently, I am working with GlobalLogic – where I serve as a part of a small offshore team of people developing distributed systems for our client in the US. As a part of this role, I’ve gained an extensive  experience managing remote teams and resources and overseeing projects from design to production. I’ve leveraged a number of different methodologies and processes including Agile, Scrum, and Test-Driven Development (TDD).
        </p>

        <p>
          Ever since I was a kid, I’ve had a strong interest in computers and tech. As a result, my hobbies are either directly or indirectly relatable to my professional career. I’m active on GitHub, where I am often developing open-source code for various projects as a hobby. I’ve co-authored a few libraries for gamedev, the modding community, as well as systems programming for more efficient processing.
        </p>

        <p>
          Additionally, I have created libraries and tools that simplify the development process under C/C++ language, such as zpl, zpl.librg or zpl.tester.
        </p>

        <p>
          My experience also includes working on a futuristic deathmatch arena game, NEON SLAYER, and a couple of multi-player modifications. Including one named Mafia Oakwood, which offers online experience with player generated content within the game.
        </p>

        <p>
          One theme that runs throughout my projects has been to help solve for and reduce the complexities of any system. Whether it is setting up and managing the flow of game systems, crafting elegant code, or removing redundancies or unnecessary pieces – I’ve always tried to push the boundaries of simplicity and minimalism.
        </p>

        <p>
          Here's a list of skills I have gained throughout my career and hobby projects:
        </p>
        <Technologies/>

        <h2 id="contactme">
          <a href="#contactme">Reach Me</a>
        </h2>

        <p>
          You can contact me at <a href="#">contact [at] madaraszd [dot] net</a>
          , but you can also find me at various social sites I participate in:
        </p>

        <MediaLinks />

        <h2 id="portfolio">
          <a href="#portfolio">My Portfolio</a>
        </h2>

        <Projects />
      </div>
    </div>

    <Footer />

    <style global jsx>{`
      :global(body) {
        color: #ccc;
      }
      #logo {
        margin-top: 48px;
        position: relative;
        left: 0;
        right: 0;
        top: 0;
        padding: 0 40px;
        text-align: center;
        z-index: 1000;
      }
      #logo img {
        display: block;
        margin: 0 auto 10px;
      }
      #logo .title,
      #logo .subtitle {
        padding: 3px 0;
      }
      #logo .title {
        font-size: 16px;
      }
      #logo .title b {
        font-weight: 500;
      }
      #logo .subtitle {
        color: #9b9b9b;
      }
      #top {
        height: calc(100vh - 72px);
        width: 100vw;
        position: relative;
        text-align: center;
        max-width: 100%;
      }
      #top .top-content {
        position: relative;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        opacity: 1;
      }
      #summary {
        height: 50vh;
        width: 100%;
        line-height: 2.5em;
        text-align: center;
        position: relative;
      }
      #summary p {
        font-size: 12pt;
        line-height: 1.5em;
      }
      #arrow {
        position: absolute;
        left: 50%;
        margin-left: -9px;
      }
      #video {
        height: 50vh;
        width: 100%;
        position: absolute;
      }
      #video video {
        height: 100%;
        width: 100%;
      }
      @keyframes appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      #content {
        max-width: 780px;
        margin: auto;
      }
      #content h2 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        font-size: 36px;
        color: #fff;
        margin: 100px 0 30px 0;
        padding-top: 30px;
        text-align: center;
      }
      #content h3 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        font-size: 26px;
        color: #fff;
        margin: 48px 0 20px 0;
        padding-top: 20px;
      }
      #content h2 a,
      #content h3 a {
        color: #fff;
        border-bottom-width: 0;
      }
      #content p {
        font-size: 14px;
        line-height: 24px;
        margin: 0 0 20px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }
      #content p code,
      #content li code,
      #content td code {
        color: #fff;
      }
      #content p code:before,
      #content p code:after,
      #content td code:before,
      #content td code:after,
      #content li code:before,
      #content li code:after {
        content: "\\0060";
      }
      #content pre {
        margin: 30px;
        color: #50e3c2;
        line-height: 18px;
      }
      #content ul {
        margin: 20px 10px;
      }
      #content ul li {
        list-style-type: none;
        line-height: 18px;
        margin: 5px 0;
        padding-left: 20px;
      }
      #content ul li:before {
        content: "-";
        color: #999;
        position: absolute;
        margin-left: -20px;
      }
      #content p b {
        color: #fff;
      }
      @media screen and (max-width: 500px) {
        #summary {
          font-size: 8pt;
        }

        #summary p {
          font-size: 10pt;
        }
      }
      @media screen and (max-height: 500px) {
        .title {
          display: none;
        }
      }
      @media screen and (max-height: 550px) {
        .title span {
          display: none !important;
        }
        #logo {
          display: none;
        }
        #summary {
          top: 0 !important;
        }
      }
      @media screen and (max-height: 650px) {
        #logo img {
          height: 50px;
          width: auto;
          padding: 0;
          margin-top: 0;
        }
        #video {
          top: 48px;
          transform: translateY(0);
        }
        #logo {
          margin-top: 0;
        }
      }
      @media screen and (max-width: 800px) {
        #header {
          width: 300px;
          margin: 0 auto;
        }
      }
      @media screen and (max-width: 700px) {
        #header {
          text-align: center;
          padding: 20px 0;
          position: static;
        }
        #content {
          padding: 20px;
        }
        #content h2 {
          margin-top: 0;
        }
        #content h2:first-child {
          padding-top: 0;
        }
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
          overflow: auto;
        }
        #content img {
          max-width: 100%;
          height: auto;
        }
      }
      .is-hidden {
        display: none;
      }
    `}</style>
  </Layout>
);

export default Index;
