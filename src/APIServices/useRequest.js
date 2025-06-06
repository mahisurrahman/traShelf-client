import http from "./http-common.js";

const useRequest = () => {
  const postRequest = (url, body) => {
    return http.post(url, body);
  };

  const getRequest = (url) => {
    return http.get(url);
  };

  return [postRequest, getRequest];
};

export default useRequest;
