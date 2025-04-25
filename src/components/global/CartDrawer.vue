<template>
  <div class="drawer">
    <v-navigation-drawer location="right" v-model="drawer" temporary>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        dolor tempore tenetur architecto perferendis ab eius, nesciunt molestias
        maiores temporibus similique inventore repudiandae distinctio rerum
        voluptatem debitis. Exercitationem, ut quam!
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("toggle-drawer", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>
