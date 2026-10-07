import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Hero } from "@/components/Hero";
import { ProjectEntry } from "@/components/ProjectEntry";

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
                  title="Leap Clash"
                  description="A browser-based multiplayer platform battle built with Node.js, Express.js, Socket.io, and Phaser.js. Players compete in real-time 1v1 matches as procedurally generated platforms shift beneath them, forcing quick reactions and skillful timing. The game features multiple platform variations with unique behaviors, creating a fast, dynamic, and replayable experience."
                  stack={["Node.js", "Express.js", "Socket.io", "Phaser.js"]}
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
