<template>
  <div class="app-footer">
    <v-footer app color="grey-light">
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <v-card elevation="0">
              <v-card-title
                class="mb-10"
                style="font-size: 14px; font-weight: 900"
                >SHOP</v-card-title
              >
              <v-card-text
                v-for="category in categories"
                :key="category.title"
                class="pt-0"
                ><router-link
                  :to="{
                    name: 'products_category',
                    params: { category: category.route, title: category.title },
                  }"
                  style="color: black; text-decoration: none"
                  >{{ category.title }}</router-link
                ></v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card elevation="0">
              <v-card-title>FURTHER INFO</v-card-title>
              <v-card-text>Electronics</v-card-text>
              <v-card-text>Computers & Labs</v-card-text>
              <v-card-text>Smartphones & Tablets</v-card-text>
              <v-card-text>Cameras</v-card-text>
              <v-card-text>Video Game & Systems</v-card-text>
              <v-card-text>Home Funniture</v-card-text>
              <v-card-text>Weekly Special</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card elevation="0">
              <v-card-title>CUSTOMER SERVICES</v-card-title>
              <v-card-text class="pt-0 pb-0">Electronics</v-card-text>
              <v-card-text class="pt-0 pb-0">Computers & Labs</v-card-text>
              <v-card-text class="pt-0 pb-0">Smartphones & Tablets</v-card-text>
              <v-card-text class="pt-0 pb-0">Cameras</v-card-text>
              <v-card-text class="pt-0 pb-0">Video Game & Systems</v-card-text>
              <v-card-text class="pt-0 pb-0">Home Funniture</v-card-text>
              <v-card-text class="pt-0 pb-0">Weekly Special</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card elevation="0">
              <v-card-title>CUSTOMER SERVICE</v-card-title>
              <v-card-text>Electronics</v-card-text>
              <v-card-text>Computers & Labs</v-card-text>
              <v-card-text>Smartphones & Tablets</v-card-text>
              <v-card-text>Cameras</v-card-text>
              <v-card-text>Video Game & Systems</v-card-text>
              <v-card-text>Home Funniture</v-card-text>
              <v-card-text>Weekly Special</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <p>&copy; {{ new Date().getFullYear() }} Demo. All Rights</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
};
</script>
