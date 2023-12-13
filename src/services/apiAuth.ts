const API_KEY = "http://localhost:8000/";

interface LoginProps {
  email: string;
  password: string;
}

export async function getUser() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    console.log("Can not find accessToken in localStorage");
    return null;
  }
  const response = await fetch(API_KEY + "api/user/me/", {
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
    throw new Error(`Get user error: ${response.status}`);
  }
}

export async function login({ email, password }: LoginProps): Promise<void> {
  const response = await fetch(API_KEY + "api/user/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    localStorage.setItem("accessToken", data.token);
    console.log(data.token);
    const userData = getUser();
    return userData;
  } else {
    const bodyText = await response.text();
    throw new Error(`${bodyText}`);
  }
}

export function register() {
  //avatar wiec narazie nei ma co robic
}
