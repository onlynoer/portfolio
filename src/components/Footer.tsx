import React from "react";
import { SocialIcon, register } from "react-social-icons";

import Link from "next/link";

import Image from "next/image";
import { Container } from "@/components/Container";
import { FaGoogleScholar } from "react-icons/fa6";

async function loader() {
  const data = {
    footer: {
      id: 1,
      description:
        "A comprehensive resource in the field of light scattering. Providing light scattering sample data, mie scattering related data, research papers, and news!",
      logoLink: {
        id: 2,
        text: "DRI - Light Scattering Database",
        href: "/",
        image: {
          id: 1,
          url: "/img/logo.svg",
          alternativeText: "Light Scattering Database Logo",
          name: "logo.svg",
        },
      },
      colOneLinks: [
        { id: 9, href: "/", text: "Home", external: false },
        { id: 10, href: "/samples", text: "Samples", external: false },
        { id: 11, href: "/papers", text: "Papers", external: false },
        { id: 12, href: "/experimental", text: "Experimental", external: false },
        { id: 13, href: "/news", text: "News", external: false },
        { id: 14, href: "/contact", text: "Contact", external: false },
      ],
      colTwoLinks: [],
      socialLinks: {
        id: 1,
        heading: "Related Content!",
        socialLink: [
          {
            id: 14,
            href: "https://scholar.google.com/citations?user=wQ_okK0AAAAJ&hl=en",
            text: "google-scholar",
            external: true,
          },
          {
            id: 15,
            href: "https://dri.edu",
            text: "DRI",
            external: true,
          }

        ],
      },
    },
  };
  return data;
}

interface FooterData {
  footer: {
    id: number;
    description: string;
    logoLink: {
      id: number;
      text: string;
      href: string;
      image: {
        id: number;
        url: string;
        alternativeText: string | null;
        name: string;
      };
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
  const data = (await loader()) as FooterData;
  if (!data.footer) return null;
  const footer = data.footer;

  // console.dir(footer, { depth: null });
  if (!data) return null;

  const { logoLink, colOneLinks, colTwoLinks, socialLinks, description } =
    footer;
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-200 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                href={logoLink.href}
                className="flex items-center space-x-2 text-2xl font-medium text-mainPrimary" /* dark:text-gray-100 */
              >
                <Image
                  src={logoLink.image.url}
                  alt={logoLink.image.alternativeText || logoLink.image.name}
                  width={32}
                  height={32}
                  className="w-8"
                  loading="eager"
                />
                <span>{logoLink.text}</span>
              </Link>
            </div>

            {/* Description, text under the website name in footer */}
            <div className="max-w-md mt-4 text-mainOtherText"> {/* dark:text-gray-400 */}
              {description}
            </div>

            {/* This is an image below with a link */}
            {/* <div className="mt-5">
              <a
                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              >
                <Image
                  src="/img/vercel.svg"
                  alt="Powered by Vercel"
                  width="212"
                  height="44"
                />
              </a>
            </div> */}
          </div>

          {/* Nav links in column 1*/}
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {colOneLinks &&
                colOneLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="w-full px-4 py-2 text-mainOtherText rounded-md hover:text-mainSecondary focus:text-mainPrimary focus:bg-mainBgSecondary focus:outline-none" /* dark:text-gray-300 dark:focus:bg-trueGray-700 */
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
                    className="w-full px-4 py-2 text-mainOtherText rounded-md hover:text-mainSecondary focus:text-mainPrimary focus:bg-mainBgSecondary focus:outline-none" /* dark:text-gray-300 dark:focus:bg-trueGray-700 */
                  >
                    {item.text}
                  </span>
                ))}
            </div>
          </div>

          {/* Social links */}
          <div>
            <div className="text-mainText">{socialLinks.heading}</div>

            <div className="flex mt-5 space-x-5 text-mainOtherText"> {/* dark:text-gray-500 */}
              {socialLinks.socialLink &&
                socialLinks.socialLink.map((item, index) => (
                  <div key={index}>
                    <span className="sr-only">{item.text}</span>
                    {item.text == "google-scholar" ? 
                      <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      >
                        <div className="text-blue-500 bg-white dark:bg-mainBgSecondary/40 rounded-full p-2">
                        {/* <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 align-middle text-blue-500 dark:bg-mainBgSecondary/40"> */}
                          <FaGoogleScholar size={34} />
                        </div>
                      </Link>
                    : item.text == "DRI" ? 
                      <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      >
                        <Image
                          src="/img/dri_logo.svg"
                          alt="DRI Logo"
                          width={96}
                          height={42}
                          className="inline-block h-12 w-auto align-middle object-contain"
                        />
                      </Link>
                  : iconSelect(item)}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-mainOtherText"> {/* dark:text-gray-400 */}
          Copyright © 2026{new Date().getFullYear() === 2026 ? "" : `-${new Date().getFullYear()}`}. {/* Made by{" "}
          <a href="" target="_blank" rel="noopener">
            
          </a> */}
        </div>
      </Container>
    </div>
  );
}