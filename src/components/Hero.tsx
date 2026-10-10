import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { iconSelect } from "@/components/Footer";

interface SocialLink {
  id: number;
  href: string;
  text: string;
  external: boolean;
}

const socialLinks: SocialLink[] = [
  {
    id: 15,
    href: "https://github.com/onlynoer",
    text: "GitHub",
    external: true,
  },
  {
    id: 15,
    href: "https://www.linkedin.com/in/noe-rios-6855693bb",
    text: "LinkedIn",
    external: true,
  },
]


export function Hero() {
  return (
    <Container className="flex flex-wrap ">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-main-text lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            Onlynoer
          </h1>
          <p className="py-5 text-xl leading-normal text-main-other-text lg:text-xl xl:text-2xl">
            Hey! I'm Onlynoer, I love developing new things.
          </p>

          <div className="flex flex-col items-start space-y-3"> {/*sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row */}
            <Link
              href="/#projects"
              target="_self"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-main-other-text bg-main-bg-secondary hover:shadow-md hover:text-main-secondary rounded-md"
            >
              view my work
            </Link>
            {/* Social/Contact Icons Should go under view my work*/}

            <div className="flex items-center gap-4 text-main-other-text">
              {socialLinks.map((link) => (
                <div key={link.href} className="transition-transform hover:scale-[1.1]">
                  <span className="sr-only">{link.text}</span>
                  {iconSelect(link, "2.5rem")}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full lg:w-1/2">
        {/* 616 616 */}
        {/* img */}
      </div>
    </Container>
  );
}
