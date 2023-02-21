import React from "react";
import PageSection from "../PageSection/PageSection";
import SettingsForm from "../SettingsForm/SettingsForm";

const HomePage = (): JSX.Element => {
  return (
    <ul className="grid lg:grid-cols-2">
      <li className="mb-12">
        <PageSection title="Sorry" titleColor="text-pink">
          <SettingsForm />
        </PageSection>
      </li>
      <li className="mb-12">
        <PageSection title="Money" titleColor="text-yellow">
          <SettingsForm />
        </PageSection>
      </li>
      <li className="mb-12">
        <PageSection title="People" titleColor="text-green">
          <SettingsForm />
        </PageSection>
      </li>
      <li>
        <PageSection title="Settings" titleColor="text-turquoise">
          <SettingsForm />
        </PageSection>
      </li>
    </ul>
  );
};

export default HomePage;
