import React from "react";

const ActivationTip = (): JSX.Element => {
  return (
    <div>
      <p className="mb-2">
        The Contact Picker API is available in Chrome 80 on Android M or later,
        as well as an experimental feature on Safari.
      </p>
      <p className="mb-4">
        Check on caniuse —{" "}
        <a
          href="https://caniuse.com/mdn-api_contactsmanager"
          target="_blank"
          rel="noopener noreferrer"
          className="underline outline-2 outline-offset-[4px] outline-black hover:opacity-70"
        >
          https://caniuse.com/mdn-api_contactsmanager
        </a>
      </p>
      <h3 className="mb-4 text-2xl">Enable in iOS Safari</h3>
      <ul className="list-disc pl-4">
        <li>Launch Settings;</li>
        <li>Scroll down to find Safari, and tap it;</li>
        <li>Scroll down to click the Advance option;</li>
        <li>Then you will see the Experimental Features and Tap it;</li>
        <li>Toggle on the Contact Picker API.</li>
      </ul>
    </div>
  );
};

export default ActivationTip;
