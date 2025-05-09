<template>
  <div class="quick-view mt-16">
    <v-dialog v-model="dialog" max-width="1000" max-height="500">
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
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content_card">
        <v-container fluid class="bg-white pt-10">
          <v-row>
            <v-col cols="5">
              <img
                :src="tab ? tab : product.thumbnail"
                class="w-100"
                alt=""
                height="400"
                v-if="!loading"
              />
              <v-skeleton-loader
                v-if="loading"
                type="image, image, image"
              ></v-skeleton-loader>
              <v-tabs center-active height="220" v-model="tab" class="mt-10">
                <v-tab
                  v-for="(pic, i) in product.images"
                  :key="i"
                  class="mx-10 my-5"
                  :value="pic"
                >
                  <v-skeleton-loader
                    v-if="loading"
                    type="article, article, article"
                  ></v-skeleton-loader>
                  <img
                    :src="pic"
                    alt=""
                    width="100"
                    height="100"
                    v-if="!loading"
                  />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="5" class="pt-0 pl-6">
              <v-skeleton-loader
                v-if="loading"
                type="article, article, article"
              ></v-skeleton-loader>
              <v-card elevation="0" v-if="!loading">
                <v-card-title
                  class="px-0"
                  style="
                    font-size: 19px;
                    font-weight: bold;
                    white-space: pre-wrap;
                  "
                >
                  ({{ product.title }}) Sample - {{ product.category }} For Sale
                </v-card-title>
                <div
                  class="rating-parent d-flex align-center"
                  style="gap: 10px"
                >
                  <v-rating
                    v-model="product.rating"
                    half-increments
                    readonly
                    color="yellow darken-3"
                    size="x-small"
                    density="compact"
                  ></v-rating>
                  <span
                    class="mt-1"
                    style="font-size: 13px; color: rgb(96, 96, 96)"
                    >Stock: {{ product.stock }}</span
                  >
                </div>
                <v-card-text
                  class="px-0"
                  style="font-size: 13px; color: rgb(96, 96, 96)"
                  >{{ product.description }}
                </v-card-text>
                <v-card-text
                  class="px-0 pt-0"
                  style="font-size: 13px; color: rgb(96, 96, 96)"
                  >Brand: {{ product.brand }}
                </v-card-text>
                <v-card-text
                  class="px-0 pt-0"
                  style="font-size: 13px; color: rgb(96, 96, 96)"
                  >Availabilty:
                  {{ product.stock > 0 ? "In Stock" : "Out Of Stock" }}
                </v-card-text>
                <v-card-text class="pl-0 pt-0"
                  ><del>${{ product.price }}</del> From
                  <span style="font-weight: 900; font-size: 16px">
                    ${{
                      Math.ceil(
                        product.price -
                          (product.price * product.discountPercentage) / 100
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
                <v-card-text class="pl-0"
                  >Subtotal: ${{
                    Math.ceil(
                      product.price -
                        (product.price * product.discountPercentage) / 100
                    ) * quantity
                  }}</v-card-text
                >
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
                    @click="addToCart(product)"
                    :loading="btnLoading"
                    >Add To Cart
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { VSkeletonLoader } from "vuetify/lib/components";
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
  inject: ["Emitter"],
  methods: {
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("toggleDrawer");
        this.Emitter.emit("showMsg", item.title);
        this.dialog = false;
      }, 1000);
    },
  },
  data: () => ({
    loading: false,
    tab: "",
    quantity: 1,
    dialog: false,
    product: "",
    btnLoading: false,
  }),
  components: { VSkeletonLoader },
  mounted() {
    this.Emitter.on("openQuickView", (product) => {
      this.loading = true;
      this.product = product;
      this.dialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },
};
</script>

<style lang="scss">
.content_card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(73, 71, 71);
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(210, 204, 204);
  }
}
</style>
