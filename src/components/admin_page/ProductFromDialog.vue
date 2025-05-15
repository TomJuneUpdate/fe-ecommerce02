<template>
  <v-dialog v-model="productFormDialog" max-width="600">
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
      @click="resetProductForm"
    >
      mdi-close
    </v-icon>
    <v-card class="pa-8">
      <v-form @submit.prevent="submitProduct">
        <v-text-field
          v-model="productForm.name"
          label="Tên sản phẩm"
          required
          :rules="[(v) => !!v || 'Tên sản phẩm là bắt buộc']"
        />
        <v-textarea v-model="productForm.description" label="Mô tả" rows="3" />
        <v-text-field
          v-model="productForm.price"
          label="Giá"
          type="number"
          required
          :rules="[
            (v) => !!v || 'Giá là bắt buộc',
            (v) => v > 0 || 'Giá phải lớn hơn 0',
          ]"
        />
        <v-select
          v-model="productForm.category"
          :items="categories"
          label="Danh mục"
          required
          :rules="[(v) => !!v || 'Danh mục là bắt buộc']"
        />
        <v-btn color="primary" type="submit">
          {{ productForm.id ? "Cập nhật" : "Thêm" }}
        </v-btn>
        <v-btn color="grey" @click="resetProductForm" class="ml-2">Hủy</v-btn>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ProductForm",
  inject: ["Emitter"], // inject emitter từ provide ở main.js
  data() {
    return {
      productFormDialog: false,
      productForm: {
        id: null,
        name: "",
        description: "",
        price: null,
        category: null,
      },
      categories: ["Electronics", "Books", "Clothing"],
    };
  },
  methods: {
    open(product = null) {
      this.productFormDialog = true;
      this.productForm = product
        ? { ...product }
        : {
            id: null,
            name: "",
            description: "",
            price: null,
            category: null,
          };
    },
    submitProduct() {
      const event = this.productForm.id ? "edit-product" : "add-product";
      this.Emitter.emit(event, { ...this.productForm });
      this.resetProductForm();
    },

    resetProductForm() {
      this.productForm = {
        id: null,
        name: "",
        description: "",
        price: null,
        category: null,
      };
      this.productFormDialog = false;
    },
  },
};
</script>
