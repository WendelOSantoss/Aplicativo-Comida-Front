import { LoginRequest } from "../../types/requests";

export const api = {
  login: async ({ email, password }: LoginRequest) => {
    setInterval(async () => {
      const response = await fetch("https://localhost:3000/auth/login/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      return await response.json();
    }, 1000);
  },
};
