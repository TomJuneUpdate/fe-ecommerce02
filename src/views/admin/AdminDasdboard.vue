<template>
  <v-app>
    <!-- Sidebar -->
    <v-navigation-drawer app permanent width="240">
      <v-list>
        <v-list-item-title class="text-h6 mt-4 ml-2">Admin</v-list-item-title>
        <v-divider></v-divider>
        <v-list-item link>
          <div class="d-flex align-center px-0">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="pl-4">Dashboard</v-list-item-title>
          </div>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon><v-icon>mdi-cube</v-icon></v-list-item-icon>
          <v-list-item-title>Products</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon><v-icon>mdi-cart</v-icon></v-list-item-icon>
          <v-list-item-title>Orders</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
          <v-list-item-title>Users</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Topbar -->
    <v-app-bar app flat color="white" elevation="1">
      <v-app-bar-title>Admin Dashboard</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-bell</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-account-circle</v-icon></v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <v-row class="mt-6" dense>
          <v-col cols="12" md="3">
            <v-card color="blue lighten-4" class="pa-4">
              <h3 class="text-subtitle-1">📦 Sản phẩm</h3>
              <div class="text-h5 font-weight-bold">120</div>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card color="green lighten-4" class="pa-4">
              <h3 class="text-subtitle-1">🛒 Đơn hàng</h3>
              <div class="text-h5 font-weight-bold">58</div>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card color="red lighten-4" class="pa-4">
              <h3 class="text-subtitle-1">💰 Doanh thu</h3>
              <div class="text-h5 font-weight-bold">$12,300</div>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card color="purple lighten-4" class="pa-4">
              <h3 class="text-subtitle-1">👤 Người dùng</h3>
              <div class="text-h5 font-weight-bold">301</div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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
