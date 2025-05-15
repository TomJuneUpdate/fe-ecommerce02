<template>
  <div class="order-manage">
    <h2 class="text-black">Order</h2>
    <BaseTable
      :columns="['ID', 'Customer', 'Total', 'Status', 'Actions']"
      :data="orders"
      type="hover"
    />
  </div>
</template>
<script>
import BaseTable from "@/components/admin_page/BaseTable.vue";

export default {
  components: {
    BaseTable,
  },
};
</script>
