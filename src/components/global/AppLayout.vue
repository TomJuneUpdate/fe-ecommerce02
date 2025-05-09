<template>
  <div class="layout">
    <v-layout>
      <CartDrawer />
      <AppNav />
      <FixedNav />
      <v-main style="padding-top: 155px">
        <router-view />
      </v-main>
      <AppFooter />
    </v-layout>
  </div>
</template>

<script>
import AppNav from "@/components/global/AppNav.vue";
import CartDrawer from "@/components/global/CartDrawer.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import FixedNav from "./FixedNav.vue";

export default {
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
    FixedNav,
  },
};
</script>
