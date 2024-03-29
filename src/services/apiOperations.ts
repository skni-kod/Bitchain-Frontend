const API_KEY = "http://localhost:8000";

export async function addDailyVote(action: string, symbol: string) {
  const localVote: string | null = localStorage.getItem("votes");
  let votes;
  if (localVote) {
    const item = localVote.split(",");

    const inArray = item.includes(symbol);
    votes = localVote + "," + symbol;
    if (inArray) {
      throw new Error("Voted");
    }
  } else {
    votes = symbol;
  }

  localStorage.setItem("votes", votes);

  const response = await fetch(
    API_KEY + `/api/crypto-reviews/symbol/${symbol}/`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: action,
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

export async function getDailyVotes(symbol: string) {
  const response = await fetch(
    API_KEY + `/api/crypto-reviews/symbol/${symbol}/`,
    {
      method: "GET",
      headers: {
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
