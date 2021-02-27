import { isLoggedInVar } from "common/apollo";
import { Layout } from "components/layout";
import React from "react";

export const Login = () => {
  return (
    <Layout title="Login">
      <button onClick={() => isLoggedInVar(true)}>Login</button>
    </Layout>
  );
};
