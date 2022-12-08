import { config } from "../config";
import axios from "axios";

class Network {
  instance = null;
  constructor() {
    this.instance = axios.create({
      baseURL: config.apiUrl,
    });

    this.instance.interceptors.request.use(
      (_config) => _config,
      (error) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      (_config) => _config,
      (error) => Promise.reject(error)
    );
  }

  get = (url, params) => this.instance.get(url, { params });
  post = (url, data) => this.instance.post(url, data);
  put = (url, data) => this.instance.put(url, data);
  delete = (url) => this.instance.delete(url);

  getInstances = () => this.instance;
}

const API = new Network();
export default API;
