<template>
  <div
    class="Range w-[35rem] flex flex-col justify-between mt-8 mr-8 mb-0 ml-8 h-80"
  >
    <h4 class="font-bold mb-10 text-white">Costs Filter</h4>
    <div class="flex justify-between mb-16 items-center">
      <input type="checkbox" id="wood" value="wood" v-model="checkedFilter" />
      <label for="wood" class="ml-1 text-white">Wood</label>
      <Range v-model="wood" :min="0" :max="200" class="ml-20 w-[300%]" />
    </div>
    <div class="flex justify-between mb-16 items-center">
      <input type="checkbox" id="food" value="food" v-model="checkedFilter" />
      <label for="food" class="ml-1 text-white">Food</label>
      <Range v-model="food" :min="0" :max="200" class="ml-20 w-[300%]" />
    </div>
    <div class="flex justify-between mb-16 items-center">
      <input type="checkbox" id="gold" value="gold" v-model="checkedFilter" />
      <label for="gold" class="ml-1 text-white">Gold</label>
      <Range v-model="gold" :min="0" :max="200" class="ml-20 w-[300%]" />
    </div>
  </div>
</template>

<script>
import Range from "@vueform/slider";
export default {
  name: "CostsFilter",
  components: {
    Range,
  },
  data() {
    return {
      wood: 0,
      food: 0,
      gold: 0,
      checkedFilter: [],
    };
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
