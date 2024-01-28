import { mutateProps } from "../features/markets/useSpecificCryptoInfo";

const API_KEY = "ae32b41b-f3dc-4a41-8433-5dbab89ec8a4";

export async function getCryptoPrice(limit?: number, offset?: number) {
  let link = "https://api.coincap.io/v2/assets";
  limit && (link = `https://api.coincap.io/v2/assets?limit=${limit}`);
  offset && (link = `https://api.coincap.io/v2/assets?offset=${offset}`);

  console.log(link);

  const response = await fetch(link, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    throw new Error(`GetCryptoPrice error: ${response.status}`);
  }
}

export async function getSpecificCryptoInfo({ id, interval, start, end }: mutateProps) {
  const link = `https://api.coincap.io/v2/assets/${id}/history?interval=${interval}&start=${start}&end=${end}`;

  const response = await fetch(link, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    throw new Error(`GetSpecificCryptoInfo error: ${response.status}`);
  }
}
