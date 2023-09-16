import * as React from "react";
import { euroFormat } from "../../helpers/helpers";
import LinkButton from "../atoms/link";
import { PencilIcon } from "@heroicons/react/24/solid";

interface AccountProps {
  account: Account;
}

const AccountItem = ({ account }: AccountProps) => {
  console.log(account.id);
  return (
    <>
      <span className="accountIban">{account.iban}</span>
      <span className="overviewAccount">{account.name}</span>
      <span className="accountType">{account.accountType}</span>
      <span className="accountBalance">
        {euroFormat.format(account.balance)}
      </span>
      <span>
        <LinkButton to={`/app/accounts/${account.id}`} title="edit">
          <PencilIcon className="heroIcon" />
        </LinkButton>
      </span>
    </>
  );
};

export default AccountItem;
