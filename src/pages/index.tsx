import { RouteComponentProps } from "@gatsbyjs/reach-router";
import * as React from "react";
import { isLoggedIn } from "../auth/auth";
import { navigate } from "gatsby";

const IndexPage = ({}: RouteComponentProps) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  if (isLoggedIn()) {
    navigate("/app/accounts");
    return null;
  }

  return <></>;
};

export default IndexPage;
