import React from "react";

interface HeadingrProps {
    data: {
        preHeading?: string;
        heading: string;
        subText?: string;
    },
    className?: string;
    children?: React.ReactNode;
}

export function Heading({data, className, children}: Readonly<HeadingrProps>) {
    if(!data) return null;
    const {preHeading, heading, subText} = data;
  return (
    <section className={`mb-10 ${className ? className : ""}`}>
        {preHeading && (
            <p className="text-xs tracking-widest uppercase text-mainOtherText mb-2">
                {preHeading}
            </p>
        )}
        <h1 className="text-xl sm:text-2xl tracking-widest uppercase text-mainText mb-2">
            {heading}
        </h1>
        {subText && (
            <h2 className="mt-4 text-mainOtherText">
                {subText}
            </h2>
        )}

        <div className="pl-5 text-mainText font-normal">
            {children}
        </div>
    </section>
  );
}

