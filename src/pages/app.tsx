import React, { useEffect, useState } from "react";
import { Router } from "@gatsbyjs/reach-router";
import { isLoggedIn } from "../auth/auth";
import IndexPage from ".";
import Accounts from "../components/template/accounts/accounts";
import PrivateRoute from "../components/privateRoute";
import NotFoundPage from "./notFound";
import NewAccount from "../components/template/accounts/newAccount";
import EditAccount from "../components/template/accounts/editAccount";

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
          <PrivateRoute path="/app/accounts/new" component={NewAccount} />
          <PrivateRoute path="/app/accounts/:id" component={EditAccount} />
          {!isLoggedIn() && <IndexPage path="/" />}
          <NotFoundPage default />
        </Router>
      )}
    </>
  );
}
