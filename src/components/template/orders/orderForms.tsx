import * as React from "react";
import NewOrder from "./newOrder";
import EditOrderFetching from "./editOrderFetching";
import { useParams } from "@gatsbyjs/reach-router";

const OrderForms = ({
  stocks,
  accounts,
}: {
  stocks?: Stock[];
  accounts?: Account[];
}) => {
  const { id } = useParams();
  return (
    <>
      {accounts && stocks && (
        <>
          {id ? (
            <EditOrderFetching
              accounts={accounts.map((account) => {
                return { id: account.id, value: account.name };
              })}
              stocks={stocks}
              id={id}
            />
          ) : (
            <NewOrder
              accounts={accounts.map((account) => {
                return { id: account.id, value: account.name };
              })}
              stocks={stocks}
            />
          )}
        </>
      )}
    </>
  );
};

export default OrderForms;
