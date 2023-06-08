import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getProducts() {
    return apiClient.get("/Products");
  },
  //added new call
  getProduct(id) {
    return apiClient.get("/Products/" + id);
  },
  deleteProduct(id) {
    return apiClient.delete("/Products/" + id);
  },
  addProduct() {
    return apiClient.post("/Products/");
  },
};
