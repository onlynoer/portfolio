import Link from "next/link";
import { DisclosureClient } from "@/components/DisclosureClient";

async function loader() {

  const data = {
    id: 1,
    title: 'not used currently',
    description: 'also not used currently',
    topnav: {
      id: 1,
      logoLink: {
        id: 1,
        text: 'Portfolio',
        href: '/'
      },
      link: [
        { id: 1, href: '/', text: 'Home', external: false },
      ]
    },
    meta: {}
  }
  
  
  return data;
}

interface NavbarData {
  id: number;
  title: string;
  description: string;
  topnav: {
    id: number;
    logoLink: {
      id: number;
      text: string;
      href: string;
    };
    link: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    }[];
  };
  meta: Record<string, any>;
}

export async function Navbar() {
  const data = await loader() as NavbarData;
  if (!data) return null;
  const navigation = data.topnav.link;
  // const cta = data.topnav.cta;

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}

        <DisclosureClient topnav={data.topnav} />

        {/* Nav links  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-main-text no-underline rounded-md hover:text-main-secondary focus:text-main-primary focus:bg-main-bg-secondary focus:outline-none"
                >
                  {menu.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}


