<template>
  <div class="top-offers bg-grey-lighten-4 py-9">
    <v-container fluid>
      <v-row>
        <v-col cols="4" class="mt-3 py-0 pr-6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px"
            >
              <img
                src="@/assets/images/playstations.webp"
                :style="`width: 100%;cursor: pointer;transition: .5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4" class="mt-3 py-0 pr-6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px"
            >
              <img
                src="@/assets/images/headset.webp"
                :style="`width: 100%; cursor: pointer;transition: .5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              /></div
          ></v-hover>
        </v-col>
        <v-col cols="4" class="mt-3 py-0 pr-6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px"
            >
              <img
                src="@/assets/images/chairs.webp"
                :style="`width: 100%;cursor: pointer;transition: .5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6" class="mt-7 pr-5 py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px"
            >
              <img
                src="@/assets/images/laptops.webp"
                :style="`width: 100%;cursor: pointer;transition: .5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6" class="mt-7 pl-5 py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px"
            >
              <img
                src="@/assets/images/iphones.webp"
                :style="`width: 100%;cursor: pointer;transition: .5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
