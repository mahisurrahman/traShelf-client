import axios from "axios";

//Production
const baseURL = import.meta.env.REACT_APP_BackendURL;
export default axios.create({
  baseURL: baseURL,
  //withCredentials: true,
  // withCredentials: false,
});
