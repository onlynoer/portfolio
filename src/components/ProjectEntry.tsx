"use client";

import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";

interface ProjectImage {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
}

interface ProjectEntryProps {
  title: string;
  description: string;
  stack: string[];
  images: ProjectImage[];
  githubUrl?: string;
  Urls?: string[];
  imageSide?: "left" | "right";
}

export function ProjectEntry({
  title,
  description,
  stack,
  images,
  githubUrl,
  Urls,
  imageSide = "left",
}: Readonly<ProjectEntryProps>) {
  const [activeImage, setActiveImage] = useState(0);
  const hasMultipleImages = images.length > 1;
  const imageOrder = imageSide === "left" ? "md:order-1" : "md:order-2";
  const informationOrder = imageSide === "left" ? "md:order-2" : "md:order-1";

  function showPreviousImage() {
    setActiveImage((currentImage) => (currentImage - 1 + images.length) % images.length);
  }

  function showNextImage() {
    setActiveImage((currentImage) => (currentImage + 1) % images.length);
  }

  if (images.length === 0) return null;

  return (
    <article className="grid items-center gap-6 rounded-xl border-2 border-main-primary bg-main-surface-secondary p-5 text-left transition-colors hover:border-main-secondary md:grid-cols-2 hover:scale-[1.01]">
      <div className={`relative aspect-video overflow-hidden rounded-lg ${imageOrder}`}>
        <Image
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          fill
          // sizes="(min-width: 768px) 50vw, 100vw"
          className={images[activeImage].fit === "contain" ? "object-contain" : "object-cover"}
          loading="lazy"
        />

        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="Show previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full border border-main-primary bg-main-bg/80 px-3 py-2 text-xl leading-none text-main-text hover:border-main-secondary"
            >
              <span aria-hidden="true">&#8592;</span>
            </button>
            <button
              type="button"
              onClick={showNextImage}
              aria-label="Show next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full border border-main-primary bg-main-bg/80 px-3 py-2 text-xl leading-none text-main-text hover:border-main-secondary"
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
              {images.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show image ${index + 1} of ${images.length}`}
                  aria-current={index === activeImage ? "true" : undefined}
                  className={`size-3 rounded-full border-2 ${index === activeImage ? "border-main-secondary bg-main-secondary" : "border-main-primary bg-main-bg/70"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className={`flex flex-col gap-3 ${informationOrder}`}>
        {/* TITLE */}
        <h3 className="text-2xl font-bold">{title}</h3>
        {/* DESCRIPTION */}
        <p className="text-main-other-text">{description}</p>
        {/* STACK */}
        <ul className="flex flex-wrap gap-2" aria-label="stack">
          {stack.map((technology) => (
            <li
              key={technology}
              className="rounded-xl border-2 border-main-accent p-1 font-bold"
            >
              {technology}
            </li>
          ))}
        </ul>
        {(githubUrl || Urls) && (
          <div className="flex items-center gap-3">
            {githubUrl && (
              <SocialIcon
                network="github"
                url={githubUrl}
                label="GitHub repository"
                title="GitHub repository"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: "2rem", height: "2rem" }}
                // className="w-8 h-8 size-8"
              />
            )}
            
            {Urls && Urls.length > 0 &&
              Urls?.map((url, index) => (
                <a
                  key={index}
                  href={url}
                  aria-label="Project Link"
                  title="Project Link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-8 items-center justify-center text-main-text transition-colors hover:text-main-secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
                  </svg>
                </a>
              ))}
          </div>
        )}
      </div>
    </article>
  );
}