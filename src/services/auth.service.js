// src/services/auth.service.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export default {
  async login(credentials) {
    const response = await api.post("/auth/login", credentials);
    if (response.data.code !== "000000" || response.data.msg !== "SUCCESS") {
      throw new Error(response.data.msg || "Đăng nhập thất bại");
    }
    const userData = {
      username: credentials.username,
      token: response.data.data, // Lưu token
    };
    localStorage.setItem("user", JSON.stringify(userData));
    return userData;
  },

  logout() {
    localStorage.removeItem("user");
  },

  async register({ username, email, password }) {
    const response = await api.post("/auth/register", {
      username,
      email,
      password,
    });
    if (response.data.code !== "000000" || response.data.msg !== "SUCCESS") {
      throw new Error(response.data.msg || "Đăng ký thất bại");
    }
    return response.data;
  },
};
