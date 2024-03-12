import { API_KEY } from "./apiAuth";

export async function getFundBalance() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return null;
  }

  const response = await fetch(
    API_KEY + "/api/user/me/fund/cryptocurrency/all",
    {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const bodyText = await response.text();
    throw new Error(`${bodyText}`);
  }
}

export async function changeFundBalance(balance: {
  transaction_type: string;
  transaction_amount: number;
  transaction_price_usd: string;
  transaction_currency: string;
}) {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return null;
  }

  const response = await fetch(
    API_KEY + "/api/user/me/fund/cryptocurrency/change",
    {
      method: "PATCH",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cryptocurrency_symbol: balance.transaction_currency,
        cryptocurrency_amount: balance.transaction_amount.toString(),
      }),
    }
  );
  if (response.ok) {
    const data = await response.json();
    addFundHistory({
      transaction_type: balance.transaction_type,
      transaction_amount: balance.transaction_amount,
      transaction_price_usd: balance.transaction_price_usd,
      transaction_currency: balance.transaction_currency,
    });
    return data;
  } else {
    const bodyText = await response.text();
    throw new Error(`${bodyText}`);
  }
}

export async function getFundHistory() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return null;
  }

  const response = await fetch(API_KEY + "/api/user/me/fund-transaction/all", {
    method: "GET",
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const bodyText = await response.text();
    throw new Error(`${bodyText}`);
  }
}

export async function addFundHistory(balance: {
  transaction_type: string;
  transaction_amount: number;
  transaction_price_usd: string;
  transaction_currency: string;
}) {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return null;
  }

  const response = await fetch(
    API_KEY + "/api/user/me/fund-tranasction/create",
    {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        transaction_amount: balance.transaction_amount,
        transaction_currency: balance.transaction_currency,
        transaction_price_usd: balance.transaction_price_usd,
        transaction_type: balance.transaction_type,
      }),
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const bodyText = await response.text();
    throw new Error(`${bodyText}`);
  }
}
