import * as React from "react";
import ErrorInfo from "../level1/errorInfo";
import { fetchCategories } from "../../api/categoriesApi";
import { DropdownItem } from "../../dropdownTypes";

const CategoriesFetching = ({
  children,
  transactions,
  orders,
  stocks,
  accounts,
  accountsDropdown,
}: {
  children: JSX.Element;
  transactions?: Transaction[];
  orders?: Order[];
  stocks?: Stock[];
  accounts?: Account[];
  accountsDropdown?: DropdownItem[];
}) => {
  const [categoriesReady, setCategoriesReady] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [categories, setCategories] = React.useState<Category[]>([]);

  function handleError(error: Error): void {
    setError(true);
    setErrorMessage(error.message);
  }

  function resolveCategoriesFetching(data: Category[]): void {
    setCategories(data);
    setCategoriesReady(true);
  }

  function loadCategories(): void {
    setCategoriesReady(false);
    fetchCategories(resolveCategoriesFetching, handleError);
  }

  function loadData(): void {
    setError(false);
    setErrorMessage("");
    loadCategories();
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {categoriesReady && categories && (
        <>
          {React.cloneElement(children, {
            transactions: transactions,
            orders: orders,
            stocks: stocks,
            categories: categories,
            categoriesDropdown: categories.map((c) => {
              return { id: c.id, value: c.name };
            }),
            accounts: accounts,
            accountsDropdown: accountsDropdown,
          })}
        </>
      )}
      {error && <ErrorInfo message={errorMessage} tryAgain={loadData} />}
    </>
  );
};

export default CategoriesFetching;
