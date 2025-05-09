<template>
  <v-app>
    <router-view />
    <QuickView />
    <v-snackbar v-model="bar" location="left bottom" max-width="300">
      {{ itemTitle }} has been added to your cart successfully!
      <template v-slot:actions>
        <v-icon @click="bar = false">mdi-close</v-icon>
      </template>
    </v-snackbar>
    <LoginView></LoginView>
  </v-app>
</template>

<script>
import QuickView from "./components/global/QuickView.vue";
import LoginView from "./views/auth/LoginView.vue";
LoginView;
export default {
  inject: ["Emitter"],
  components: {
    QuickView,
    LoginView,
  },
  data: () => ({
    bar: false,
    itemTitle: "",
  }),
  mounted() {
    // mở snackbar khi có sự kiện từ emitter
    this.Emitter.on("showMsg", (msg) => {
      this.itemTitle = msg;
      this.bar = true;
    });
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
