<template>
  <div class="quick-view mt-16">
    <v-dialog v-model="dialog" max-width="900" max-height="500">
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
                :src="tab ? tab : singleProducts.thumbnail"
                class="w-100"
                alt=""
                height="400"
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
                  class="mx-10 my-5 w-100"
                  :value="pic"
                >
                  <img :src="pic" alt="" width="100" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="5" class="pt-0 pl-6">
              <v-skeleton-loader
                v-if="loading"
                type="article"
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
                  ({{ singleProducts.title }}) Sample -
                  {{ singleProducts.category }} For Sale
                </v-card-title>
                <div
                  class="rating-parent d-flex align-center"
                  style="gap: 10px"
                >
                  <v-rating
                    v-model="singleProducts.rating"
                    half-increments
                    readonly
                    color="yellow darken-3"
                    size="x-small"
                    density="compact"
                  ></v-rating>
                  <span
                    class="mt-1"
                    style="font-size: 13px; color: rgb(96, 96, 96)"
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
                <v-card-text class="pl-0"
                  >Subtotal: ${{
                    Math.ceil(
                      singleProducts.price -
                        (singleProducts.price *
                          singleProducts.discountPercentage) /
                          100
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
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components";
export default {
  data: () => ({
    loading: false,
    tab: "",
    quantity: 1,
    dialog: true,
  }),
  components: { VSkeletonLoader },
  computed: {
    ...mapState(productsModule, ["singleProducts"]),
  },
  methods: {
    ...mapActions(productsModule, ["getSingleProductsById"]),
  },
  async mounted() {
    this.tab = "";
    this.loading = true;
    await this.getSingleProductsById(18);
    this.loading = false;
  },
};
</script>

<style lang="scss">
.content_card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(105, 105, 105);
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(206, 199, 199);
  }
}
</style>
