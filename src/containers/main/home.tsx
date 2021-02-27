import { isLoggedInVar } from "common/apollo";
import { Layout } from "components/layout";
import React from "react";

export const Home = () => {
  return (
    <Layout title="Home">
      <button onClick={() => isLoggedInVar(false)}>Loout</button>
    </Layout>
  );
};
