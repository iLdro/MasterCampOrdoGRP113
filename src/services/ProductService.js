import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getOrdonnance(id) {
    return apiClient.post("/user/getOrdonnances", { id });
  },
  getProducts() {
    return apiClient.get("/Products");
  },
  //added new call
  deleteProduct(id) {
    return apiClient.delete("/Products/" + id);
  },
  addProduct() {
    return apiClient.post("/Products/");
  },
};
