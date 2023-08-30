import React, { useEffect, useState } from "react";
import { Router } from "@gatsbyjs/reach-router";
import { isLoggedIn } from "../auth/auth";
import IndexPage from ".";
import Accounts from "../components/template/accounts/accounts";
import PrivateRoute from "../components/privateRoute";
import NotFoundPage from "./notFound";

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Router>
          <PrivateRoute path="/app/accounts" component={Accounts} />
          {!isLoggedIn() && <IndexPage path="/" />}
          <NotFoundPage default />
        </Router>
      )}
    </>
  );
}
