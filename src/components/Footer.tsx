import { SocialIcon } from "react-social-icons";

import Link from "next/link";

import { Container } from "@/components/Container";

const data: FooterData = {
  footer: {
    id: 1,
    description: "Portfolio of Noe Rios, a software engineer and game developer. This site contains information about my projects, skills, and experience.",
    logoLink: {
      id: 2,
      text: "Portfolio",
      href: "/",
    },
    colOneLinks: [
      { id: 9, href: "/", text: "Home", external: false },
    ],
    colTwoLinks: [],
    socialLinks: {
      id: 14,
      heading: "Related Content!",
      socialLink: [
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
      ],
    },
  },
};

interface FooterData {
  footer: {
    id: number;
    description: string;
    logoLink: {
      id: number;
      text: string;
      href: string;
    };
    colOneLinks: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    }[];
    colTwoLinks: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    }[];
    socialLinks: {
      id: number;
      heading: string;
      socialLink: SocialLink[];
    };
  };
}

interface SocialLink {
  id: number;
  href: string;
  text: string;
  external: boolean;
}

function iconSelect(link: SocialLink) {
  if (!link) return null;
  return (
    <SocialIcon
      network={link.text.toLocaleLowerCase()}
      url={link.href}
      target="_blank"
    />
  );
}

export async function Footer() {
  if (!data.footer) return null;
  const footer = data.footer;

  // console.dir(footer, { depth: null });
  if (!data) return null;

  const { logoLink, colOneLinks, colTwoLinks, socialLinks, description } =
    footer;
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-7xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-main-secondary lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                href={logoLink.href}
                className="flex items-center space-x-2 text-2xl font-medium text-main-primary"
              >
                <span>{logoLink.text}</span>
              </Link>
            </div>

            {/* Description, text under the website name in footer */}
            <div className="max-w-md mt-4 text-main-other-text">
              {description}
            </div>
          </div>

          {/* Nav links in column 1*/}
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {colOneLinks &&
                colOneLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="w-full px-4 py-2 text-main-other-text rounded-md hover:text-main-secondary focus:text-main-primary focus:bg-main-bg-secondary focus:outline-none"
                  >
                    {item.text}
                  </Link>
                ))}
            </div>
          </div>

          {/* Nav links column 2 could put some additional nav links here, maybe like sample categories */}
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {colTwoLinks &&
                colTwoLinks.map((item, index) => (
                  <span
                    key={index}
                    // href={item.href}
                    className="w-full px-4 py-2 text-main-other-text rounded-md hover:text-main-secondary focus:text-main-primary focus:bg-main-bg-secondary focus:outline-none"
                  >
                    {item.text}
                  </span>
                ))}
            </div>
          </div>

          {/* Social links */}
          <div>
            <div className="text-main-text">{socialLinks.heading}</div>

            <div className="flex mt-5 space-x-5 text-main-other-text">
              {socialLinks.socialLink &&
                socialLinks.socialLink.map((item, index) => (
                  <div key={index} className="hover:scale-[1.1]">
                    <span className="sr-only">{item.text}</span>
                    {iconSelect(item)}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-main-other-text">
          Copyright © 2025{new Date().getFullYear() === 2025 ? "" : `-${new Date().getFullYear()}`}.
          <br/>
          All Rights Reserved
        </div>
      </Container>
    </div>
  );
}