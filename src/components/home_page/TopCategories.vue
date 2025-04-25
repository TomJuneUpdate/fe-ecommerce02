<template>
  <div class="top-categories">
    <div class="cyber-banner">
      <img src="@/assets/images/cyber-banner.webp" alt="" class="w-100" />
    </div>
    <div class="categories pt-10">
      <div class="title d-flex justify-center align-center px-4 mb-3">
        <h2
          class="text-center flex-grow-1"
          style="font-weight: 700; font-size: 17px; color: black;o"
        >
          Top Categories
        </h2>
        <a href="#" class="text-black">Shope All</a>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="2" v-for="item in categories" :key="item.title">
            <v-card elevation="0" class="text-center py-3 px-2">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-parent"
                  style="
                    height: 170px;
                    width: 100%;
                    overflow: hidden;
                    border-radius: 50%;
                  "
                >
                  <v-img
                    v-bind="props"
                    :src="item.img"
                    :style="`height: 100%;width: 100% ;cursor: pointer;transition: 0.4s all ease-in-out; scale: ${
                      isHovering ? 1.05 : 1
                    }`"
                  ></v-img>
                </div>
              </v-hover>
              <v-card-text> {{ item.title }} </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        title: "Mobile Phones",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "Labtops",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?",
      },
      {
        title: "TVS",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "PCs",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "PCs",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "PCs",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "PCs",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "PCs",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "PCs",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "PCs",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "PCs",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "PCs",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
    ],
  }),
};
</script>
