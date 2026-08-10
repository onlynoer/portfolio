import Link from "next/link";
import { DisclosureClient } from "@/components/DisclosureClient";

async function loader() {

  const data = {
    id: 1,
    title: 'Light Scattering Database (not used currently)',
    description: 'Quick access to data related to mie scattering and other light scattering data. (not used currently)',
    topnav: {
      id: 1,
      logoLink: {
        id: 1,
        text: 'DRI - Light Scattering Database',
        href: '/',
        image: {
          id: 1,
          url: '/img/logo.svg',
          alternativeText: null,
          name: 'logo.svg'
        }
      },
      link: [
        { id: 1, href: '/', text: 'Home', external: false },
        { id: 3, href: '/samples', text: 'Samples', external: false },
        { id: 4, href: '/papers', text: 'Papers', external: false },
        { id: 4, href: '/experimental', text: 'Experimental', external: false },
        { id: 5, href: '/news', text: 'News', external: false },
        { id: 2, href: '/contact', text: 'Contact', external: false }
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
      image: {
        id: number;
        url: string;
        alternativeText: string | null;
        name: string;
      };
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
                  className="inline-block px-4 py-2 text-lg font-normal text-mainText no-underline rounded-md hover:text-mainSecondary focus:text-mainPrimary focus:bg-mainBgSecondary focus:outline-none" /* dark:text-gray-200 dark:focus:bg-gray-800 */
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


