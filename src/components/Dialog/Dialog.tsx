import { DialogContent, DialogOverlay } from "@reach/dialog";
import * as React from "react";

interface DialogProps {
  children: React.ReactNode;
  label: string;
  opened: boolean;
  onClose: () => void;
}

const Dialog = ({
  children,
  label,
  opened,
  onClose,
}: DialogProps): JSX.Element => {
  return (
    <DialogOverlay
      className="fixed inset-0 z-50 flex h-full w-full flex-col overflow-auto bg-slate-50 bg-opacity-70 px-4 py-20"
      isOpen={opened}
      onDismiss={onClose}
    >
      <DialogContent
        aria-label={label}
        className="relative mx-auto max-w-[480px] overflow-y-auto border-[3px] bg-white p-4 outline-none"
      >
        <button
          onClick={onClose}
          className="interactive absolute top-0 right-0 mt-2 mr-3 p-1 hover:opacity-70"
        >
          CLOSE
        </button>
        {children}
      </DialogContent>
    </DialogOverlay>
  );
};

export default Dialog;
