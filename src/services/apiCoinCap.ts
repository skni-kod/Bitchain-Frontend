import { mutateProps } from "../features/markets/useSpecificCryptoInfo";

const API_KEY = "ae32b41b-f3dc-4a41-8433-5dbab89ec8a4";

export async function getCryptoPrice(limit?: number, offset?: number) {
  let link = "https://api.coincap.io/v2/assets";
  limit && (link = `https://api.coincap.io/v2/assets?limit=${limit}`);
  offset && (link = `https://api.coincap.io/v2/assets?offset=${offset}`);

  const response = await fetch(link, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`GetCryptoPrice error: ${response.status}`);
  }
}

export async function getSpecificCryptoInfo({
  id,
  interval,
  start,
  end,
}: mutateProps) {
  let link;
  if (start === 0) {
    link = `https://api.coincap.io/v2/assets/${id}/history?interval=${interval}`;
  } else {
    link = `https://api.coincap.io/v2/assets/${id}/history?interval=${interval}&start=${start}&end=${end}`;
  }

  const response = await fetch(link, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`GetSpecificCryptoInfo error: ${response.status}`);
  }
}

export async function getRates(id: string = "tether") {
  const link = `https://api.coincap.io/v2/rates/${id}`;

  const response = await fetch(link, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`GetSpecificCryptoInfo error: ${response.status}`);
  }
}

export async function getCryptoAssets(id: string | null = "bitcoin") {
  const link = `https://api.coincap.io/v2/assets/${id}`;

  const response = await fetch(link, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`GetCryptoAssets error: ${response.status}`);
  }
}

export async function getPriceHistory(id: string) {
  const today = new Date().getTime();
  const ago7Days = today - 24 * 3600000 * 7;
  const ago7DaysHistoryP = fetchPriceHistory(
    `https://api.coincap.io/v2/assets/${id}/history?interval=m15&start=${ago7Days}&end=${
      ago7Days + 24 * 3600000
    }`
  );

  const ago30Days = today - 24 * 3600000 * 30;
  const ago30DaysHistoryP = fetchPriceHistory(
    `https://api.coincap.io/v2/assets/${id}/history?interval=m15&start=${ago30Days}&end=${
      ago30Days + 24 * 3600000
    }`
  );

  const ago60Days = today - 24 * 3600000 * 60;
  const ago60DaysHistoryP = fetchPriceHistory(
    `https://api.coincap.io/v2/assets/${id}/history?interval=m15&start=${ago60Days}&end=${
      ago60Days + 24 * 3600000
    }`
  );

  const ago90Days = today - 24 * 3600000 * 90;
  const ago90DaysHistoryP = fetchPriceHistory(
    `https://api.coincap.io/v2/assets/${id}/history?interval=m15&start=${ago90Days}&end=${
      ago90Days + 24 * 3600000
    }`
  );

  const ago365Days = today - 24 * 3600000 * 365;
  const ago365DaysHistoryP = fetchPriceHistory(
    `https://api.coincap.io/v2/assets/${id}/history?interval=m15&start=${ago365Days}&end=${
      ago365Days + 24 * 3600000
    }`
  );

  const ago7DaysHistory = await ago7DaysHistoryP;
  const ago30DaysHistory = await ago30DaysHistoryP;
  const ago60DaysHistory = await ago60DaysHistoryP;
  const ago90DaysHistory = await ago90DaysHistoryP;
  const ago365DaysHistory = await ago365DaysHistoryP;

  async function fetchPriceHistory(link: string) {
    const response = await fetch(link, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`GetPriceHistory error: ${response.status}`);
    }
  }

  return {
    ago7DaysHistory,
    ago30DaysHistory,
    ago60DaysHistory,
    ago90DaysHistory,
    ago365DaysHistory,
  };
}
