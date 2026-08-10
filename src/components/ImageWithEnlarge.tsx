'use client'

import { ArrowsPointingInIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface ImageWEnlargeProps extends React.ComponentProps<typeof Image> {
    className?: string;
}

export function ImageWEnlarge(props: Readonly<ImageWEnlargeProps>) {
  const {
    className,
    style,
    ...imageProps
  } = props;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const syncFullscreenState = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };

    document.addEventListener("fullscreenchange", syncFullscreenState);
    syncFullscreenState();

    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreenState);
    };
  }, []);

  const toggleFullscreen = async () => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    if (document.fullscreenElement === node) {
      await document.exitFullscreen();
      return;
    }

    await node.requestFullscreen();
  };

  return (
    <div
      ref={containerRef}
      className={`${className ?? ""} group relative overflow-hidden ${isFullscreen ? "flex items-center justify-center rounded-none bg-mainBgSecondary/20" : ""}`}
    >
      <div className="hidden group-hover:block absolute scale-75 top-0 left-0 gap-2 rounded-full bg-black/55 p-1 text-white shadow-lg backdrop-blur-md">
        <button
          type="button"
          onClick={toggleFullscreen}
          className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? <ArrowsPointingInIcon className="h-5 w-5" /> : <ArrowsPointingOutIcon className="h-5 w-5"/>} {/* <ArrowsPointingInIcon className="h-5 w-5" /> */}
        </button>
      </div>

      <Image
        {...imageProps}
      />
    </div>
  );
}