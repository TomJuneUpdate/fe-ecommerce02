<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">Admin Panel</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-cart</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Products</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Users</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-title>E-Commerce Admin</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-card>
          <v-card-title>
            <span class="text-h6">Product Management</span>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="addProduct">Add Product</v-btn>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="products"
            item-value="id"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Product Table</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn icon @click="editProduct(item)">
                <v-icon color="primary">mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon @click="deleteProduct(item)">
                <v-icon color="error">mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
        { text: "Category", value: "category" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      products: [
        { id: 1, name: "Product A", price: "$100", category: "Electronics" },
        { id: 2, name: "Product B", price: "$50", category: "Books" },
        { id: 3, name: "Product C", price: "$30", category: "Clothing" },
      ],
    };
  },
  methods: {
    addProduct() {
      alert("Add Product Clicked");
    },
    editProduct(item) {
      alert(`Edit Product: ${item.name}`);
    },
    deleteProduct(item) {
      alert(`Delete Product: ${item.name}`);
    },
  },
};
</script>

<style></style>
