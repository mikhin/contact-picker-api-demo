import React from "react";

interface Props {
  title: string;
  titleColor: string;
  children: React.ReactNode;
}

const PageSection = ({ title, titleColor, children }: Props): JSX.Element => {
  return (
    <section className="relative flex flex-col items-center justify-center">
      <h2
        className={`pointer-events-none absolute top-0 select-none font-display text-[180px] uppercase leading-[144px] ${titleColor}`}
      >
        {title}
      </h2>

      <div className="relative z-10 w-full px-4 pt-12">{children}</div>
    </section>
  );
};

export default PageSection;
