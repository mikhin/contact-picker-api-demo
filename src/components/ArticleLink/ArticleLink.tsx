import React from "react";

import externalLinkIcon from "../../assets/images/external-link.svg";

const ArticleLink = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <a
        href="https://evilmartians.com/chronicles/dont-wait-lets-use-browser-contact-picker-api-now"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundImage: `url('${externalLinkIcon}')` }}
        className="block border-2 bg-[right_24px_center] bg-no-repeat py-4 pr-14 pl-6 text-xl outline-2 outline-offset-[6px] outline-black hover:opacity-70"
      >
        Don&apos;t wait, let&apos;s use the browser Contact Picker API now
      </a>
    </div>
  );
};

export default ArticleLink;
