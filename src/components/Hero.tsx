import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";


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

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <Link
              href="/#projects"
              target="_self"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-main-other-text bg-main-bg-secondary hover:shadow-md hover:text-main-secondary rounded-md"
            >
              view my work
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full lg:w-1/2">
        {/* 616 616 */}
        
      </div>
    </Container>
  );
}
