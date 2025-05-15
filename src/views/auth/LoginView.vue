<!-- src/views/Login.vue -->
<template>
  <div class="login-view">
    <v-dialog v-model="dialog" max-width="400">
      <v-icon
        style="
          position: absolute;
          right: -13px;
          top: -13px;
          background-color: black;
          color: aliceblue;
          font-size: 18px;
          padding: 13px;
          z-index: 10;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card width="400">
        <v-card-title class="text-h5">Đăng nhập</v-card-title>
        <v-card-text>
          <v-alert v-if="error" type="error" class="mb-4">
            {{ error }}
          </v-alert>
          <v-form ref="form" @submit.prevent="handleLogin">
            <v-text-field
              v-model="userName"
              label="Tên người dùng"
              required
              :rules="[(v) => !!v || 'Tên người dùng là bắt buộc']"
              :error-messages="userNameError"
            />
            <v-text-field
              v-model="password"
              label="Mật khẩu"
              type="password"
              required
              :rules="[(v) => !!v || 'Mật khẩu là bắt buộc']"
              :error-messages="passwordError"
            />
            <v-btn
              type="submit"
              color="primary"
              block
              class="mt-4"
              :loading="loading"
              >Đăng nhập</v-btn
            >
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <a
            @click="goToRegister"
            style="cursor: pointer; text-decoration: underline"
            >Chưa có tài khoản? Đăng ký</a
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

export default {
  name: "LoginView",
  inject: ["Emitter"],
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    return { authStore, router };
  },
  mounted() {
    this.Emitter.on("openLogin", () => {
      console.log("Received openLogin event");
      this.dialog = true;
    });
  },
  data: () => ({
    dialog: false,
    userName: "",
    password: "",
    error: null,
    loading: false,
    userNameError: "",
    passwordError: "",
    snackbar: { show: false, message: "", color: "" },
  }),
  methods: {
    async handleLogin() {
      // Reset lỗi
      this.error = null;
      this.userNameError = "";
      this.passwordError = "";

      // Validate thủ công nếu this.$refs.form không khả dụng
      if (!this.userName) {
        this.userNameError = "Tên người dùng là bắt buộc";
        this.error = "Vui lòng điền đầy đủ thông tin";
        return;
      }
      if (!this.password) {
        this.passwordError = "Mật khẩu là bắt buộc";
        this.error = "Vui lòng điền đầy đủ thông tin";
        return;
      }

      // Kiểm tra this.$refs.form
      console.log("this.$refs.form:", this.$refs.form);
      if (this.$refs.form && typeof this.$refs.form.validate === "function") {
        const valid = await this.$refs.form.validate();
        if (!valid.valid) {
          this.error = "Vui lòng điền đầy đủ thông tin";
          return;
        }
      } else {
        console.warn(
          "this.$refs.form.validate không khả dụng, dùng validation thủ công"
        );
      }

      this.loading = true;
      try {
        console.log("Bắt đầu đăng nhập với:", { username: this.userName });
        await this.authStore.login({
          username: this.userName,
          password: this.password,
        });

        // Debug trạng thái
        console.log("Token:", this.authStore.getToken);
        console.log("Trạng thái đăng nhập:", this.authStore.isLoggedIn);
        console.log("Người dùng:", this.authStore.currentUser);

        // Hiển thị snackbar và chuyển hướng
        this.showSnackbar("Đăng nhập thành công", "success");
        this.dialog = false;
        this.router.push("/");
      } catch (error) {
        console.error("Lỗi đăng nhập:", error);
        this.error =
          this.authStore.error ||
          "Đăng nhập thất bại. Vui lòng kiểm tra thông tin.";
      } finally {
        this.loading = false;
      }
    },
    goToRegister() {
      this.dialog = false;
      this.router.push("/register");
    },
    showSnackbar(message, color) {
      this.snackbar = { show: true, message, color };
    },
  },
};
</script>

<style scoped>
.login-view {
  /* Thêm style tùy chỉnh nếu cần */
}
</style>
