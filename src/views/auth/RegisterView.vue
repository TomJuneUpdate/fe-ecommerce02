<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh">
    <v-card width="400">
      <v-card-title class="text-h5">Đăng ký</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="register">
          <v-text-field v-model="name" label="Họ tên" required />
          <v-text-field v-model="userName" label="UserName" required />
          <v-text-field v-model="email" label="Email" required />
          <v-text-field
            v-model="password"
            label="Mật khẩu"
            type="password"
            required
          />
          <v-btn type="submit" color="success" block class="mt-4"
            >Đăng ký</v-btn
          >
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <RouterLink to="/login">Đã có tài khoản? Đăng nhập</RouterLink>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      console.log("Thông tin đăng ký:", this.name, this.email);
      // Xử lý đăng ký tại đây
    },
  },
};
</script>
