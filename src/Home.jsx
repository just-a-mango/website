import './Home.css'
import {ansiShadow, useAsciiText} from 'react-ascii-text';
import {useEffect} from "react";
import Saturn from "./bg/saturn.avif"
import Moon from "./bg/moon.avif"
import Roadster from "./bg/roadster.avif"
import Earthrise from "./bg/earthrise.avif"


function Home() {
    const asciiTextRef = useAsciiText({
        animationLoop: false,
        fadeInOnly: true,
        animationDelay: 0,
        font: ansiShadow,
        text: "Horace Hoff",
        isAnimated: true,
        animationInterval: 0,
    });


    const repositories = [
        {
            name: "TRM-ENGINE",
            desc: "A lightweight terminal-based game engine built with Rust",
            url: "https://github.com/horacehoff/trm-engine",
            lang: "Rust"
        },
        {
            name: "LPI",
            desc: "An image format that compresses by clustering pixels by color using simple additions and multiplications",
            url: "https://github.com/horacehoff/lpi",
            lang: "Python"
        },
        {
            name: "KnowledgeQuantify",
            desc: "An experimental machine learning model to quantify knowledge density",
            url: "https://github.com/horacehoff/knowledge-quantify",
            lang: "Python"
        },
        {
            name: "Flux",
            desc: "An experimental easy-to-use programming language written in C++",
            url: "https://github.com/horacehoff/flux",
            lang: "C++"
        },
        {
            name: "DOUBLE16",
            desc: "A code marketplace made for buying and selling code snippets",
            url: "https://github.com/horacehoff/double16",
            lang: "Vite/React(JS)"
        },
        {
            name: "Veber",
            desc: "An experimental digital, fully-encrypted, secure monetary system",
            url: "https://github.com/horacehoff/veber",
            lang: "Rust"
        },
        {
            name: "Neural",
            desc: "Learning platform for those who have a thirst for knowledge",
            url: "https://github.com/horacehoff/neural",
            lang: "Vite/React(JS)"
        },
        {
            name: "DigitRecon",
            desc: "A custom neural network written from scratch in Python designed to identify digits",
            url: "https://github.com/horacehoff/digit-recon",
            lang: "Python"
        },
        {
            name: "Messages To The Stars",
            desc: "Here are the majority of messages humanity has sent to outer space, hopeful that they will someday reach the ears of a distant civilization",
            url: "https://github.com/horacehoff/messages-to-the-stars",
            lang: "HTML/CSS/JS"
        },
        {
            name: "Nuclear Fusion",
            desc: "Clean energy for all of humanity",
            url: "https://github.com/horacehoff/fusion",
            lang: "Vite/React(JS)"
        },
        {
            name: "Decentra",
            desc: 'A "decentralized-ish" network system',
            url: "https://github.com/horacehoff/decentra",
            lang: "Python"
        },
        {
            name: "Nanopy",
            desc: "A console text editor which is very much inspired from nano",
            url: "https://github.com/horacehoff/nanopy",
            lang: "C++"
        },
        {
            name: "Burt",
            desc: "An incomplete minimal terminal text editor",
            url: "https://github.com/horacehoff/burt",
            lang: "Rust"
        },
        {
            name: "Focal",
            desc: "A very limited interpreted programming language",
            url: "https://github.com/horacehoff/project-focal",
            lang: "Python",
        },
        {
            name: "Ada",
            desc: "A decentralized web-app that allows anyone to share anything",
            url: "https://github.com/horacehoff/ada",
            lang: "Svelte(JS)",
        },
        {
            name: "Devshop",
            desc: "An online (but free, at the moment) marketplace that allows anyone to buy, use, or sell code, whether it be full programs/projects (packages) or code snippets",
            url: "https://github.com/horacehoff/devshop",
            lang: "Vite/React(JS)",
        },
        {
            name: "Filtered Glitches",
            desc: "A python script that radically transforms images with extreme filters (tried doing NFTs)",
            url: "https://github.com/horacehoff/filtered-glitches",
            lang: "Python",
        },
        {
            name: "Worm Virus",
            desc: "An example Worm Virus (for educational purposes)",
            url: "https://github.com/horacehoff/worm-virus",
            lang: "Python"
        },
        {
            name: "Wintrace",
            desc: "Website/script to get information about any IP",
            url: "https://github.com/horacehoff/wintrace",
            lang: "HTML/CSS/JS/Python"
        },
        {
            name: "Mango Engine",
            desc: "A small ASCII graphics engine",
            url: "https://github.com/horacehoff/mango-engine",
            lang: "C++"
        },
        {
            name: "Sah",
            desc: "An abandoned programming language that was meant to be performant",
            url: "https://github.com/horacehoff/sah",
            lang: "Python"
        },
        {
            name:"CubicTerrainGen",
            desc:"An Unreal Engine 5 project that generates minecraft-like terrain using sine waves",
            url: "https://github.com/horacehoff/CubicTerrainGen",
            lang: "Blueprint"
        },
        {
            name: "Colored Python",
            desc: "A super-lightweight python module to print colored text to the terminal easily",
            url: "https://github.com/horacehoff/coloredpython",
            lang: "Python"
        },
        {
            name: "Mango",
            desc: "A half-complete programming language written with ease of use in mind",
            url: "https://github.com/horacehoff/mango",
            lang: "Python"
        },
        {
            name: "Pass-Gen",
            desc: "A tiny password generator",
            url: "https://github.com/horacehoff/pass-gen",
            lang: "C++/Python"
        },
        {
            name: "Ball Madness",
            desc: "An open-source retro platformer developed in Unreal Engine",
            url: "https://github.com/horacehoff/ball-madness",
            lang: "Blueprint"
        },
        {
            name: "Fabric Mod Generator",
            desc: "A minecraft modding program that generates a starter fabric mod for you to start modding right away",
            url: "https://github.com/horacehoff/fabricmodgenerator",
            lang: "Python"
        },
        {
            name: "Mosk",
            desc: "A Minecraft mod project which aims at improving the game in a vanilla-like way",
            url: "https://github.com/horacehoff/mosk",
            lang: "Java"
        },
        {
            name: "Volcanic Evolution (5K+ downloads)",
            desc: "A minecraft mod that adds more armors/weapons/ores",
            url: "https://www.curseforge.com/minecraft/mc-mods/volcanic-evolution",
            lang: "Java"
        },
        {
            name: "Simpler Options (6K+ downloads)",
            desc: "A minecraft mod that simplifies complex mod settings to make them as Vanilla-like as possible",
            url: "https://www.curseforge.com/minecraft/mc-mods/simpler-options",
            lang: "Java"
        },
        {
            name: "Unrestrict",
            desc: "A minecraft mod that removes the new controversial reporting features introduced by Mojang in 1.19.1",
            url: "https://github.com/horacehoff/unrestrict",
            lang: "Java"
        },
        {
            name: "Dreams",
            desc: "A minecraft mod that adds an aether-like 'Dreams' dimension",
            url: "https://github.com/horacehoff/Dreams",
            lang: "Java"
        },
        {
            name: "Vertical Slabs",
            desc: "A minecraft mod that adds vertical slabs",
            url: "https://github.com/horacehoff/VerticalSlabs",
            lang: "Java"
        },
        {
            name: "This website",
            desc: "(I needed affffnother project so that the total number would be even)",
            lang: "Vite/React(JS)"
        }
    ]

    function slowScroll(id, duration) {
        const element = document.getElementById(id);
        const maxScroll = element.scrollWidth - element.clientWidth;
        const startTime = performance.now();

        function easeInOutQuad(x) {
            return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
        }

        function addScroll(currentTime) {
            const progress = ((currentTime - startTime) % (2 * duration)) / duration;
            const easedProgress = easeInOutQuad(progress % 1);

            if (progress < 1) {
                element.scrollLeft = maxScroll * easedProgress;
            } else {
                element.scrollLeft = maxScroll * (1 - easedProgress);
            }

            requestAnimationFrame(addScroll);
        }

        requestAnimationFrame(addScroll);
    }




    function WordCount(str) {
        return str.split(' ')
            .filter(function(n) { return n !== '' })
            .length;
    }

    function rotateBg() {
        setTimeout(() => {
            document.querySelector(".bg:nth-of-type(2)").style.opacity = 1
            document.querySelector(".bg:first-of-type").style.opacity = 0
            setTimeout(() => {
                document.querySelector(".bg:nth-of-type(3)").style.opacity = 1
                document.querySelector(".bg:nth-of-type(2)").style.opacity = 0
                setTimeout(() => {
                    document.querySelector(".bg:nth-of-type(4)").style.opacity = 1
                    document.querySelector(".bg:nth-of-type(3)").style.opacity = 0
                    setTimeout(() => {
                        document.querySelector(".bg:nth-of-type(1)").style.opacity = 1
                        document.querySelector(".bg:nth-of-type(4)").style.opacity = 0
                        rotateBg()
                    }, 5000)
                }, 5000)
            }, 5000)
        },5000)

    }

    useEffect(() => {
        document.querySelectorAll('.scrolling-text').forEach(element => {
            // let elem = document.getElementById(element.id)
            // if (element.scrollWidth < element.innerWidth) {
            //     console.log("overflows")
                slowScroll(element.id, WordCount(document.getElementById(element.id).innerText) / 2 * 1000); // 3 seconds scroll duration
            // }
        });

        rotateBg();


    }, [])

  return (
      <>
          <img className="bg" decoding="async" loading="lazy" src={Saturn} alt="Saturn"/>
          <img className="bg" decoding="async" loading="lazy" src={Moon} alt="The surface of the Moon"/>
          <img className="bg" decoding="async" loading="lazy" src={Roadster} alt="A Tesla Roadster in space"/>
          <img className="bg" decoding="async" loading="lazy" src={Earthrise} alt="Earthrise"/>
          <pre ref={asciiTextRef} id="testpre"></pre>
          <a className="cta" id="cta-mail" href="mailto:horace.hoff@gmail.com" target="_blank"><span
              className="emojifix" style={{
              position: "relative",
              marginRight: "6px"
          }}>✉️</span>Contact me</a>
          <a className="cta" id="cta-github" href="https://github.com/horacehoff" target="_blank"
             style={{marginLeft: "13px"}}>
              <svg width="24px" height="24px" strokeWidth="1.9" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg" color="white">
                  <path
                      d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
                      stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#fff" strokeWidth="1.9"
                        strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              GitHub</a>
          <a className="cta" id="cta-linkedin" href="https://www.linkedin.com/in/horace-hoff/" target="_blank"
             style={{marginLeft: "15px"}}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 72 72" width="24px"
                   className="cta-linkedin">
                  <g fill="none" fillRule="evenodd">
                      <path
                          d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                          fill="#007EBB"/>
                      <path
                          d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                          fill="#FFF"/>
                  </g>
              </svg>
              LinkedIn</a>
          <br/><br/>
          <h1>Hi, I'm Horace.</h1>
          <h2>I love imagining and creating rockets, robots, programs, and websites. I'm passionate about space, coding,
              technology, math, physics, and sometimes skateboarding.</h2>
          <h3>(Most of) My projects:</h3>
          {/*{*/}
          {/*    ["C++","Python","Java","Javascript","Rust","Blueprint","HTML/CSS"].map((data, ind) =>*/}
          {/*        <>*/}
          {/*          <span className="project-lang" id={"lang"+ind} onClick={() => {*/}
          {/*              let elem = document.getElementById("lang"+ind)*/}
          {/*              if (elem.style.filter === "brightness(0.4)") {*/}
          {/*                  document.getElementById("lang"+ind).style.filter = null*/}
          {/*              } else {*/}
          {/*                  document.getElementById("lang"+ind).style.filter = "brightness(0.4)"*/}
          {/*              }*/}
          {/*          }}>{data}</span>*/}
          {/*        </>*/}
          {/*    )*/}
          {/*}*/}

          <ul className="projects">
              {
                  repositories.map((data, index) =>
                      <>
                          <li key={index}>
                              <a href={data.url} target="_blank" title={data.name}>
                                  <h4>{data.name} <span>{data.lang}</span></h4>
                                  <h5 id={index} className="no-scrollbar scrolling-text">{data.desc}</h5>
                              </a>
                          </li>
                      </>
                  )
              }
          </ul>

      </>
          )
          }

          export default Home