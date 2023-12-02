const API_KEY = "http://localhost:8000/";

// export async function getUser() {
//   try {
//     const response = await axios.get('api/user/me');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function getUser(): Promise<void> {
  try {
    const response = await fetch(API_KEY + "api/user/me/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
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

export async function login(
    email: string,
    password: string
  ): Promise<void> {
    try {
      const response = await fetch(API_KEY + "api/user/token", {
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
        console.log(data);
      } else {
        throw new Error(`Login error: ${response.status}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      } else {
        console.error("An unknown error occurred.");
      }
    }
  }
  