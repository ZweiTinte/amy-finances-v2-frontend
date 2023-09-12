import * as React from "react";
import Headline from "../atoms/headline";
import LinkButton from "../atoms/link";

const SidebarLeft = () => {
  return (
    <div className="sidebarLeft">
      <Headline text={"Menu"} style="sidebarHeadline" />
      <LinkButton to="/app/accounts/" text={"Accounts"} classes="sidebarLink" />
      <LinkButton
        classes={"sidebarLink spaceUp"}
        to={"/app/transactions/"}
        text={"Transactions"}
      />
      <LinkButton
        classes={"sidebarLink spaceUp"}
        to={"/app/stocks/"}
        text={"Stocks"}
      />
      <LinkButton
        classes={"sidebarLink spaceUp"}
        to={"/app/orders/"}
        text={"Orders"}
      />
      <LinkButton
        classes={"sidebarLink spaceUp"}
        to={"/app/dividends/"}
        text={"Dividends"}
      />
      <LinkButton
        classes={"sidebarLink spaceUp"}
        to={"/app/categories/"}
        text={"Categories"}
      />
      <LinkButton
        classes={"sidebarLink spaceUp"}
        to={"/app/statistics/"}
        text={"Statistics"}
      />
    </div>
  );
};

export default SidebarLeft;
