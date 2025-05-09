import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || "",
    user: null,
  }),

  actions: {
    async login(credentials) {
      try {
        const res = await axios.post("/api/v1/auth/login", credentials);
        this.token = res.data.token;

        localStorage.setItem("token", this.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
      } catch (error) {
        throw error.response?.data?.message || "Login failed";
      }
    },

    logout() {
      this.token = "";
      this.user = null;
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    },
  },
});
