<template>
  <div class="singleProducts-details mt-16">
    <h1>Product Details</h1>
    <v-container fluid>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="5">
          <img
            :src="tab ? tab : singleProducts.thumbnail"
            class="w-100"
            alt=""
            height="100%"
            v-if="!loading"
          />
          <v-skeleton-loader
            v-if="loading"
            type="image, image, image"
          ></v-skeleton-loader>
          <v-tabs center-active height="220" v-model="tab" class="mt-5">
            <v-tab
              v-for="(pic, i) in singleProducts.images"
              :key="i"
              class="mx-10"
              :value="pic"
            >
              <img :src="pic" alt="" width="100" height="200" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="5" class="pt-0 pl-6">
          <v-skeleton-loader v-if="loading" type="article"></v-skeleton-loader>
          <v-card elevation="0" v-if="!loading">
            <v-card-title
              class="px-0"
              style="font-size: 19px; font-weight: bold"
            >
              ({{ singleProducts.title }} ) Sample -
              {{ singleProducts.category }} For Sale
            </v-card-title>
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="singleProducts.rating"
                half-increments
                readonly
                color="yellow darken-3"
                size="x-small"
                density="compact"
              ></v-rating>
              <span class="mt-1" style="font-size: 13px; color: rgb(96, 96, 96)"
                >Stock: {{ singleProducts.stock }}</span
              >
            </div>
            <v-card-text
              class="px-0"
              style="font-size: 13px; color: rgb(96, 96, 96)"
              >{{ singleProducts.description }}
            </v-card-text>
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 13px; color: rgb(96, 96, 96)"
              >Brand: {{ singleProducts.brand }}
            </v-card-text>
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 13px; color: rgb(96, 96, 96)"
              >Availabilty:
              {{ singleProducts.stock > 0 ? "In Stock" : "Out Of Stock" }}
            </v-card-text>
            <v-card-text class="pl-0 pt-0"
              ><del>${{ singleProducts.price }}</del> From
              <span style="font-weight: 900; font-size: 16px">
                ${{
                  Math.ceil(
                    singleProducts.price -
                      (singleProducts.price *
                        singleProducts.discountPercentage) /
                        100
                  )
                }}</span
              >
            </v-card-text>
            <v-card-text class="pl-0 pt-0">Quantity</v-card-text>
            <div
              class="counter px-1"
              style="
                border-radius: 25px;
                border: 1px solid black;
                width: fit-content;
              "
            >
              <v-icon size="20" @click="quantity > 1 ? quantity-- : false"
                >mdi-minus</v-icon
              >
              <input
                type="number"
                style="
                  border: none;
                  outline: none;
                  width: 60px;
                  font-size: 13px;
                "
                class="text-center py-3"
                min="1"
                v-model="quantity"
              />
              <v-icon size="20" @click="quantity++">mdi-plus</v-icon>
            </div>
            <v-card-text class="pl-0">
              Subtotal: ${{
                Math.ceil(
                  singleProducts.price -
                    (singleProducts.price * singleProducts.discountPercentage) /
                      100
                ) * quantity
              }}
            </v-card-text>
            <v-card-actions class="mt-7 pl-0">
              <v-btn
                variant="outlined"
                style="
                  text-transform: none;
                  border-radius: 25px;
                  background-color: black;
                "
                class="w-75 text-white"
                density="compact"
                height="50px"
                @click="addToCart(singleProducts)"
                >Add To Cart
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { cartStore } from "@/stores/cart";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components";
export default {
  data: () => ({
    loading: false,
    tab: "",
    quantity: 1,
  }),
  components: { VSkeletonLoader },
  computed: {
    ...mapState(productsModule, ["singleProducts"]),
  },
  methods: {
    ...mapActions(productsModule, ["getSingleProductsById"]),
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.addItem(item);
    },
  },
  watch: {
    async $route() {
      this.loading = true;
      await this.getSingleProductsById(this.$route.params.productId);
      this.tab = this.singleProducts.thumbnail; // reset tab về đúng thumbnail mới
      this.loading = false;
    },
  },

  async mounted() {
    this.loading = true;
    await this.getSingleProductsById(this.$route.params.productId);
    this.tab = this.singleProducts.thumbnail; // cũng reset tab luôn
    this.loading = false;
  },
};
</script>
