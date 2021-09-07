import { Fragment } from 'react'

const projects = [
    {
        title: "MafiaHub Framework",
        year: "2021",
        access: "Open Source",
        link: "https://github.com/MafiaHub/Framework",
        desc: "Framework for multi-player modifications",
        uses: "c++, firebase, slikenet, sentry, cef, node, mongoose, git, cmake",
        role: "Project Co-Lead"
    },
    {
        title: "ZPL - texed",
        year: "2021",
        access: "Open Source",
        link: "https://github.com/zpl-c/texed",
        desc: "Stack-based texture generation tool",
        uses: "c, raylib, cwpack, git",
        role: "Project Lead"
    },
    {
        title: "ZPL - tester",
        year: "2021",
        access: "Open Source",
        link: "https://github.com/zpl-c/tester",
        desc: "Simple unit testing framework for small-scale C applications (especially embedded.)",
        uses: "c, git",
        role: "Project Lead"
    },
    {
        title: "ZPL - eco2d",
        year: "2020 - now",
        access: "Open Source",
        link: "https://github.com/zpl-c/eco2d",
        desc: "Sandboxing platform in synergy with other cool tech stack.",
        uses: "c, librg, flecs, raylib, git",
        role: "Project Lead"
    },
    {
        title: "rinetd-admin",
        year: "2020",
        access: "Open Source",
        link: "https://github.com/zaklaus/rinetd-admin",
        desc: "Admin dashboard for rinetd service.",
        role: "Project Lead",
        uses: "js, react, nextjs, nodejs, rinetd, rest, swr, formik"
    },
    {
        title: "NEON SLAYER",
        year: "2020 - now",
        access: "Open Source",
        link: "https://zaklaus.itch.io/neon-slayer",
        desc: "NEON SLAYER is an action-packed fast-paced deathmatch arena, where your only weapons are reflexes.",
        uses: "c++, lua, neon86, enet",
        role: "Project Lead"
    },
    {
        title: "NEON86",
        year: "2020 - now",
        access: "Open Source",
        link: "https://zaklaus.itch.io/neon-86",
        desc: "A toy game engine reflecting on simplicity and retro approach to gamedev.",
        uses: "c++, d3d9, lua, assimp",
        role: "Project Lead"
    },
    {
        title: "Blade",
        year: "2019 - now",
        access: "Closed Source",
        desc: "A retro-styled FPS game with RPG mechanics.",
        uses: "c, quakec, perforce, fteqw",
        role: "Project Lead"
    },
    {
        title: "Pytagoras",
        year: "2019",
        access: "Closed Source",
        desc: "Back-End Office system for insurance management",
        uses: "php, nette, js",
        role: "Developer"
    },
    {
        title: "Mafia: Oakwood",
        year: "2019 - now",
        link: "https://mafiahub.dev",
        access: "Closed Source",
        desc: "Unofficial multi-player modification for Mafia: The City of Lost Heaven.",
        uses: "c++, git, nodejs, nextjs, go, x86 asm, librg",
        role: "Project Co-lead"
    },
    {
        title: "MafiaUnity",
        year: "2018 - now",
        link: "https://github.com/MafiaHub/MafiaUnity",
        access: "Open Source",
        desc: "Mafia game framework and game engine re-implementation.",
        uses: "c#, unity, git",
        role: "Project Lead"
    },
    {
        title: "go-specgen",
        year: "2019",
        link: "https://github.com/zaklaus/go-specgen",
        access: "Open Source",
        desc: "Go specgen is a minimalistic library for generating format specification into various languages.",
        uses: "go, git",
        role: "Project Lead"
    },
    {
        title: "Daggerfall Unity",
        year: "2019",
        access: "Open Source",
        link: "https://github.com/Interkarma/daggerfall-unity",
        desc: "Open source recreation of Daggerfall in the Unity engine.",
        uses: "c#, unity, git",
        role: "Contributor"
    },
    {
        title: "OpenMF",
        year: "2017 - 2018",
        link: "https://github.com/zaklaus/OpenMF",
        access: "Open Source",
        desc: "LS3D game engine re-implementation.",
        uses: "c++, osg, bullet, git",
        role: "Project Co-lead"
    },
    {
        title: "rurik",
        year: "2018 - now",
        access: "Open Source",
        link: "https://github.com/zaklaus/rurik",
        desc: "A 2D cross-platform game engine/framework made as an experiment to explore what possibilities can be achieved in an ideal workspace.",
        uses: "go, git, raylib-go",
        role: "Project Lead"
    },
    {
        title: "LumixEngine",
        year: "2018",
        access: "Open Source",
        link: "https://github.com/nem0/LumixEngine",
        desc: "3D Game Engine",
        uses: "c++, git",
        role: "Contributor"
    },
    {
        title: "ZPL",
        year: "2017 - now",
        access: "Open Source",
        link: "https://github.com/zpl-c/zpl",
        desc: "C99 cross-platform header-only library that offers powerful toolkit to accelerate your development progress.",
        uses: "c, nodejs, git",
        role: "Project Lead"
    },
    {
        title: "librg",
        year: "2017 - now",
        access: "Open Source",
        link: "https://github.com/librg/librg",
        desc: "Pure C99 game networking library for building simple and elegant cross-platform multiplayer client-server solutions.",
        uses: "c, nodejs, git, zpl",
        role: "Project Co-lead"
    },
    {
        title: "Handmade FTW",
        year: "2018",
        access: "Open Source",
        link: "https://github.com/zaklaus/handmade_ftw",
        desc: "Handmade FTW is a collection of header-only libraries for ease use of common algorithms. Predecessor to ZPL.",
        uses: "c, git",
        role: "Project Lead"
    },
    {
        title: "Fusion3D",
        year: "2015 - 2017",
        access: "Open Source",
        link: "https://github.com/zaklaus/fusion3d",
        desc: "Simple 3D Game Engine with dynamic shading, physics and reflected modular programming. It was later repurposed into an open-source game engine reimplementation of LS3D engine.",
        uses: "c++, c, c#, git",
        role: "Project Lead"
    },
    {
        title: "Mafia 2 Online",
        year: "2016",
        access: "Closed Source",
        desc: "Unofficial multi-player modification for Mafia 2.",
        uses: "c++, git",
        role: "Developer"
    },
    {
        title: "PRENATAL",
        year: "2016",
        access: "Closed Source",
        desc: "Patient database management developed for PRENATAL, s.r.o.",
        uses: "c#, aspnet, git",
        role: "Project Co-lead"
    },
    {
        title: "Arogine",
        year: "2016",
        access: "Open Source",
        link: "https://github.com/zaklaus/arogine",
        desc: "A simple voxel renderer aimed for rendering static meshes, images or Minecraft-esque worlds, quickly and effectively.",
        uses: "c++, git, php",
        role: "Project Lead"
    },
    {
        title: "Life of Developer",
        year: "2013 - 2016",
        access: "Closed Source",
        link: "https://indiedb.com/games/life-of-developer",
        desc: "Life of Developer was an MMORPG focused on product development, marketing and social interaction.",
        uses: "c#, git, php",
        role: "Project Co-lead"
    },
    {
        title: "LHMP",
        year: "2013 - 2015",
        access: "Closed Source, Open Source (2014)",
        link: "https://github.com/LHMPTeam/lhmp-old",
        desc: "This is a former multiplayer modification made for Mafia: The City of Lost Heaven.",
        uses: "c++, git, svn, raknet",
        role: "Project Co-lead"
    },
    {
        title: "Various CMS frameworks",
        year: "2012 - 2013",
        access: "Closed Source",
        desc: "These were various CMS libraries I wrote mostly for personal use or as a contract.",
        uses: "aspnet, php",
        role: "Developer"
    },
]

