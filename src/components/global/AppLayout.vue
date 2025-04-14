<template>
  <div class="layout">
    <v-layout>
      <CartDrawer />
      <v-main>
        <slot></slot>
      </v-main>
      <AppNav />
      <AppFooter />
    </v-layout>
  </div>
</template>

<script>
import AppNav from "@/components/global/AppNav.vue";
import CartDrawer from "@/components/global/CartDrawer.vue";
import AppFooter from "@/components/global/AppFooter.vue";

export default {
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
  },
};
</script>
