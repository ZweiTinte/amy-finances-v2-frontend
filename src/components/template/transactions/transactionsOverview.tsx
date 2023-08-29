import * as React from "react";
import TransactionSidebarRight from "./transactionSidebarRight";
import Transactions from "./transactions";

const TransactionsOverview = ({
  accounts,
  transactions,
  categories,
}: {
  accounts?: Account[];
  transactions?: Transaction[];
  categories?: Category[];
}) => {
  const [filteredTransactions, setFilteredTransactions] = React.useState<
    Transaction[]
  >(transactions || []);
  const [filtered, setFiltered] = React.useState<boolean>(false);
  const [totalBalance, setTotalBalance] = React.useState<number>(0);

  React.useEffect(() => {
    let total = 0;
    filteredTransactions.forEach((trans) => {
      total += trans.amount;
    });
    setTotalBalance(total);
  }, [filteredTransactions]);

  return (
    <>
      {transactions && accounts && (
        <>
          {filtered && (
            <Transactions
              transactions={
                transactions.length > 1
                  ? filteredTransactions.sort((a, b) => {
                      return Date.parse(a.date) - Date.parse(b.date);
                    })
                  : transactions
              }
              accounts={accounts}
              totalBalance={totalBalance}
              categories={
                categories?.map((c) => {
                  return { id: c.id, value: c.name };
                }) || []
              }
            />
          )}
          <TransactionSidebarRight
            transactions={transactions}
            accounts={accounts.map((account) => {
              return { id: account.id, value: account.name };
            })}
            setFilteredTransactions={setFilteredTransactions}
            categories={
              categories?.map((c) => {
                return { id: c.id, value: c.name };
              }) || []
            }
            setFiltered={setFiltered}
          />
        </>
      )}
    </>
  );
};

export default TransactionsOverview;
