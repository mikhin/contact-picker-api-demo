import React from "react";

import articleTextImage from "../../assets/images/article.svg";
import moneyTextImage from "../../assets/images/money.svg";
import peopleTextImage from "../../assets/images/people.svg";
import settingsTextImage from "../../assets/images/settings.svg";
import sorryTextImage from "../../assets/images/sorry.svg";
import { isContactsSupported } from "../../constants";
import ApiNotAvailableMessage from "../ApiNotAvailableMessage/ApiNotAvailableMessage";
import ArticleLink from "../ArticleLink/ArticleLink";
import ContactsList from "../ContactsList/ContactsList";
import MoneyInput from "../MoneyInput/MoneyInput";
import PageSection from "../PageSection/PageSection";
import SettingsForm from "../SettingsForm/SettingsForm";

const HomePage = (): JSX.Element => {
  return (
    <ul className="grid gap-10 lg:grid-cols-2">
      {!isContactsSupported && (
        <li className="lg:col-span-2">
          <PageSection icon={sorryTextImage} minHeight={260}>
            <div className="mt-10 lg:mt-20">
              <ApiNotAvailableMessage />
            </div>
          </PageSection>
        </li>
      )}

      <li>
        <PageSection
          icon={moneyTextImage}
          isDisabled={!isContactsSupported}
          minHeight={235}
        >
          <div className="mt-16">
            <MoneyInput />
          </div>
        </PageSection>
      </li>
      <li>
        <PageSection
          icon={peopleTextImage}
          isDisabled={!isContactsSupported}
          minHeight={235}
        >
          <div className="mt-16">
            <ContactsList />
          </div>
        </PageSection>
      </li>
      <li>
        <PageSection
          icon={settingsTextImage}
          isDisabled={!isContactsSupported}
          minHeight={180}
        >
          <div className="mt-16 lg:mt-12">
            <SettingsForm />
          </div>
        </PageSection>
      </li>
      <li>
        <PageSection icon={articleTextImage} minHeight={215}>
          <div className="mt-12">
            <ArticleLink />
          </div>
        </PageSection>
      </li>
    </ul>
  );
};

export default HomePage;
