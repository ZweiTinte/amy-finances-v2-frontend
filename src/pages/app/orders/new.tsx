import * as React from "react";
import StocksFetching from "../../../components/template/stocksFetching";
import OrderForms from "../../../components/template/orders/orderForms";
import AccountsFetching from "../../../components/template/accountsFetching";

const OrdersPage = () => {
  return (
    <AccountsFetching>
      <StocksFetching>
        <OrderForms />
      </StocksFetching>
    </AccountsFetching>
  );
};

export default OrdersPage;
