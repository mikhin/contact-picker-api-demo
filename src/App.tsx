import "./index.css";

import React from "react";

import HomePage from "./components/HomePage/HomePage";
import Layout from "./components/Layout/Layout";

export function App(): JSX.Element {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
