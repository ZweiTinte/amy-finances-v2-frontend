import * as React from "react";
import NewDividend from "./newDividend";
import EditDividendFetching from "./editDividendFetching";
import { useParams } from "@gatsbyjs/reach-router";

const DividendForms = ({
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
            <EditDividendFetching
              accounts={accounts.map((account) => {
                return { id: account.id, value: account.name };
              })}
              stocks={stocks}
              id={id}
            />
          ) : (
            <NewDividend
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

export default DividendForms;
