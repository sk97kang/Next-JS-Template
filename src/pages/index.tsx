import { useReactiveVar } from "@apollo/client";

import { isLoggedInVar } from "common/apollo";

import { Home } from "containers/main/home";
import { Login } from "containers/auth/login";

function IndexPage() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <Home /> : <Login />;
}

export default IndexPage;
