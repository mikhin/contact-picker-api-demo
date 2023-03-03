import React from "react";
import PageSection from "../PageSection/PageSection";
import SettingsForm from "../SettingsForm/SettingsForm";
import MoneyInput from "../MoneyInput/MoneyInput";
import ArticleLink from "../ArticleLink/ArticleLink";
import ContactsList from "../ContactsList/ContactsList";
import ApiNotAvailableMessage from "../ApiNotAvailableMessage/ApiNotAvailableMessage";
import { isContactsSupported } from "../../constants";

const HomePage = (): JSX.Element => {
  return (
    <ul className="grid gap-y-6 lg:grid-cols-2 lg:gap-y-9">
      {!isContactsSupported && (
        <li className="lg:col-span-2">
          <PageSection title="Sorry" titleColor="text-pink-100">
            <ApiNotAvailableMessage />
          </PageSection>
        </li>
      )}

      <li>
        <PageSection
          title="Money"
          titleColor="text-orange"
          isDisabled={!isContactsSupported}
        >
          <MoneyInput />
        </PageSection>
      </li>
      <li>
        <PageSection
          title="People"
          titleColor="text-green-100"
          isDisabled={!isContactsSupported}
        >
          <ContactsList />
        </PageSection>
      </li>
      <li>
        <PageSection
          title="Settings"
          titleColor="text-green-200"
          isDisabled={!isContactsSupported}
        >
          <SettingsForm />
        </PageSection>
      </li>
      <li>
        <PageSection title="Article" titleColor="text-turquoise">
          <ArticleLink />
        </PageSection>
      </li>
    </ul>
  );
};

export default HomePage;
