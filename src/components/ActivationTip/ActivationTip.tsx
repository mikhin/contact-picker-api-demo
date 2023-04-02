import React from "react";

const ActivationTip = (): JSX.Element => {
  return (
    <div>
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
