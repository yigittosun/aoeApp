<template>
  <div
    class="Range w-[35rem] flex flex-col justify-between mt-8 mr-8 mb-0 ml-8 h-80"
  >
    <h4 class="font-bold mb-10 text-white">Costs Filter</h4>
    <div class="flex justify-between mb-16 items-center">
      <input
        class="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        id="wood"
        value="wood"
        v-model="checkedFilter"
        @change="selectedCheckbox($event)"
      />
      <label for="wood" class="ml-1 text-white">Wood</label>
      <Range
        v-model="wood"
        :min="0"
        :max="200"
        class="ml-20 w-[300%]"
        @change="woodValue"
      />
    </div>
    <div class="flex justify-between mb-16 items-center">
      <input
        class="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        id="food"
        value="food"
        v-model="checkedFilter"
        @change="selectedCheckbox($event)"
      />
      <label for="food" class="ml-1 text-white">Food</label>
      <Range
        v-model="food"
        :min="0"
        :max="200"
        class="ml-20 w-[300%]"
        @change="foodValue"
      />
    </div>
    <div class="flex justify-between mb-16 items-center">
      <input
        class="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        id="gold"
        value="gold"
        v-model="checkedFilter"
        @change="selectedCheckbox($event)"
      />
      <label for="gold" class="ml-1 text-white">Gold</label>
      <Range
        v-model="gold"
        :min="0"
        :max="200"
        class="ml-20 w-[300%]"
        @change="goldValue"
      />
      <br />
    </div>
  </div>
</template>

<script>
import Range from "@vueform/slider";
import { mapActions } from "vuex";
export default {
  name: "CostsFilter",
  components: {
    Range,
  },
  data() {
    return {
      wood: [0, 200],
      food: [0, 200],
      gold: [0, 200],
      checkedFilter: [],
      costs: [],
    };
  },
  methods: {
    ...mapActions("units", ["setCostFilter"]),
    selectedCheckbox(event) {
      const { value } = event.target;
      if (this.checkedFilter.includes(value)) {
        this.costs.push({
          name:
            event.target.value[0].toUpperCase() +
            event.target.value.substring(1),
          value: this[value],
        });
      } else {
        this.costs = this.costs.filter(
          (cost) => cost.name.toLowerCase() !== value
        );
      }
      this.setCostFilter(this.costs);
    },
    woodValue(value) {
      this.currentTable("Wood", value);
    },
    foodValue(value) {
      this.currentTable("Food", value);
    },
    goldValue(value) {
      this.currentTable("Gold", value);
    },
    currentTable(name, value) {
      if (this.checkedFilter.includes(name.toLowerCase())) {
        this.costs = this.costs.map((item) =>
          item.name === name ? { ...item, value: value } : item
        );
        this.setCostFilter(this.costs);
      }
    },
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style lang="scss" scoped>
.Range {
  --slider-tooltip-bg: #298caa;
  --slider-connect-bg: #bf4042;
}
</style>
