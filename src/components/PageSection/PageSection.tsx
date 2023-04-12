import React from "react";

interface Props {
  icon: string;
  children: React.ReactNode;
  isDisabled?: boolean;
  minHeight: number;
}

const PageSection = ({
  children,
  isDisabled,
  icon,
  minHeight,
}: Props): JSX.Element => {
  return (
    <section
      className={`relative pt-[1px] ${
        isDisabled === true ? "pointer-events-none select-none" : ""
      }`}
      style={{
        minHeight: `${minHeight}px`,
      }}
    >
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 transform ${
          isDisabled === true ? "grayscale" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: icon }}
      />

      <div className="z-1 relative w-full lg:px-8">{children}</div>
    </section>
  );
};

export default PageSection;
