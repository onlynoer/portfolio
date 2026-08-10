import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Hero } from "@/components/Hero";
import Link from "next/link";

//home page

export default function Home() {
  return (
    <Container>
      {/* <ContentWithImage data={contentWithImageData}/> */}
      <Hero data={heroData}/>
      <div className="w-full">
        <div className="pt-16 max-w-6xl mx-auto">
          {/* <ContentWithImage data={contentWithImageData}/>{} */}
          <Heading data={headingData}/>
           
          <section>
            <div className="tracking-wide m-5 text-mainOtherText">
              {content.introduction}
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}

const heroData = {
  heading: "DRI - Light Scattering Database",
    text: "The Light Scattering Database is a comprehensive resource in the field of light scattering. View sample data, research papers, and more!",
    cta: {
      href: "/news",
      text: "View News",
      external: false,
    },
    image: {
      url: "img/logo.svg",
      alternativeText: "Light Scattering Database logo, a prism distributing light that has gone through it",
      name: "logo.svg"      
    }
}

const headingData = {
  preHeading: "about",
  heading: "Introduction",
  subText: ""
}

const content = {
  introduction: (
    <article>
      <p>
        Light scattering is the study of how light changes direction, intensity, phase, or polarization when it interacts with particles, molecules, droplets, surfaces, or other materials. These interactions carry information about the size, shape, concentration, composition, and optical properties of the scattering medium. From the color of the sky to the behavior of aerosols, biological cells, dust, soot, clouds, and engineered nanoparticles, light scattering provides a powerful way to observe systems that are too small, complex, or dynamic to measure directly with conventional imaging.
      </p>
      <p className="mt-5">
        The DRI Light Scattering Database is designed as a central resource for exploring, organizing, and sharing light scattering research. This site will provide access to sample data, research papers, project updates, news, and interactive tools related to our work. A major goal is to make scattering measurements and simulations easier to compare, interpret, and reuse across experiments. The database will support users who need to inspect measured scattering patterns, understand relationships between particle properties and optical response, and connect experimental observations with theoretical models.
      </p>
      <p className="mt-5">
        Light scattering has broad research applications in atmospheric science, climate studies, aerosol characterization, remote sensing, environmental monitoring, biomedical optics, material science, and optical instrument development. In aerosol and atmospheric research, scattering measurements help estimate particle size distributions, refractive indices, and radiative effects that influence visibility, air quality, and climate forcing. In laboratory and computational studies, models such as Mie scattering are used to predict how spherical particles interact with light and to evaluate how changes in wavelength, particle radius, and material properties affect scattering behavior.
      </p>
      <p className="mt-5">
        By combining data, publications, news, and interactive scattering programs in one place, this website aims to support both research and education. It is intended for students, scientists, collaborators, and anyone interested in using light as a diagnostic tool to better understand particles and materials.
      </p>
      <p className="mt-5">
        If you have any questions or are interested in our work you can view our contact information <Link href={"/contact"} className="font-semibold text-mainSecondary underline decoration-mainAccent decoration-2 underline-offset-4 transition-colors duration-150 hover:text-mainPrimary hover:decoration-mainPrimary">here</Link>.
      </p>
    </article>
  )
}
