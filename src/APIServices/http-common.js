import axios from "axios";

//Production
const baseURL = import.meta.env.VITE_API_URL;
export default axios.create({
  baseURL: baseURL,
});
