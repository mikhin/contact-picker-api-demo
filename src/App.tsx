import React from "react";

import "./index.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";

export function App(): JSX.Element {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
