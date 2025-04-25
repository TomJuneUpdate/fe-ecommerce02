import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/user/HomeView.vue";
import ProductsCategory from "@/views/user/ProductsCategory.vue";
import ProductDetails from "@/views/user/ProductDetails.vue";
import AdminDasdboard from "@/views/admin/AdminDasdboard.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { layout: "user" },
  },
  {
    path: "/products/:category/:title",
    name: "products_category",
    component: ProductsCategory,
    meta: { layout: "user" },
  },
  {
    path: "/products/product-details/:productId",
    name: "product_details",
    component: ProductDetails,
    meta: { layout: "user" },
  },
  {
    path: "/admin",
    name: "AdminDashboard",
    component: AdminDasdboard,
    meta: { layout: "admin" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
