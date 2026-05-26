import axios from "axios";

const api = axios.create({
  baseURL: "https://loan-approval-system-fyol.onrender.com",
});

export default api;