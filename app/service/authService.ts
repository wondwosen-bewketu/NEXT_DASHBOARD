import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

export const registerUser = async (userData: {
  fullName: string;
  phoneNumber: string;
  password: string;
  role: string;
}) => {
  return axios.post(`${API_BASE_URL}/users/register`, userData);
};

export const loginUser = async (userData: {
  phoneNumber: string;
  password: string;
}) => {
  const response = await axios.post(`${API_BASE_URL}/users/login`, userData, {
    withCredentials: true, // Important: ensure cookies are included in requests
  });

  return response;
};

export const logoutUser = () => {
  // Clear the token from cookies
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};
