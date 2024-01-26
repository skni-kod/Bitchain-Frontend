const API_KEY = "ae32b41b-f3dc-4a41-8433-5dbab89ec8a4";

export async function getCryptoPrice(id?: string, interval?: string) {
  let link = "https://api.coincap.io/v2/assets";
  id && (link += `/${id}`);
  interval && (link += `/${id}/${interval}`);

  const response = await fetch(link, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${API_KEY}`
    }
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    throw new Error(`Api error: ${response.status}`);
  }
}
