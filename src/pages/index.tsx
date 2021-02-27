import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "common/apollo";
import { Home, Login } from "containers";

function IndexPage() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <Home /> : <Login />;
}

export default IndexPage;
