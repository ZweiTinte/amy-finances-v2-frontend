import React, { useEffect, useState } from "react";
import { Router } from "@gatsbyjs/reach-router";
import { isLoggedIn } from "../auth/auth";
import IndexPage from ".";
import Accounts from "../components/template/accounts/accounts";
import PrivateRoute from "../components/privateRoute";
import NotFoundPage from "./404";
import NewAccount from "../components/template/accounts/newAccount";
import EditAccount from "../components/template/accounts/editAccount";
import CategoriesOverview from "../components/template/categories/categoriesOverview";
import EditCategory from "../components/template/categories/editCategory";
import NewCategory from "../components/template/categories/newCategory";
import DividendsOverview from "../components/template/dividends/dividendsOverview";
import DividendForms from "../components/template/dividends/dividendForms";
import OrdersOverview from "../components/template/orders/ordersOverview";
import OrderForms from "../components/template/orders/orderForms";
import StocksOverview from "../components/template/stocks/stocksOverview";
import NewStock from "../components/template/stocks/newStock";
import EditStock from "../components/template/stocks/editStock";
import TransactionsOverview from "../components/template/transactions/transactionsOverview";
import NewTransaction from "../components/template/transactions/newTransaction";
import TransactionEditSetup from "../components/template/transactions/editTransactionSetup";
import StatisticsOverview from "../components/template/statistics/statisticsOverview";
import TestPage from "../components/template/timetable";

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
          <PrivateRoute path="/app/categories" component={CategoriesOverview} />
          <PrivateRoute path="/app/categories/new" component={NewCategory} />
          <PrivateRoute path="/app/categories/:id" component={EditCategory} />
          <PrivateRoute path="/app/dividends" component={DividendsOverview} />
          <PrivateRoute path="/app/dividends/new" component={DividendForms} />
          <PrivateRoute path="/app/dividends/:id" component={DividendForms} />
          <PrivateRoute path="/app/orders" component={OrdersOverview} />
          <PrivateRoute path="/app/orders/new" component={OrderForms} />
          <PrivateRoute path="/app/orders/:id" component={OrderForms} />
          <PrivateRoute path="/app/stocks" component={StocksOverview} />
          <PrivateRoute path="/app/stocks/new" component={NewStock} />
          <PrivateRoute path="/app/stocks/:id" component={EditStock} />
          <PrivateRoute
            path="/app/transactions"
            component={TransactionsOverview}
          />
          <PrivateRoute
            path="/app/transactions/new"
            component={NewTransaction}
          />
          <PrivateRoute
            path="/app/transactions/:id"
            component={TransactionEditSetup}
          />
          <PrivateRoute path="/app/statistics" component={StatisticsOverview} />
          <PrivateRoute path="/app/testpage" component={TestPage} />
          {!isLoggedIn() && <IndexPage path="/" />}
          <NotFoundPage default />
        </Router>
      )}
    </>
  );
}
