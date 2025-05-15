<template>
  <v-card fluid>
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="5"
      class="elevation-5 pt-5"
      :class="tableClass"
      outlined
      dense
      :hide-default-header="false"
    >
      <!-- Slot cho hàng -->
      <template #item="{ item }">
        <tr>
          <td v-for="header in headers" :key="header.value" class="text-center">
            <slot
              :name="`item.${header.value}`"
              :item="item"
              :value="item[header.value]"
            >
              {{ item[header.value] }}
            </slot>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "BaseTable",
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: "",
    },
  },
  mounted() {
    console.log("Headers:", this.headers);
    console.log("Data:", this.data);
    if (!this.headers.length) {
      console.warn("Headers is empty. Please provide valid headers.");
    }
  },
  computed: {
    tableClass() {
      return {
        "table-striped": this.type === "striped",
        "table-hover": this.type === "hover",
      };
    },
  },
};
</script>

<style scoped>
.v-data-table th {
  background-color: #f5f5f5 !important;
  color: #000 !important;
  font-weight: 600 !important;
  display: table-cell !important;
}
.v-data-table td {
  font-size: 0.875rem;
  text-align: center;
}
</style>
