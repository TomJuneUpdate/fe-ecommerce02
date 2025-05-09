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
          <v-form @submit.prevent="login">
            <v-text-field v-model="userName" label="UserName" required />
            <v-text-field
              v-model="password"
              label="Mật khẩu"
              type="password"
              required
            />
            <v-btn type="submit" color="primary" block class="mt-4"
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
export default {
  inject: ["Emitter"],
  mounted() {
    // Listen for the openLogin event
    this.Emitter.on("openLogin", () => {
      console.log("Received openLogin event");
      this.dialog = true;
    });
  },
  data: () => ({
    dialog: false,
    userName: "",
    password: "",
  }),
  methods: {
    login() {
      console.log("Thông tin đăng nhập:", this.email, this.password);
      // Xử lý đăng nhập tại đây
    },
    goToRegister() {
      this.$router.push("/register");
      this.dialog = false;
    },
  },
};
</script>
