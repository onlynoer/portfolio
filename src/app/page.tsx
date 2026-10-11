import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Hero } from "@/components/Hero";
import { ProjectEntry } from "@/components/ProjectEntry";
import type { IconType } from "react-icons";
import { FaCss } from "react-icons/fa6";
import { FaHtml5, FaJs, FaDocker, FaUnity, FaPython, FaReact, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { DiNginx, DiNodejs } from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiFastapi, SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

interface Skill {
  name: string;
  icon: IconType | ReactNode;
}

const cLogoPath =
  "M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11z";
const cSharpHexagonPath =
  "M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91z";
const cSharpLetterPath =
  "M12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11z";

const skills: Skill[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss },
  { name: "JavaScript", icon: FaJs },
  { name: "Nginx", icon: DiNginx },
  { name: "Docker", icon: FaDocker },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: DiNodejs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "Visual Studio Code", icon: VscVscode },
  { name: "Unity", icon: FaUnity },
  { name: "CPlusPlus", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>C++</title><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/></svg>},
  { name: "C", icon:  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <title>C</title> <path d={cLogoPath} /> </svg> },
  { name: "CSharp", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <title>C#</title> <path d={cSharpHexagonPath} className="fill-white transition-colors group-hover:fill-main-accent"/> <path d={cSharpLetterPath} fill="black" /> <path d="m19.2 9.7-.8 4.6m3.1-4.6-.8 4.6m-3.8-3.1h4.7m-5.2 2h4.7" fill="none" stroke="black" strokeLinecap="square" strokeWidth="1.1" /> </svg> },
  { name: "Python", icon: FaPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "React", icon: FaReact },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Figma", icon: FaFigma },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: BiLogoPostgresql }
];

function getSkillRows<T,>(items: T[]): T[][] {
  let rowSize = 1;
  while ((rowSize * (rowSize + 1)) / 2 < items.length) {
    rowSize += 1;
  }

  const rows: T[][] = [];
  let remainingItems = items.length;
  let startIndex = 0;

  while (remainingItems > 0) {
    const currentRowSize = Math.min(rowSize, remainingItems);
    rows.push(items.slice(startIndex, startIndex + currentRowSize));
    startIndex += currentRowSize;
    remainingItems -= currentRowSize;
    rowSize -= 1;
  }

  return rows;
}

//home page

export default function Home() {
  return (
    <Container>
      <Hero/>
      <div className="w-full">
        <div className="max-w-7xl mx-auto">
          <section>
            {/* <Heading data={headingData}>
            </Heading> */}
            <Heading data={{preHeading: "Info", heading: "Site in development!", subText: ""}} className="text-center" />

            <Heading data={projectsData} className="text-center" id="projects">

              <div className="flex flex-col gap-10 pt-10">
                <ProjectEntry
                  title="DRI Light Scattering Database"
                  description="A research website for the Desert Research Institute to showcase particle light-scattering data and publications. Researchers manage content through Strapi, while visitors can browse sample tables and detailed, dynamically generated sample pages. The site also includes searchable publications and an interactive Mie scattering tool: users adjust experiment parameters, Python calculations are served through FastAPI, and Plotly visualizes the results. Deployed in Docker containers on a DRI virtual server, with Nginx handling reverse proxying."
                  stack={["Next.js", "Python", "Nginx", "MySQL", "Docker", "FastAPI"]}
                  images={[
                    {
                      src: "/portfolio/imgs/lightscatter_home_light.png",
                      alt: "DRI Light Scattering Homepage",
                      fit: "contain",
                    }
                  ]}
                  imageSide="right"
                  Urls={["https://lightscatter.dri.edu"]}
                />

                <ProjectEntry
                  title="Leap Clash"
                  description="A browser-based multiplayer platform battle built with Node.js, Express.js, Socket.io, and Phaser.js. Players compete in real-time 1v1 matches as procedurally generated platforms shift beneath them, forcing quick reactions and skillful timing. The game features multiple platform variations with unique behaviors, creating a fast, dynamic, and replayable experience."
                  stack={["Node.js", "Express.js", "Socket.io", "Networking", "Phaser.js"]}
                  images={[
                    {
                      src: "/portfolio/imgs/leap_clash_thumbnail.png",
                      alt: "Leap Clash game project thumbnail",
                    }
                  ]}
                  imageSide="left"
                  githubUrl="https://github.com/onlynoer/leap-clash"
                  Urls={[]}
                />

                <ProjectEntry
                  title="ChickPress Co-Op"
                  description="A 3D multiplayer game prototype built in C++ using raylib for rendering and Asio for networking. The project features a custom ECS-based architecture, player movement and physics systems, interactive arena gameplay, and networked co-op play where players can compete or coordinate in a shared environment. I designed and implemented core gameplay systems including entity/component logic, kinematics, camera/rendering, and game state management while creating a polished, playable prototype focused on responsiveness and multiplayer interaction."
                  stack={["C++", "Raylib", "Asio", "Networking", "ECS"]}
                  images={[
                    {
                      src: "/portfolio/imgs/chickpress_join_screen.png",
                      alt: "ChickPress Co-Op Join Screen.",
                    },
                    {
                      src: "/portfolio/imgs/chickpress_gameplay.png",
                      alt: "ChickPress Co-Op gameplay.",
                    }
                  ]}
                  imageSide="right"
                  githubUrl="https://github.com/onlynoer/ChickPress-Co-Op"
                />
              </div>
            </Heading>

            <Heading data={{preHeading: "Toolkits", heading: "Skills", subText: ""}} className="text-center pt-10" id="Skills">
              <div className="flex flex-col items-center gap-5 pt-10">
                {getSkillRows(skills).map((row, rowIndex) => (
                  <div key={rowIndex} className="flex justify-center gap-2">
                    
                    {row.map(({ name, icon }) => {
                      const Icon = icon;

                      return (
                        <div
                          key={name}
                          className="group flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-[1.5] hover:text-main-accent bg-main-surface-secondary p-1 rounded-lg border-2 border-main-accent-bright"
                          title={name}
                        >
                          {typeof Icon === "function" ? (
                            <Icon className="h-8 w-8" aria-label={name} title={name} />
                          ) : (
                            <span className="flex h-8 w-8 items-center justify-center [&>svg]:h-8 [&>svg]:w-8 [&>svg]:fill-current">
                              {Icon}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </Heading>
          </section>
        </div>
      </div>
    </Container>
  );
}

const headingData = {
  preHeading: "about",
  heading: "Introduction",
  subText: ""
}

const projectsData = {
  preHeading: "Creations",
  heading: "Projects",
  subText: ""
}
