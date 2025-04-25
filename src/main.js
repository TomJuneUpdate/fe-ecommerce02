import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Pinia configuration
import { createPinia } from "pinia";
const pinia = createPinia(); // ✅ tạo instance trước

// Swiper Config
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Emitter configuration
import mitt from "mitt";
const emitter = mitt();

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .provide("Emitter", emitter)
  .use(pinia) // ✅ truyền pinia instance đã tạo
  .use(router)
  .mount("#app");
