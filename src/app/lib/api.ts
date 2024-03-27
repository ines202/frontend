import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

API.interceptors.request.use((config) => {
  // Get the token from localStorage
  const token = localStorage.getItem("token");

  // If the token exists, add it to the headers
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    // If the response code is 401 (Unauthorized), delete the token from localStorage
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
    }

    return Promise.reject(error);
  },
);

export default API;
