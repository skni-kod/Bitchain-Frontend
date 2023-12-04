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
  
  try {
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
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("An unknown error occurred.");
    }
  }
}

export async function login({ email, password }: LoginProps): Promise<void> {
  try {
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
      const userData = getUser();
      return userData;
    } else {
      throw new Error(`Login error: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}

export function register() {
  //avatar wiec narazie nei ma co robic
}
