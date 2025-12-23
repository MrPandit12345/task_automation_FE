import axios from "axios";

const API = "https://task-automation-be.onrender.com/api/auth";

export const loginUser = (data) =>
  axios.post(`${API}/login`, data);

export const registerUser = (data) =>
  axios.post(`${API}/register`, data);
