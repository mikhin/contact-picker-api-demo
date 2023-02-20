import React from "react";
import { Toggle } from "./components/Toggle/Toggle";

import "./index.css";

export function App(): JSX.Element {
  return (
    <div>
      <Toggle label="test" onChange={() => {}} />
    </div>
  );
}
