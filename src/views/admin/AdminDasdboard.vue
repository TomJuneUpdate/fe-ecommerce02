<template>
  <v-app>
    <!-- Main Content -->
    <v-container fluid>
      <v-row class="mt-6" dense>
        <v-col cols="12" md="3">
          <v-card color="blue lighten-4" class="pa-4">
            <h3 class="text-subtitle-1">📦 Sản phẩm</h3>
            <div class="text-h5 font-weight-bold">0</div>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card color="green lighten-4" class="pa-4">
            <h3 class="text-subtitle-1">🛒 Đơn hàng</h3>
            <div class="text-h5 font-weight-bold">0</div>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card color="red lighten-4" class="pa-4">
            <h3 class="text-subtitle-1">💰 Doanh thu</h3>
            <div class="text-h5 font-weight-bold">$0</div>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card color="purple lighten-4" class="pa-4">
            <h3 class="text-subtitle-1">👤 Người dùng</h3>
            <div class="text-h5 font-weight-bold">0</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "AdminDashboard",
};
</script>

<style scoped>
.v-list-item {
  cursor: pointer;
}
</style>
