import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

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
            <Heading data={projectsData} className="text-center" id="projects">
              <div className="flex flex-wrap gap-10 pt-10">
                <div className="bg-main-surface-secondary p-5 rounded-xl text-left grayscale border-main-primary border-2 hover:filter-none hover:scale-[1.01] hover:border-main-secondary">
                  <Image 
                    src={"/portfolio/imgs/leap_clash_thumbnail.png"}
                    alt=""
                    width={512}
                    height={512}
                    loading="lazy"
                    />

                  <h2 className="p-2 items-start font-bold">
                    Leap Clash
                  </h2>
                  <p className="p-2 text-main-other-text">
                    A multiplayer online game built with Node.js, Express.js, Socket.io, and Phaser.js. Players can join a game room and compete against each other in real-time.
                    More to come.
                  </p>
                  
                  <div className="p-2 flex flex-wrap gap-2 justify-center">
                    <div className="flex font-bold border-2 p-1 border-main-accent rounded-xl">
                      Node.js
                    </div>
                    <div className="flex font-bold border-2 p-1 border-main-accent rounded-xl">
                      Express.js
                    </div>
                    <div className="flex gap-2 items-center justify-center font-bold border-2 p-1 border-main-accent rounded-xl">
                      Socket.io
                      {/* <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5 h-5">
                        <g fill="#010101" fillRule="evenodd">
                          <path
                            d="M63.951.001C28.696.001.001 28.696.001 63.951s28.695 63.95 63.95 63.95 63.95-28.695 63.95-63.95S99.206.001 63.95.001zm0 10.679c29.484 0 53.272 23.787 53.272 53.271 0 29.485-23.788 53.272-53.272 53.272-29.484 0-53.272-23.787-53.272-53.272 0-29.484 23.788-53.271 53.272-53.271z"
                            fillRule="nonzero"
                          />
                          <path d="M48.39 60.716c14.004-11.44 27.702-23.278 42.011-34.384-7.505 11.533-15.224 22.913-22.729 34.445-6.437.03-12.875.03-19.282-.061zM60.228 67.092c6.468 0 12.905 0 19.342.092-14.095 11.38-27.732 23.309-42.071 34.384 7.505-11.533 15.224-22.943 22.729-34.476z" />
                        </g>
                      </svg> */}
                    </div>
                    <div className="flex font-bold border-2 p-1 border-main-accent rounded-xl">
                      Phaser.js
                    </div>
                  </div>
                </div>
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
