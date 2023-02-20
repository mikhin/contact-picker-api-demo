import React from "react";
import PageSection from "../PageSection/PageSection";

const HomePage = (): JSX.Element => {
  return (
    <ul className="grid lg:grid-cols-2">
      <li className="mb-12">
        <PageSection title="Sorry" titleColor="text-pink" />
      </li>
      <li className="mb-12">
        <PageSection title="Money" titleColor="text-yellow" />
      </li>
      <li className="mb-12">
        <PageSection title="People" titleColor="text-green" />
      </li>
      <li>
        <PageSection title="Settings" titleColor="text-turquoise" />
      </li>
    </ul>
  );
};

export default HomePage;
