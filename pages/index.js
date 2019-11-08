import {Component} from 'react'
import Head from 'next/head'

import Layout from '../components/Layout.js'
import Footer from '../components/Footer.js'
import Projects from '../components/Projects.js'
import MediaLinks from '../components/MediaLink.js'
import Technologies from '../components/Technologies.js'

export default class Index extends Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title>Dominik Madarász</title>
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:site" content="@DMadarasz" />
                    <meta property="og:title" content="Dominik Madarász" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="ZaKlaus" />
                    <meta property="og:url" content="https://madaraszd.net" />
                    <meta property="description" content="Back-end, Front-end, full-stack software engineer." />
                    <meta
                        property="og:description"
                        content="Back-end, Front-end, full-stack software engineer."/>
                    <meta
                        property="og:image"
                        content="https://madaraszd.net/logo.png"/>

                    <link type="application/json+oembed" href="https://madaraszd.net/oembed.json" />
                    <script src="https://kit.fontawesome.com/6b6c57fb81.js" crossOrigin="anonymous" samesite="strict"></script>
                </Head>

                <div id="main">
                    <div id="top">
                        <div id="logo">
                            <h3>
                                Welcome, I am
                            </h3>

                            <svg width="244" height="120" viewBox="0 0 244 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H244V120H0V0Z" fill="black"/>
                                <rect x="13" y="13" width="94" height="94" fill="black" stroke="black" strokeWidth="6"/>
                                <path d="M22 98V36L54 98H22Z" fill="white"/>
                                <path d="M94 22H28L61 87L94 22Z" fill="white"/>
                                <path d="M98 38L69 98H98V38Z" fill="white"/>
                                <path d="M132.92 46.06C132.92 48.6733 132.327 50.4867 131.14 51.5C129.967 52.5 128.533 53 126.84 53H123.86V39.26H126.62C128.5 39.26 130.02 39.7467 131.18 40.72C132.34 41.68 132.92 43.46 132.92 46.06ZM131.54 46.06C131.54 44.4733 131.313 43.2667 130.86 42.44C130.407 41.6 129.853 41.0467 129.2 40.78C128.56 40.5133 127.833 40.38 127.02 40.38H125.12V51.9H127.04C128.293 51.9 129.353 51.4733 130.22 50.62C131.1 49.7533 131.54 48.2333 131.54 46.06ZM140.012 42.3C141.426 42.3 142.499 42.7867 143.232 43.76C143.966 44.72 144.332 46.0467 144.332 47.74C144.332 49.3667 143.952 50.6867 143.192 51.7C142.446 52.7 141.379 53.2 139.992 53.2C138.592 53.2 137.519 52.7133 136.772 51.74C136.026 50.7533 135.652 49.4267 135.652 47.76C135.652 46.1067 136.026 44.7867 136.772 43.8C137.532 42.8 138.612 42.3 140.012 42.3ZM140.012 43.4C138.012 43.4 137.012 44.8533 137.012 47.76C137.012 50.6533 138.006 52.1 139.992 52.1C141.979 52.1 142.972 50.6467 142.972 47.74C142.972 44.8467 141.986 43.4 140.012 43.4ZM154.844 42.3C156.164 42.3 156.824 43.2533 156.824 45.16V53H155.624V45.42C155.624 44.8467 155.604 44.42 155.564 44.14C155.538 43.8467 155.458 43.6333 155.324 43.5C155.204 43.3533 155.004 43.28 154.724 43.28C153.938 43.28 153.251 43.76 152.664 44.72V53H151.284V45.42C151.284 44.8467 151.264 44.42 151.224 44.14C151.198 43.8467 151.118 43.6333 150.984 43.5C150.864 43.3533 150.664 43.28 150.384 43.28C149.611 43.28 148.924 43.76 148.324 44.72V53H147.144V42.5H148.144L148.224 43.78C148.531 43.3133 148.864 42.9533 149.224 42.7C149.598 42.4333 150.038 42.3 150.544 42.3C151.584 42.3 152.244 42.78 152.524 43.74C152.831 43.2733 153.164 42.92 153.524 42.68C153.884 42.4267 154.324 42.3 154.844 42.3ZM163.977 37.76C164.297 37.76 164.55 37.8533 164.737 38.04C164.937 38.2267 165.037 38.46 165.037 38.74C165.037 39.0467 164.937 39.2933 164.737 39.48C164.55 39.6667 164.297 39.76 163.977 39.76C163.683 39.76 163.443 39.6667 163.257 39.48C163.07 39.2933 162.977 39.0467 162.977 38.74C162.977 38.46 163.07 38.2267 163.257 38.04C163.443 37.8533 163.683 37.76 163.977 37.76ZM165.157 42.5V51.92H168.197V53H160.597V51.92H163.917V43.58H160.697V42.5H165.157ZM172.149 42.5H173.189L173.309 44.04C173.709 43.5067 174.242 43.0867 174.909 42.78C175.575 42.46 176.215 42.3 176.829 42.3C177.869 42.3 178.622 42.5667 179.089 43.1C179.569 43.62 179.809 44.3867 179.809 45.4V53H178.569V46.74C178.569 45.86 178.522 45.1867 178.429 44.72C178.349 44.2533 178.162 43.9067 177.869 43.68C177.575 43.4533 177.129 43.34 176.529 43.34C175.889 43.34 175.282 43.54 174.709 43.94C174.149 44.3267 173.709 44.7667 173.389 45.26V53H172.149V42.5ZM187.961 37.76C188.281 37.76 188.534 37.8533 188.721 38.04C188.921 38.2267 189.021 38.46 189.021 38.74C189.021 39.0467 188.921 39.2933 188.721 39.48C188.534 39.6667 188.281 39.76 187.961 39.76C187.668 39.76 187.428 39.6667 187.241 39.48C187.054 39.2933 186.961 39.0467 186.961 38.74C186.961 38.46 187.054 38.2267 187.241 38.04C187.428 37.8533 187.668 37.76 187.961 37.76ZM189.141 42.5V51.92H192.181V53H184.581V51.92H187.901V43.58H184.681V42.5H189.141ZM197.533 38.08V53H196.293V38.24L197.533 38.08ZM204.593 42.5L199.493 47.26L205.213 53H203.413L197.733 47.26L202.753 42.5H204.593ZM135.992 78H132.536L132.344 70.872C132.328 70.52 132.32 70.04 132.32 69.432C132.32 68.632 132.344 67.856 132.392 67.104C132.44 66.336 132.496 65.536 132.56 64.704L130.688 75.168H127.712L125.672 64.704C125.848 66.544 125.936 68.2 125.936 69.672L125.912 70.944L125.792 78H122.408L123.344 61.368H127.4L129.248 72.12L131 61.368H135.056L135.992 78ZM148.799 74.328C148.799 74.792 148.863 75.136 148.991 75.36C149.119 75.584 149.335 75.752 149.639 75.864L148.847 78.36C148.079 78.28 147.439 78.112 146.927 77.856C146.415 77.584 146.015 77.192 145.727 76.68C145.247 77.24 144.639 77.672 143.903 77.976C143.167 78.264 142.383 78.408 141.551 78.408C140.239 78.408 139.191 78.04 138.407 77.304C137.623 76.552 137.231 75.584 137.231 74.4C137.231 73.024 137.775 71.96 138.863 71.208C139.951 70.44 141.479 70.056 143.447 70.056H145.151V69.6C145.151 68.288 144.311 67.632 142.631 67.632C142.199 67.632 141.655 67.696 140.999 67.824C140.359 67.936 139.735 68.096 139.127 68.304L138.263 65.784C139.079 65.48 139.927 65.248 140.807 65.088C141.703 64.912 142.511 64.824 143.231 64.824C146.943 64.824 148.799 66.328 148.799 69.336V74.328ZM142.847 75.696C143.279 75.696 143.711 75.576 144.143 75.336C144.591 75.08 144.927 74.736 145.151 74.304V72.216H144.215C142.167 72.216 141.143 72.856 141.143 74.136C141.143 74.632 141.287 75.016 141.575 75.288C141.879 75.56 142.303 75.696 142.847 75.696ZM163.501 60.192V78H160.141L159.949 76.608C159.565 77.152 159.077 77.592 158.485 77.928C157.893 78.248 157.205 78.408 156.421 78.408C154.885 78.408 153.717 77.8 152.917 76.584C152.133 75.368 151.741 73.704 151.741 71.592C151.741 70.28 151.949 69.112 152.365 68.088C152.781 67.064 153.373 66.264 154.141 65.688C154.909 65.112 155.805 64.824 156.829 64.824C157.981 64.824 158.941 65.224 159.709 66.024V59.784L163.501 60.192ZM157.837 67.608C157.149 67.608 156.613 67.936 156.229 68.592C155.845 69.232 155.653 70.24 155.653 71.616C155.653 73.088 155.821 74.128 156.157 74.736C156.509 75.328 156.997 75.624 157.621 75.624C158.421 75.624 159.117 75.136 159.709 74.16V68.664C159.437 68.312 159.149 68.048 158.845 67.872C158.557 67.696 158.221 67.608 157.837 67.608ZM177.58 74.328C177.58 74.792 177.644 75.136 177.772 75.36C177.9 75.584 178.116 75.752 178.42 75.864L177.628 78.36C176.86 78.28 176.22 78.112 175.708 77.856C175.196 77.584 174.796 77.192 174.508 76.68C174.028 77.24 173.42 77.672 172.684 77.976C171.948 78.264 171.164 78.408 170.332 78.408C169.02 78.408 167.972 78.04 167.188 77.304C166.404 76.552 166.012 75.584 166.012 74.4C166.012 73.024 166.556 71.96 167.644 71.208C168.732 70.44 170.26 70.056 172.228 70.056H173.932V69.6C173.932 68.288 173.092 67.632 171.412 67.632C170.98 67.632 170.436 67.696 169.78 67.824C169.14 67.936 168.516 68.096 167.908 68.304L167.044 65.784C167.86 65.48 168.708 65.248 169.588 65.088C170.484 64.912 171.292 64.824 172.012 64.824C175.724 64.824 177.58 66.328 177.58 69.336V74.328ZM171.628 75.696C172.06 75.696 172.492 75.576 172.924 75.336C173.372 75.08 173.708 74.736 173.932 74.304V72.216H172.996C170.948 72.216 169.924 72.856 169.924 74.136C169.924 74.632 170.068 75.016 170.356 75.288C170.66 75.56 171.084 75.696 171.628 75.696ZM190.963 64.872C191.731 64.872 192.435 65 193.075 65.256L192.379 70.584H189.979V68.256C189.275 68.368 188.651 68.744 188.107 69.384C187.563 70.024 187.139 70.832 186.835 71.808V75.456H189.355V78H181.363V75.456H183.043V67.776H181.363V65.256H185.947L186.618 68.112C187.083 67.024 187.667 66.216 188.371 65.688C189.075 65.144 189.939 64.872 190.963 64.872ZM206.361 74.328C206.361 74.792 206.425 75.136 206.553 75.36C206.681 75.584 206.897 75.752 207.201 75.864L206.409 78.36C205.641 78.28 205.001 78.112 204.489 77.856C203.977 77.584 203.577 77.192 203.289 76.68C202.809 77.24 202.201 77.672 201.465 77.976C200.729 78.264 199.945 78.408 199.113 78.408C197.801 78.408 196.753 78.04 195.969 77.304C195.185 76.552 194.793 75.584 194.793 74.4C194.793 73.024 195.337 71.96 196.425 71.208C197.513 70.44 199.041 70.056 201.009 70.056H202.713V69.6C202.713 68.288 201.873 67.632 200.193 67.632C199.761 67.632 199.217 67.696 198.561 67.824C197.921 67.936 197.297 68.096 196.689 68.304L195.825 65.784C196.641 65.48 197.489 65.248 198.369 65.088C199.265 64.912 200.073 64.824 200.793 64.824C204.505 64.824 206.361 66.328 206.361 69.336V74.328ZM200.409 75.696C200.841 75.696 201.273 75.576 201.705 75.336C202.153 75.08 202.489 74.736 202.713 74.304V72.216H201.777C199.729 72.216 198.705 72.856 198.705 74.136C198.705 74.632 198.849 75.016 199.137 75.288C199.441 75.56 199.865 75.696 200.409 75.696ZM202.809 57.96L204.297 60.816L198.609 63.072L197.577 61.128L202.809 57.96ZM215.136 75.696C215.792 75.696 216.304 75.6 216.672 75.408C217.056 75.2 217.248 74.896 217.248 74.496C217.248 74.208 217.168 73.976 217.008 73.8C216.864 73.624 216.584 73.456 216.168 73.296C215.752 73.12 215.104 72.912 214.224 72.672C212.944 72.336 211.968 71.872 211.296 71.28C210.624 70.672 210.288 69.84 210.288 68.784C210.288 67.616 210.768 66.664 211.728 65.928C212.704 65.192 214.064 64.824 215.808 64.824C217.824 64.824 219.544 65.344 220.968 66.384L219.456 68.616C218.288 67.896 217.112 67.536 215.928 67.536C215.304 67.536 214.84 67.616 214.536 67.776C214.248 67.936 214.104 68.184 214.104 68.52C214.104 68.744 214.176 68.936 214.32 69.096C214.48 69.24 214.768 69.392 215.184 69.552C215.616 69.712 216.256 69.912 217.104 70.152C218.016 70.408 218.76 70.688 219.336 70.992C219.928 71.296 220.384 71.704 220.704 72.216C221.024 72.728 221.184 73.384 221.184 74.184C221.184 75.08 220.912 75.848 220.368 76.488C219.824 77.128 219.096 77.608 218.184 77.928C217.272 78.248 216.264 78.408 215.16 78.408C213.976 78.408 212.904 78.24 211.944 77.904C210.984 77.568 210.168 77.096 209.496 76.488L211.392 74.352C212.544 75.248 213.792 75.696 215.136 75.696ZM228.95 75.12H235.31L234.95 78H224.462V75.312L230.798 68.112H224.99V65.256H235.19V67.92L228.95 75.12Z" fill="white"/>
                            </svg>

                        </div>

                        <div id="summary">
                            <h2>
                                Software Developer with &gt;10 years of experience. <br />
                                Innovative. Creative. Reliable.
                            </h2>

                            <p>
                                My fields: #gamedev, #backend, #frontend <br />
                                explore my <a href="#portfolio">portfolio</a> |
                                read my <a href="/resume_en.pdf">C.V.</a> <br />
                                you can also <a href="#contactme">contact me</a> or follow on <a href="#contactme">social media</a>.
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
                            I’m Dominik, a developer who loves to explore things.
                            Since my <b>handicap</b> made me more-or-less unable to do certain jobs, I got interested in <b>computers</b>.
                            I always like to explore nature, go out with friends and read
                            articles or books on the Internet.
                            In my spare time I progress with <b>hobby</b> and community <b>projects</b>.
                        </p>

                        <p>
                            I am experienced in these technologies:
                        </p>

                        {/* ul cannot be a child of P */}
                        <Technologies />

                        {/* some spacing */}
                        <br />

                        <p>
                            I am fluent in <b>English</b>, <b>Czech</b> and <b>Slovak</b> languages. I actively use these languages for communication
                            especially during software development.
                        </p>

                        <p>
                            I am capable of <b>teamwork</b> and resource management. I've led multiple teams in the past from the <b>design phase</b> up to the <b>production</b> itself.
                            Team <b>problem-solving</b> or tools associated with project management are very well known to me.
                        </p>

                        <p>
                            As a co-founder of <a target="_blank" href="https://mafiahub.dev/">MafiaHub Group</a>, I've gathered a lot of experience
                            in the field of gamedev, PR and team management. As a group, we partake in projects that involve game development
                            for existing videogames, namely by extending them with a multi-player support. We also participate in various community projects
                            of similar fashion.
                        </p>

                        <p>
                            I am also invested in <b>systems programming</b>. The best example is <a target="_blank" href="https://github.com/zpl-c/zpl">ZPL</a>, a <b>C99 library </b>
                            that offers various features out of the box, including a fully-featured <a target="_blank" href="https://json5.org/">JSON5</a> parser or a platform layer for multimedia prototyping.
                        </p>

                        <p>
                            I co-authored a library written in <b>C99</b> called <a target="_blank" href="https://github.com/librg/librg">librg</a>.
                            It is a lightweight game networking library that is based on our fork of <a target="_blank" href="https://github.com/zpl-c/enet">ENet</a>,
                            which gives us low-level UDP networking with optional reliability. It offers
                            full flow control with robust messaging and event management coupled with powerful and tweakable
                            network-bind culling.
                        </p>

                        <p>
                            My <b>gamedev</b> efforts can be found in a game framework written in Go that I call <a target="_blank" href="https://github.com/zaklaus/rurik">Rurik</a>.
                            It is a library that offers complex 2D rendering of tilemaps and sprites with lighting,
                            support for third-party map or sprite formats as well as robust scripting/quest system.
                            This framework is powered by my personal fork of <a target="_blank" href="https://github.com/zaklaus/raylib-go">raylib-go</a>.
                        </p>

                        <h2 id="contactme">
                            <a href="#contactme">Reach Me</a>
                        </h2>

                        <p>
                            You can contact me at <a href="#">contact [at] madaraszd [dot] net</a>, but you can also
                            find me at various social sites I participate in:
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
                    max-width: 700px;
                    margin: auto;
                  }
                  #content h2 {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
                      'Helvetica Neue', sans-serif;
                    font-size: 36px;
                    color: #fff;
                    margin: 100px 0 30px 0;
                    padding-top: 30px;
                    text-align: center;
                  }
                  #content h3 {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
                      'Helvetica Neue', sans-serif;
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
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
                      'Helvetica Neue', sans-serif;
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
                    content: '\\0060';
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
                    content: '-';
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
        )
    }
}
