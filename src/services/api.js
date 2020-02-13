import axios from "axios";
import { getToken } from "./auth";


const api = axios.create({
  baseURL: "https://api.openbrewerydb.org/"
});

api.interceptors.request.use(async config => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
})

export default api;

/*api.postOrPut = (url, id, data, config = {}) => {
  const method = id ? "put" : "post";
  const apiUrl = id ? `${url}/id/${id}` : url;

  return api[method](apiUrl, data, config);
};*/