import { defineStore } from "pinia";
import axios from "axios";
export const productsModule = defineStore("productsModule", {
  state: () => ({
    productsSwiper: [],
    newProducts: [],
    mfragrances: [],
    categoryProducts: [],
    singleProducts: "",
    categories: [
      {
        title: "Smart Phones",
        route: "smartphones",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
      {
        title: "Men's Shoes",
        route: "mens-shoes",
      },
      {
        title: "Men's Watches",
        route: "mens-watches",
      },
      {
        title: "Women's Bags",
        route: "womens-bags",
      },
      {
        title: "Motorcycle",
        route: "motorcycle",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.newProducts = res.data.products.filter(
            (item) => item.category === "beauty"
          ); // Lọc sản phẩm theo danh mục
          this.fragrances = res.data.products.filter(
            (item) => item.category === "fragrances"
          ); // Lọc sản phẩm theo danh mục
          this.productsSwiper = res.data.products.slice(0, 10); // Cập nhật danh sách sản phẩm
          console.log(this.productsSwiper); // In ra mảng
        })
        .catch((err) => console.log(err));
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => {
          this.categoryProducts = res.data;
          console.log(this.categoryProducts);
        });
    },
    async getSingleProductsById(productId) {
      this.singleProducts = "";
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => {
          this.singleProducts = res.data;
        });
    },
  },
});
