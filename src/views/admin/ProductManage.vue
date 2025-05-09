<template>
  <div class="product-manage d-flex flex-column pa-4 text-black">
    <h2 class="text-h5 font-weight-bold mb-4 text-black">Product Management</h2>

    <base-table
      :columns="['ID', 'Name', 'Price', 'Actions']"
      :data="products"
      type="hover"
    >
      <template #item="{ item }">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <v-btn icon color="primary" @click="editProduct(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="error" @click="deleteProduct(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </td>
      </template>
    </base-table>
  </div>
</template>

<script>
import BaseTable from "@/components/admin_page/BaseTable.vue";

export default {
  name: "ProductManage",
  components: {
    BaseTable,
  },
  data() {
    return {
      products: [
        { id: 1, name: "Product 1", price: "$10" },
        { id: 2, name: "Product 2", price: "$20" },
        { id: 3, name: "Product 3", price: "$30" },
      ],
    };
  },
  methods: {
    editProduct(product) {
      console.log("Editing:", product);
    },
    deleteProduct(product) {
      console.log("Deleting:", product);
      this.products = this.products.filter((p) => p.id !== product.id);
    },
  },
};
</script>
