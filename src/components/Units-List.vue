<template>
  <div class="md:container mt-6 md:mx-auto flex justify-center items-center">
    <AgesFilter />
  </div>
  <div class="md:container mt-6 md:mx-auto flex justify-center items-center">
    <CostsFilter />
  </div>
  <div class="md:container mt-2 md:mx-auto flex justify-center items-center">
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table
        class="table-auto w-3/5 text-sm text-left text-gray-500 dark:text-gray-400 md:w-full"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">id</th>
            <th scope="col" class="py-3 px-6">name</th>
            <th scope="col" class="py-3 px-6">age</th>
            <th scope="col" class="py-3 px-6">costs</th>
            <th scope="col" class="py-3 px-6">Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-slate-200 dark:border-gray-700 hover:bg-gray-50 text-zinc-900 dark:hover:bg-gray-600 dark:hover:text-white"
            v-for="(unit, index) in getUnits"
            :key="unit.id + index"
          >
            <TableContent :unit="unit" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CostsFilter from "../components/CostsFilter.vue";
import AgesFilter from "../components/AgeFilter.vue";
import { mapGetters, mapActions } from "vuex";
import TableContent from "../components/TableContent.vue";

export default {
  name: "Unit-list",
  components: {
    CostsFilter,
    AgesFilter,
    TableContent,
  },
  props: {
    unit: Object,
  },
  mounted() {
    this.setAgeFilter("All");
    this.setCostFilter([]);
  },
  computed: {
    ...mapGetters("units", ["getUnits"]),
  },
  methods: {
    ...mapActions("units", ["setAgeFilter", "setCostFilter"]),
  },
};
</script>

<style lang="scss">
@import "../styles/style.scss";
.magnifying-glass {
  &:hover {
    color: $turquoise !important;
  }
}
</style>
