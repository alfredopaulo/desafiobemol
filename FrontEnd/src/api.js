import axios from "axios";

export const baseURL = "http://10.192.175.141:5000/api"; // Substitua pela URL base da sua API

const api = axios.create({
  baseURL,
});

export default api;
