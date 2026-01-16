import axios from "axios";

const baseUrl = axios.create({
  baseURL: "", //same ORIGIN,
  withCredentials: true,
});

export default baseUrl;
