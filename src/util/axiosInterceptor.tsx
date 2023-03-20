import axios from "axios";

const userToken = process.env.REACT_APP_GITHUB_TOKEN;
axios.defaults.baseURL = "https://api.github.com/users/";
axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
