<template>
  <v-container fluid>
    <v-data-table
      :headers="computedHeaders"
      :items="data"
      :items-per-page="5"
      class="elevation-5 pt-5"
      :class="tableClass"
      hide-default-header="true"
      outlined
    >
      <!-- Header tuỳ chỉnh -->
      <template #top>
        <table class="v-table__wrapper">
          <thead>
            <tr>
              <slot name="header">
                <th v-for="header in computedHeaders" :key="header.value">
                  {{ header.text }}
                </th>
              </slot>
            </tr>
          </thead>
        </table>
      </template>

      <!-- Slot cho hàng -->
      <template #item="{ item }">
        <tr>
          <slot name="item" :item="item">
            <td
              v-for="header in computedHeaders"
              :key="header.value"
              class="d-flex justify-center align-center"
            >
              {{ item[header.value] }}
            </td>
          </slot>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "BaseTable",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: "", // e.g., "striped", "hover"
    },
  },
  computed: {
    computedHeaders() {
      // Chuyển columns như ["ID", "Name"] → [{ text: "ID", value: "id" }]
      return this.columns.map((col) => ({
        text: col,
        value: col.toLowerCase(),
      }));
    },
    headers() {
      // Tên key của column để render trong slot
      return this.computedHeaders;
    },
    tableClass() {
      return {
        "table-striped": this.type === "striped",
        "table-hover": this.type === "hover",
      };
    },
  },
};
</script>
