import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../auth/auth";
import { navigate } from "gatsby";
import SidebarLeft from "./template/sidebarLeft";
import { RouteComponentProps } from "@gatsbyjs/reach-router";
import TransactionFetching from "./template/transactionFetching";
import OrdersFetching from "./template/ordersFetching";
import StocksFetching from "./template/stocksFetching";
import AccountsFetching from "./template/accountsFetching";
import DividendsFetching from "./template/dividendsFetching";

interface PrivateRouteProps extends RouteComponentProps {
  component: React.FC<any>;
  data?: JSON;
}

export default function PrivateRoute({
  component: Component,
  location,
  data,
  ...rest
}: PrivateRouteProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/");
    } else {
      setIsClient(true);
    }
  }, []);
  return (
    <>
      {isClient && (
        <>
          <SidebarLeft />
          <TransactionFetching>
            <OrdersFetching>
              <StocksFetching>
                <AccountsFetching>
                  <DividendsFetching>
                    <Component data={data} />
                  </DividendsFetching>
                </AccountsFetching>
              </StocksFetching>
            </OrdersFetching>
          </TransactionFetching>
        </>
      )}
    </>
  );
}
