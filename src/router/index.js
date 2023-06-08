import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductList from "@/views/ProductList.vue";
import ProductDetails from "@/views/ProductDetails.vue";
import AddProduct from "@/views/AddProduct.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/client",
    name: "client",
    component: () =>
      import(/* webpackChunkName: "client" */ "../views/ClientView.vue"),
  },
  {
    path: "/guest",
    name: "guest",
    component: () =>
      import(/* webpackChunkName: "guest" */ "../views/GuestView.vue"),
  },
  {
    path: "/Product",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/products/:id",
    name: "ProductDetails",
    props: true,
    component: ProductDetails,
  },
  {
    path: "/add",
    name: "AddProduct",
    props: true,
    component: AddProduct,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
