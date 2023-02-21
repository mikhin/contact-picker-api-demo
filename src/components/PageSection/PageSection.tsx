import React from "react";

interface Props {
  title: string;
  titleColor: string;
  children: React.ReactNode;
}

const PageSection = ({ title, titleColor, children }: Props): JSX.Element => {
  return (
    <section className="relative flex flex-col justify-center items-center">
      <h2
        className={`absolute top-0 font-display uppercase text-[180px] leading-[144px] ${titleColor}`}
      >
        {title}
      </h2>

      <div className="relative z-10 px-4 pt-12 w-full">{children}</div>
    </section>
  );
};

export default PageSection;
