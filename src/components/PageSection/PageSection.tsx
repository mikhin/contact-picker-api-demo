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
      className={`relative flex flex-col items-center justify-center pb-8 lg:pb-14 ${
        isDisabled === true ? "pointer-events-none select-none" : ""
      }`}
    >
      <h2
        className={`pointer-events-none select-none font-display text-[180px] uppercase leading-[150px] lg:text-[250px] lg:leading-[200px]
          ${isDisabled === true ? "text-gray" : titleColor}
        `}
      >
        {title}
      </h2>

      <div className="mt-[-120px] w-full px-4 lg:mt-[-150px]">{children}</div>
    </section>
  );
};

export default PageSection;
