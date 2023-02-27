import React from "react";
import PageSection from "../PageSection/PageSection";
import SettingsForm from "../SettingsForm/SettingsForm";

const HomePage = (): JSX.Element => {
  return (
    <ul className="grid lg:grid-cols-2">
      <li className="mb-12">
        <PageSection title="Sorry" titleColor="text-pink-100">
          <SettingsForm />
        </PageSection>
      </li>
      <li className="mb-12">
        <PageSection title="Money" titleColor="text-orange">
          <SettingsForm />
        </PageSection>
      </li>
      <li className="mb-12">
        <PageSection title="People" titleColor="text-green-100">
          <SettingsForm />
        </PageSection>
      </li>
      <li>
        <PageSection title="Settings" titleColor="text-green-200">
          <SettingsForm />
        </PageSection>
      </li>
      <li>
        <PageSection title="Article" titleColor="text-turquoise">
          <SettingsForm />
        </PageSection>
      </li>
    </ul>
  );
};

export default HomePage;
