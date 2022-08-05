<template>
  <td class="py-5 px-6">
    {{ unit.id }}
  </td>
  <td class="py-5 px-6">
    {{ unit.name }}
  </td>
  <td class="py-5 px-6">
    {{ unit.age }}
  </td>
  <td class="py-5 px-6">
    {{ costValue }}
  </td>
  <td class="py-5 px-9">
    <router-link
      :to="{
        name: 'Units-Detail',
        params: {
          id: unit.id,
        },
      }"
    >
      <font-awesome-icon
        class="magnifying-glass"
        :icon="['fas', 'magnifying-glass']"
        :style="{ color: 'gray' }"
      />
    </router-link>
  </td>
</template>

<script>
export default {
  name: "Unit-Table-Content",
  props: {
    unit: Object,
  },
  computed: {
    costValue() {
      if (!this.unit.cost) {
        return "";
      }
      const keys = Object.keys(this.unit.cost);
      let result = "";
      keys.forEach((item) => {
        result += `${item}: ${this.unit.cost[item]}, `;
      });
      result = result.replace(/,\s*$/, "");
      return result;
    },
  },
};
</script>

<style></style>
