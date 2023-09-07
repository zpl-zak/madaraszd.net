import {Component, Fragment} from 'react'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const socialSites = [
    {
        title: "GitHub",
        icon: "github",
        url: "https://github.com/zpl-zak"
    },
    {
        title: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/DMadarasz"
    },
    {
        title: "LinkedIn",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/zaklaus/"
    },
    {
        title: "YouTube",
        icon: "youtube",
        url: "https://www.youtube.com/user/eliminator97x45/"
    },
    {
        title: "Discord (MafiaHub)",
        icon: "discord",
        url: "https://zakto.pw/mafiahub"
    },
    {
        title: "Reddit",
        icon: "reddit",
        url: "https://www.reddit.com/user/Baltanowski"
    },
    {
        title: "Facebook",
        icon: "facebook",
        url: "https://www.facebook.com/ZaKlaus"
    },
    {
        title: "HackerNews",
        icon: "hacker-news",
        url: "https://news.ycombinator.com/user?id=zaklaus"
    }
]

const MediaLinks = () => {
    const sites = socialSites.map((site, idx) => {
        return (
            <Fragment key={idx}>
                <div className="media">
                    <a target="_blank" href={site.url}>
                        <FontAwesomeIcon icon={['fab', site.icon]} />
                    </a>
                </div>

                <style jsx>{`
                    .media {
                        position: relative;
                        display: inline-block;
                        text-align: center;
                        margin-left: 16px;
                        margin-right: 16px;
                        font-size: 48px;
                    }

                    .media a {
                        color: white;
                    }

                    .media a:visited {
                        color: white;
                    }

                    .media a:hover {
                        color: #50e3c2;
                    }

                    @media screen and (max-width: 500px) {
                        .media {
                            font-size: 32px;
                        }
                    }
                `}
                </style>
            </Fragment>
        )
    })

    return (
        <Fragment>
            <div id="media-row">
                {sites}
            </div>

            <style jsx>{`
                #media-row {
                    position: relative;
                    width: 100%;
                    text-align: center;
                    margin-bottom: 50px;
                    line-height: 50px;
                }
            `}</style>
        </Fragment>
    )
}

export default MediaLinks
