import { getJWT } from "../auth/auth";

export async function fetchStocks(
  resolveFetching: (data: Stock[]) => void,
  handleError: (error: Error) => void
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}stocks`, {
    headers: {
      Authentication: `Bearer ${getJWT()}`,
    },
  })
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}

export async function postStock(
  resolveFetching: () => void,
  isin: string,
  name: string,
  price: number,
  link: string,
  watchlisted: boolean
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}stocks/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authentication: `Bearer ${getJWT()}`,
    },
    body: JSON.stringify({
      isin: isin,
      name: name,
      amount: 0,
      price: price,
      link: link,
      watchlisted: watchlisted,
    }),
  })
    .then(async (res) => {
      await res.json().then(resolveFetching).catch();
    })
    .catch();
}

export async function deleteStock(
  resolveUpdate: () => void,
  stockId: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}stocks/${stockId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authentication: `Bearer ${getJWT()}`,
    },
  })
    .then(async (res) => {
      await res.json().then(resolveUpdate).catch();
    })
    .catch();
}

export async function updateStock(
  resolveUpdate: () => void,
  stockId: string,
  isin: string,
  name: string,
  amount: number,
  price: number,
  link: string,
  watchlisted: boolean
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}stocks/${stockId}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authentication: `Bearer ${getJWT()}`,
    },
    body: JSON.stringify({
      isin: isin,
      name: name,
      amount: amount,
      price: price,
      link: link,
      watchlisted: watchlisted,
    }),
  })
    .then(async (res) => {
      await res.json().then(resolveUpdate).catch();
    })
    .catch();
}

export async function fetchStock(
  resolveFetching: (data: Stock) => void,
  handleError: (error: Error) => void,
  stockId: string
): Promise<void> {
  await fetch(`${process.env.GATSBY_API_URL}stocks/${stockId}`, {
    headers: {
      Authentication: `Bearer ${getJWT()}`,
    },
  })
    .then(async (res) => {
      await res.json().then(resolveFetching).catch(handleError);
    })
    .catch(handleError);
}
