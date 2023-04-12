import React, { type MouseEvent, useCallback } from "react";

import ActivationTip from "../ActivationTip/ActivationTip";
import Dialog from "../Dialog/Dialog";

const ApiNotAvailableMessage = (): JSX.Element => {
  const [opened, setIsModalOpen] = React.useState(false);

  const handleHelpClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      setIsModalOpen(true);
    },
    []
  );

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <p className="block border-2 py-4 px-6 text-xl outline-2 outline-offset-[6px] outline-black">
        This browser doesn’t support the Contact Picker API, which required for
        this demo.{" "}
        <a
          className="underline decoration-dashed outline-2 outline-offset-[3px] outline-black"
          href="#how-to-activate"
          onClick={handleHelpClick}
        >
          How to activate?
        </a>
      </p>
      <Dialog
        opened={opened}
        onClose={handleClose}
        label="How to activate the contact picker api"
      >
        <ActivationTip />
      </Dialog>
    </>
  );
};

export default ApiNotAvailableMessage;
