import React from "react";

interface HeadingrProps {
    data: {
        preHeading?: string;
        heading: string;
        subText?: string;
    },
    id?: string;
    className?: string;
    contentClassName?: string;
    children?: React.ReactNode;
}

export function Heading({data, className, contentClassName, children, id}: Readonly<HeadingrProps>) {
    if(!data) return null;
    const {preHeading, heading, subText} = data;
  return (
    <section className={`mb-10 ${className ? className : ""}`} id={id ? id : ""}>
        {preHeading && (
            <p className="text-xs tracking-widest uppercase text-main-other-text mb-2">
                {preHeading}
            </p>
        )}
        <h2 className="text-xl sm:text-2xl tracking-widest uppercase text-main-text mb-2">
            {heading}
        </h2>
        {subText && (
            <h3 className="mt-4 text-main-other-text">
                {subText}
            </h3>
        )}

        <section className={`${contentClassName ?? "pl-5"} text-main-text font-normal`}>
            {children}
        </section>
    </section>
  );
}
