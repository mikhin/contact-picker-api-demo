import React from "react";

interface Props {
  title: string;
  titleColor: string;
}

const PageSection = ({ title, titleColor }: Props): JSX.Element => {
  return (
    <section className="flex justify-center">
      <h2
        className={`font-display uppercase text-[180px] leading-[144px] ${titleColor}`}
      >
        {title}
      </h2>
    </section>
  );
};

export default PageSection;
