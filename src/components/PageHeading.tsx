import React from "react";

interface PageHeadingrProps {
    data: {
        preHeading: string;
        heading: string;
        subText: string;
    }
}

export function PageHeading({data}: Readonly<PageHeadingrProps>) {
    if(!data) return null;
    const {preHeading, heading, subText} = data;
  return (
    <div className="mb-10">
        <p className="text-xs tracking-widest uppercase text-main-other-text mb-2">
            {preHeading}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-main-text mb-2">
            {heading}
        </h1>
        {subText && (
            <p className="mt-4 text-main-other-text">
            {subText}
        </p>
        )}
    </div>
  );
}