const processUri = url => {
    url = url.replace('https://','')
    return url.length > 30 ? ('...' + url.substring(url.length-30, url.length)) : url
}

const Projects = () => (
    projects.map((prj, i) => {
        return (
            <Fragment key={i}>
                <div className="project">
                    <h3>{prj.title} {prj.link!=null? <a target="_blank" href={prj.link}>{processUri(prj.link)}</a> : ""}</h3>
                    <h4>{prj.desc}</h4>
                    <ul>
                        <li><b>Developed in: </b>{prj.year}</li>
                        <li><b>Status: </b>{prj.access}</li>
                        <li><b>Role: </b>{prj.role}</li>
                        <li><b>Uses: </b>{prj.uses}</li>
                    </ul>
                </div>
                <style jsx>{`
                    .project {
                        margin-bottom: 30px;
                    }
                    .project h3 {
                        margin: 0;
                        margin-bottom: 5px;
                        font-size: 16pt;
                    }
                    .project a {
                        color: #50e3c2 !important;
                        font-size: 12pt;
                        font-weight: normal;
                        float: right;
                    }
                    .project h4 {
                        font-weight: normal;
                        margin: 0px;
                        padding-left: 5px;
                    }
                    .project ul {
                        margin: 0;
                        padding: 0;
                        margin-top: 5px;
                        margin-left: 10px;
                    }
                    .project li {
                        list-style-type: none;
                        margin-left: 5px;
                    }
                `}</style>
            </Fragment>
        )
    })
)

export default Projects
