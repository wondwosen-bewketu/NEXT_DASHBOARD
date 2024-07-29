// app/services/tokenService.ts

const TOKEN_KEY = "authToken";

// Save token to local storage
export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Retrieve token from local storage
export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

// Remove token from local storage
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
