// src/stores/auth.js
import { defineStore } from "pinia";
import AuthService from "@/services/auth.service";

const storedUser = JSON.parse(localStorage.getItem("user"));

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: storedUser || null,
    token: storedUser?.token || null, // Lưu token riêng
    status: storedUser ? { loggedIn: true } : { loggedIn: false },
    error: null,
  }),

  actions: {
    async login({ username, password }) {
      try {
        const userData = await AuthService.login({ username, password });
        this.user = userData;
        this.token = userData.token; // Lưu token
        this.status.loggedIn = true;
        this.error = null;
        console.log("Đăng nhập thành công, user:", userData);
        return userData;
      } catch (err) {
        this.user = null;
        this.token = null;
        this.status.loggedIn = false;
        this.error = err.response?.data?.message || "Lỗi đăng nhập";
        console.error("Lỗi đăng nhập:", this.error);
        throw err;
      }
    },

    logout() {
      AuthService.logout();
      this.user = null;
      this.token = null;
      this.status.loggedIn = false;
      this.error = null;
      console.log("Đã đăng xuất");
    },

    async register({ username, email, password }) {
      try {
        await AuthService.register({ username, email, password });
        this.error = null;
        console.log("Đăng ký thành công");
      } catch (err) {
        this.error = err.response?.data?.message || "Lỗi đăng ký";
        console.error("Lỗi đăng ký:", this.error);
        throw err;
      }
    },
  },

  getters: {
    getToken: (state) => state.token,
    isLoggedIn: (state) => state.status.loggedIn,
    currentUser: (state) => state.user,
  },
});
