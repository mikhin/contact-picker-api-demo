import React from "react";

interface Props {
  title: string;
  titleColor: string;
  children: React.ReactNode;
  isDisabled?: boolean;
}

const PageSection = ({
  title,
  titleColor,
  children,
  isDisabled,
}: Props): JSX.Element => {
  return (
    <section
      className={`relative flex min-h-[150px] flex-col items-center justify-start lg:min-h-[200px] lg:pb-14 ${
        isDisabled === true ? "pointer-events-none select-none" : ""
      }`}
    >
      <h2
        className={`pointer-events-none absolute top-0 select-none font-display text-[180px] uppercase leading-[150px] lg:text-[250px] lg:leading-[200px]
          ${isDisabled === true ? "text-gray" : titleColor}
        `}
      >
        {title}
      </h2>

      <div className="z-1 relative mt-8 w-full px-4 lg:mt-14">{children}</div>
    </section>
  );
};

export default PageSection;
