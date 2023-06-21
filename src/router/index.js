import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import ProductList from "@/views/ProductList.vue";
// import ProductDetails from "@/views/ProductDetails.vue";
import DoctorView from "@/views/DoctorView.vue";

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
    path: "/pharma",
    name: "pharmacie",
    component: () =>
      import(/* webpackChunkName: "guest" */ "../views/PharmaView.vue"),
  },
  {
    path: "/Product",
    name: "ProductList",
    component: () =>
      import(/* webpackChunkName: "guest" */ "../views/AdminView.vue"),
  },

  {
    path:"/info",
    name:"InformationView",
    component:()=>
      import(/* webpackChunkName: "info" */ "../views/InformationView.vue"),
  },

  {
    path:"/recupmdp",
    name:"RecupMdpView",
    component:()=>
      import(/* webpackChunkName: "recupmdp" */ "../views/RecupMdpView.vue"),
  },


  {
    path: "/doctor",
    name: "DoctorVieew",
    props: true,
    component: DoctorView,
  },
];

console.log(process.env.BASE_URL);

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn")==="true";
  const userType = Number(localStorage.getItem("userType")) ;
  console.log('isLoggedIn:', isLoggedIn);
  console.log('userType:', userType);

  const authRequiredRoutes = ["/Product", "/client", "/doctor", "/pharma"];

  if(authRequiredRoutes.includes(to.path)) {
    console.log('authRequiredRoutes includes to.path');
    if(isLoggedIn) {
      console.log('isLoggedIn is true');
      if((to.path === "/Product" )&& userType === 0) {
        console.log('allowing access to /Product or /info for userType 0');
        next();
      } else if((to.path === "/client" ) && userType === 1) {
        console.log('allowing access to /client or /info for userType 1');
        next();
      } else if((to.path === "/doctor") && userType === 2) {
        console.log('allowing access to /doctor or /info for userType 2');
        next();
      } else if((to.path === "/pharma" ) && userType === 3) {
        console.log('allowing access to /pharma or /info for userType 3');
        next();
      } else {
        console.log('redirecting to home page');
        next("/");
      }
    } else {
      console.log('isLoggedIn is false');
      next("/");
    }
  } else {  
    console.log('authRequiredRoutes does not include to.path');
    next();
  }
});

export default router;
