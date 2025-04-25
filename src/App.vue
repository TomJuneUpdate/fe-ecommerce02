<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import AppLayout from "@/components/global/AppLayout.vue"; // layout cho user
import AdminLayout from "@/components/global/AdminLayout.vue"; // layout cho admin

export default {
  components: {
    AppLayout,
    AdminLayout,
  },
  computed: {
    layout() {
      // chọn layout dựa trên meta trong route
      const layoutType = this.$route.meta.layout;
      return layoutType === "admin" ? "AdminLayout" : "AppLayout";
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.v-rating__wrapper {
  margin-right: 3px;
}
</style>
