<template>
  <v-container>
    <v-row>
      <!-- Dialog thêm/sửa sản phẩm -->
      <ProductFromDialog
        v-model="productFormDialog"
        :product="productForm"
        :categories="categories"
        @submit="submitProduct"
        @close="resetProductForm"
      ></ProductFromDialog>

      <!-- Bảng danh sách sản phẩm -->
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center pe-2">
            <v-icon icon="mdi-video-input-component"></v-icon> &nbsp; Find a
            Product
            <v-spacer></v-spacer>

            <v-text-field
              v-model="search"
              density="compact"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              variant="solo-filled"
              flat
              hide-details
              single-line
            ></v-text-field>
          </v-card-title>
          <div class="w-100 d-flex justify-end px-5 py-5">
            <v-btn color="primary" @click="addProduct">Add Product</v-btn>
          </div>
          <v-divider></v-divider>
          <v-data-table
            :headers="productHeaders"
            :items="products"
            :search="search"
            class="elevation-1"
            item-value="id"
            density="comfortable"
            :items-per-page="itemsPerPage"
          >
            <!-- Slot cho phần tiêu đề của cột Hành động -->
            <template v-slot:headers>
              <tr>
                <th class="text-left"><strong>ID</strong></th>
                <th class="text-left"><strong>Tên</strong></th>
                <th class="text-left"><strong>Hình ảnh</strong></th>
                <th class="text-left"><strong>Mô tả</strong></th>
                <th class="text-left"><strong>Giá</strong></th>
                <th class="text-left"><strong>Danh mục</strong></th>
                <th class="text-center"><strong>Hành động</strong></th>
              </tr>
            </template>

            <!-- Slot cho phần nội dung của cột Actions -->
            <template v-slot:[`item.image`]="{ item }">
              <v-card class="my-2" elevation="2" rounded>
                <v-img
                  :src="`//localhost_url${item.image}`"
                  height="64"
                  cover
                ></v-img>
              </v-card>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <td class="d-flex justify-center">
                <v-btn small color="primary" @click="editProduct(item)"
                  >Sửa</v-btn
                >
                <v-btn
                  small
                  color="error"
                  class="ml-2"
                  @click="confirmDeleteProduct(item.id)"
                  >Xóa</v-btn
                >
              </td>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialog xác nhận xóa -->
    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h6">Xác nhận xóa</v-card-title>
        <v-card-text>Bạn có chắc chắn muốn xóa sản phẩm này?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="deleteDialog = false">Hủy</v-btn>
          <v-btn color="error" @click="deleteProduct">Xóa</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar thông báo -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      timeout="3000"
      location="bottom left"
    >
      {{ snackbar.message }}
      <template #action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.show = false">Đóng</v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { ref } from "vue";
import ProductFromDialog from "@/components/admin_page/ProductFromDialog.vue";

export default {
  name: "ProductManage",
  inject: ["Emitter"],

  components: {
    ProductFromDialog,
  },
  data() {
    return {
      search: ref(""),
      products: [
        {
          id: 1,
          name: "Laptop",
          description: "Laptop cao cấp",
          price: 1000,
          category: "Điện tử",
        },
        {
          id: 2,
          name: "Áo thun",
          description: "Áo thun cotton",
          price: 20,
          category: "Thời trang",
        },
      ],
      productHeaders: [
        { text: "ID", value: "id" },
        { text: "Tên", value: "name" },
        { text: "Hình ảnh", value: "image" },
        { text: "Mô tả", value: "description" },
        { text: "Giá", value: "price" },
        { text: "Danh mục", value: "category" },
        { text: "Hành động", value: "actions", sortable: false },
      ],

      productForm: {
        id: null,
        name: "",
        description: "",
        price: "",
        category: "",
      },
      categories: ["Điện tử", "Thời trang", "Gia dụng"],
      deleteDialog: false,
      deleteId: null,
      snackbar: { show: false, message: "", color: "" },
    };
  },
  mounted() {
    this.addProduct();
  },
  methods: {
    addProduct() {
      this.Emitter.on("add-product");
    },

    editProduct(product) {
      this.productForm = { ...product };
      this.productFormDialog = true;
    },

    submitProduct() {
      const isEdit = !!this.productForm.id;

      if (isEdit) {
        const index = this.products.findIndex(
          (p) => p.id === this.productForm.id
        );
        if (index !== -1)
          this.products.splice(index, 1, { ...this.productForm });
        this.Emitter.emit("edit-product", this.productForm);
        this.showSnackbar("Cập nhật sản phẩm thành công", "success");
      } else {
        const newProduct = {
          ...this.productForm,
          id: this.products.length + 1,
        };
        this.products.push(newProduct);
        this.Emitter.emit("add-product", newProduct);
        this.showSnackbar("Thêm sản phẩm thành công", "success");
      }

      this.resetProductForm();
    },

    confirmDeleteProduct(id) {
      this.deleteId = id;
      this.deleteDialog = true;
    },

    deleteProduct() {
      this.products = this.products.filter((p) => p.id !== this.deleteId);
      this.Emitter.emit("delete-product", this.deleteId);
      this.showSnackbar("Xóa sản phẩm thành công", "success");
      this.deleteDialog = false;
      this.deleteId = null;
    },

    resetProductForm() {
      this.productForm = {
        id: null,
        name: "",
        description: "",
        price: "",
        category: "",
      };
      this.productFormDialog = false;
    },

    showSnackbar(message, color) {
      this.snackbar = { show: true, message, color };
    },
  },
};
</script>
