<template>
  <div class="products-category mt-10">
    <h1 class="text-center mb-7">{{ $route.params.title }}</h1>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in categoryProducts.products"
          :key="item.id"
          class="px-5"
          cols="3"
        >
          <v-card elevation="0" class="pb-5">
            <v-hover v-slot="{ isHovering, props }">
              <div class="img-parent" style="height: 300px; overflow: hidden">
                <v-img
                  v-bind="props"
                  class="w-100"
                  :src="
                    showenItem[item.title]
                      ? showenItem[item.title]
                      : item.thumbnail
                  "
                  :style="`height: 100%;cursor: pointer;transition: 0.5s all ease-in-out; scale: ${
                    isHovering ? 1.3 : 1
                  }`"
                ></v-img>
              </div>
            </v-hover>
            <v-card-text class="pl-0 pb-1">
              {{
                `(${item.title}) ${item.description}`.length <= 57
                  ? `(${item.title}) ${item.description}`
                  : `(${item.title}) ${item.description}`.substring(0, 57) +
                    " ..."
              }}
            </v-card-text>
            <v-rating
              v-model="item.rating"
              half-increments
              readonly
              color="yellow darken-3"
              size="x-small"
              density="compact"
            ></v-rating>
            <v-card-text class="pl-0 pt-0"
              ><del>${{ item.price }}</del> From
              <span class="text-red" style="font-weight: 900; font-size: 16px"
                >${{
                  Math.ceil(item.price - item.discountPercentage / 100)
                }}</span
              >
            </v-card-text>
            <v-btn-toggle v-model="showenItem[item.title]">
              <v-btn
                v-for="(pic, i) in item.images"
                :value="pic"
                :key="i"
                size="x-small"
                rounded="xl"
                :ripple="false"
                ><img
                  :src="pic"
                  alt=""
                  width="30px"
                  height="30px"
                  style="border-radius: 50%; border: 1px solid #000"
              /></v-btn>
            </v-btn-toggle>
            <div class="mt-5">
              <v-btn
                density="compact"
                width="220"
                height="35"
                style="text-transform: none; border-radius: 30px"
                variant="outlined"
                @click="
                  $router.push({
                    name: 'product_details',
                    params: { productId: item.id },
                  })
                "
                >Choose Options
              </v-btn>
            </div>
          </v-card></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  data: () => ({ showenItem: {} }),
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    $route() {
      this.getProductsByCategory(this.$route.params.category);
    },
  },
  async mounted() {
    await this.getProductsByCategory(this.$route.params.category);
  },
};
</script>
