import * as React from "react";
import { getMonths, getYears } from "../../../helpers/helpers";
import DividendSidebarContent from "../../level3/dividendSidebarContent";
import { DropdownItem } from "../../../dropdownTypes";

const DividendSidebarRight = ({
  dividends,
  accounts,
  stocks,
  setFilteredDividends,
  setFiltered,
}: {
  dividends: Dividend[];
  accounts: DropdownItem[];
  stocks: DropdownItem[];
  setFilteredDividends: React.Dispatch<React.SetStateAction<Dividend[]>>;
  setFiltered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [selectedAccounts, setSelectedAccounts] =
    React.useState<DropdownItem[]>(accounts);
  const [selectedStocks, setSelectedStocks] =
    React.useState<DropdownItem[]>(stocks);
  const [selectedYears, setSelectedYears] = React.useState<DropdownItem[]>(
    getYears(dividends)
  );
  const [selectedMonths, setSelectedMonths] = React.useState<DropdownItem[]>(
    getMonths(dividends)
  );

  React.useEffect(() => {
    const filteredYears: string[] = selectedYears.map((year) => {
      return year.value;
    });
    const filteredMonths: number[] = selectedMonths.map((month) => {
      return month.id;
    });
    const filteredAccounts: number[] = selectedAccounts.map((account) => {
      return account.id;
    });
    const filteredStocks: number[] = selectedStocks.map((stock) => {
      return stock.id;
    });
    const newDividends = dividends.filter((dividend) => {
      return (
        filteredAccounts.includes(dividend.toAccount) &&
        filteredStocks.includes(dividend.stock) &&
        filteredMonths.includes(new Date(dividend.payDate).getMonth()) &&
        filteredYears.includes(
          new Date(dividend.payDate).getFullYear().toString()
        )
      );
    });
    setFilteredDividends(newDividends);
    setFiltered(true);
  }, [selectedYears, selectedMonths, selectedAccounts, selectedStocks]);

  return (
    <DividendSidebarContent
      dividends={dividends}
      selectedYears={selectedYears}
      setSelectedYears={setSelectedYears}
      selectedMonths={selectedMonths}
      setSelectedMonths={setSelectedMonths}
      selectedAccounts={selectedAccounts}
      setSelectedStocks={setSelectedStocks}
      selectedStocks={selectedStocks}
      setSelectedAccounts={setSelectedAccounts}
      accounts={accounts}
      stocks={stocks}
    />
  );
};

export default DividendSidebarRight;
