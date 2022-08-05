<template>
  <div
    class="Range w-[35rem] flex flex-col justify-between mt-2 mr-8 mb-0 ml-8"
  >
    <h4 class="font-bold mb-10 text-white">Ages Filter</h4>
    <div class="flex justify-between rounded-md shadow-sm" role="group">
      <button
        class="py-2 px-4 text-sm font-medium text-gray-900 rounded-r-lg rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-cyan-800 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-cyan-700 dark:focus:text-white"
        v-for="button in buttons"
        :key="button.name"
        @click="selectedBtn(button.name)"
      >
        {{ button.name }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AgesFilter",
  props: {
    units: Array,
  },
  data() {
    return {
      buttons: [
        {
          name: "All",
          isSelected: true,
        },
        {
          name: "Dark",
          isSelected: false,
        },
        {
          name: "Feudal",
          isSelected: false,
        },
        {
          name: "Castle",
          isSelected: false,
        },
        {
          name: "Imperial",
          isSelected: false,
        },
      ],
    };
  },
  methods: {
    ...mapActions("units", ["setAgeFilter"]),
    selectedBtn(name) {
      this.defaultBtn();
      this.buttons = this.buttons.map((btn) =>
        btn.name === name ? { ...btn, isSelected: true } : btn
      );
      this.setAgeFilter(name);
    },
    defaultBtn() {
      this.buttons.forEach((btn) => {
        btn.isSelected = false;
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
