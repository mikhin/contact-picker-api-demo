import React from "react";

const ApiNotAvailableMessage = (): JSX.Element => {
  return (
    <p className="block border-2 py-4 px-6 text-xl outline-2 outline-offset-[6px] outline-black">
      This browser doesn’t support the Contact Picker API, which required for
      this demo
    </p>
  );
};

export default ApiNotAvailableMessage;
