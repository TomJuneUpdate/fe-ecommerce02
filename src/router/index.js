import AdminLayout from "@/components/global/AdminLayout.vue";

import AppLayout from "@/components/global/AppLayout.vue";
import AdminDasdboard from "@/views/admin/AdminDasdboard.vue";
import OrderManage from "@/views/admin/OrderManage.vue";
import ProductManage from "@/views/admin/ProductManage.vue";
import UserManage from "@/views/admin/UserManage.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import ProjectManage from "@/views/ProjectManage.vue";
import HomeView from "@/views/user/HomeView.vue";
import ProductDetails from "@/views/user/ProductDetails.vue";
import ProductsCategory from "@/views/user/ProductsCategory.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // User Layout
  {
    path: "/",
    component: AppLayout,

    children: [
      {
        path: "",
        name: "HomeView",
        component: HomeView,
      },
      {
        path: "products/:category/:title",
        name: "ProductsCategory",
        component: ProductsCategory,
      },
      {
        path: "products/product-details/:productId",
        name: "ProductDetails",
        component: ProductDetails,
      },
      {
        path: "register",
        name: "RegisterView",
        component: RegisterView,
      },
    ],
  },

  //thu
  {
    path: "/ad",
    component: ProjectManage,
  },

  // Admin Layout
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "AdminDashboard",
        component: AdminDasdboard,
      },
      {
        path: "product-manage",
        name: "ProductManage",
        component: ProductManage,
      },
      {
        path: "user-manage",
        name: "UserManage",
        component: UserManage,
      },
      {
        path: "order-manage",
        name: "OrderManage",
        component: OrderManage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
