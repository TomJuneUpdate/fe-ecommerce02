<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsSwiper
      :products="productsSwiper"
      title="Flash Deals"
      title-color="red"
    />
    <TopCategories />
    <NewProducts :products="newProducts" />
    <QualityFeatures />
    <ProductsSwiper
      :products="fragrances"
      title="Fragrances"
      title-color="blue"
    />
    <WhyShopwithus />
  </div>
</template>
<script>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import TopCategories from "@/components/home_page/TopCategories.vue";
import ProductsSwiper from "@/components/home_page/ProductsSwiper.vue";
import NewProducts from "@/components/home_page/NewProducts.vue";
import QualityFeatures from "@/components/home_page/QualityFeatures.vue";
import WhyShopwithus from "@/components/home_page/WhyShopwithus.vue";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    TopOffers,
    UpperBanner,
    TheFeatures,
    ProductsSwiper,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShopwithus,
  },
  computed: {
    ...mapState(productsModule, [
      "productsSwiper",
      "newProducts",
      "fragrances",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
