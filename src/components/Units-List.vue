<template>
  <div class="md:container mt-6 md:mx-auto flex justify-center items-center">
    <CostsFilter />
  </div>
  <div class="md:container mt-2 md:mx-auto flex justify-center items-center">
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table
        class="table-auto w-3/5 text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">id</th>
            <th scope="col" class="py-3 px-6">name</th>
            <th scope="col" class="py-3 px-6">age</th>
            <th scope="col" class="py-3 px-6">costs</th>
            <th scope="col" class="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-slate-200 dark:border-gray-700 hover:bg-gray-50 text-zinc-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
              1
            </th>
            <td class="py-4 px-6">Archer</td>
            <td class="py-4 px-6">Feudal</td>
            <td class="py-4 px-6">Food:25,Gold:45</td>
            <td class="py-4 px-6 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Detail</a
              >
            </td>
          </tr>
          <tr
            class="bg-white border-b dark:bg-slate-200 dark:border-gray-700 hover:bg-gray-50 text-zinc-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
              2
            </th>
            <td class="py-4 px-6">Crossbowman</td>
            <td class="py-4 px-6">Castle</td>
            <td class="py-4 px-6">Wood:25,Gold:45</td>
            <td class="py-4 px-6 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Detail</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CostsFilter from "@//components/CostsFilter.vue";

export default {
  name: "Units-List",
  components: {
    CostsFilter,
  },
};
</script>

<style></style>
