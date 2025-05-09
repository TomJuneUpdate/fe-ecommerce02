<template>
  <BaseTable
    :columns="['ID', 'Name', 'Email']"
    :data="tableData"
    type="striped"
  >
    <!-- Tùy chỉnh tiêu đề -->
    <template #header="{ headers }">
      <th
        v-for="header in headers"
        :key="header.value"
        class="text-uppercase text-primary"
      >
        🔸 {{ header.text }}
      </th>
    </template>

    <!-- Tùy chỉnh từng dòng dữ liệu -->
    <template #item="{ item }">
      <td>{{ item.id }}</td>
      <td>
        <strong>{{ item.name }}</strong>
      </td>
      <td>
        <a :href="'mailto:' + item.email">{{ item.email }}</a>
      </td>
    </template>
  </BaseTable>
</template>

<script>
import BaseTable from "@/components/admin_page/BaseTable.vue";

export default {
  components: { BaseTable },
  data() {
    return {
      tableData: [
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" },
        { id: 3, name: "Charlie", email: "charlie@example.com" },
      ],
    };
  },
};
</script>
