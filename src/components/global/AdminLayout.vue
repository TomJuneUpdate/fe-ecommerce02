<template>
  <div>
    <v-container class="mt-5 d-flex" fluid>
      <!-- Sidebar -->
      <v-navigation-drawer app permanent width="240">
        <v-list>
          <v-list-item-title class="text-h6 d-flex align-center justify-center"
            >Admin</v-list-item-title
          >

          <v-divider></v-divider>

          <v-list-item
            link
            @click="
              $router.push({
                path: '/admin/',
              })
            "
          >
            <div class="d-flex align-center px-0">
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="pl-4">Dashboard</v-list-item-title>
            </div>
          </v-list-item>

          <v-list-item
            link
            @click="
              $router.push({
                path: '/admin/product-manage',
              })
            "
          >
            <div class="d-flex align-center px-0">
              <v-list-item-icon><v-icon>mdi-cube</v-icon></v-list-item-icon>
              <v-list-item-title class="pl-4">Products</v-list-item-title>
            </div>
          </v-list-item>
          <v-list-item
            link
            @click="
              $router.push({
                path: '/admin/order-manage',
              })
            "
          >
            <div class="d-flex align-center px-0">
              <v-list-item-icon><v-icon>mdi-cart</v-icon></v-list-item-icon>
              <v-list-item-title class="pl-4">Orders</v-list-item-title>
            </div>
          </v-list-item>
          <v-list-item
            link
            @click="
              $router.push({
                path: '/admin/user-manage',
              })
            "
          >
            <div class="d-flex align-center px-0">
              <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
              <v-list-item-title class="pl-4">Users</v-list-item-title>
            </div>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- Topbar -->
      <v-app-bar app>
        <v-toolbar-title>E-Commerce Admin</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon><v-icon>mdi-bell</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-account-circle</v-icon></v-btn>
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </v-container>
  </div>
</template>
