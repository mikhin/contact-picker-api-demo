import React from "react";
import externalLinkIcon from "../../assets/images/external-link.svg";

const ArticleLink = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <a
        href="https://evilmartians.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundImage: `url('${externalLinkIcon}')` }}
        className="block max-w-sm border-2 bg-[right_24px_center] bg-no-repeat py-4 pr-14 pl-6 text-xl"
      >
        How to avoid tricky async state manager pitfalls in React
      </a>
    </div>
  );
};

export default ArticleLink;
