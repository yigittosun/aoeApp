<template>
  <div class="md:container mt-10 md:mx-auto flex justify-center items-center">
    <div class="overflow-x relative shadow-md sm:rounded-lg">
      <table
        class="table-fixed text-sm text-left text-gray-500 dark:text-gray-400 md:w-full"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <th scope="col" class="bg-black py-3 px-6">
            <router-link
              class="text-white"
              :to="{
                name: 'Units',
              }"
            >
              <font-awesome-icon
                class="fa-xl mr-2"
                :icon="['fa', 'circle-chevron-left']"
                :style="{ color: '#fff' }"
              />
              Back</router-link
            >
          </th>
          <td class="py-5 px-6 bg-black text-black"></td>
          <tr>
            <th scope="col" class="py-3 px-6">id :</th>
            <td class="py-5 px-6 bg-white text-black">
              {{ unit.id }}
            </td>
          </tr>
          <tr>
            <th scope="col" class="py-3 px-6">Name :</th>
            <td class="py-5 px-6 bg-white text-black">
              {{ unit.name ? unit["name"] : "Value Not Found" }}
            </td>
          </tr>
          <tr>
            <th scope="col" class="py-3 px-6">Description :</th>
            <td class="py-5 px-6 bg-white text-black">
              {{ unit.description ? unit["description"] : "Value Not Found" }}
            </td>
          </tr>
          <tr>
            <th scope="col" class="py-3 px-6">Age :</th>
            <td class="py-5 px-6 bg-white text-black">
              {{ unit.age ? unit["age"] : "Value Not Found" }}
            </td>
          </tr>
          <tr>
            <th scope="col" class="py-3 px-6">Wood :</th>
            <td class="py-5 px-6 bg-white text-black">
              {{ unit.cost?.Wood ? unit.cost["Wood"] : "Value Not Found" }}
            </td>
          </tr>
          <tr>
            <th scope="col" class="py-3 px-6">Food :</th>
            <td class="py-5 px-6 bg-white text-black">
              {{ unit.cost?.Food ? unit.cost["Food"] : "Value Not Found" }}
            </td>
          </tr>
          <tr>
            <th scope="col" class="py-3 px-6">Gold :</th>
            <td class="py-5 px-6 bg-white text-black">
              {{ unit.cost?.Gold ? unit.cost["Gold"] : "Value Not Found" }}
            </td>
          </tr>
          <tr>
            <th scope="col" class="py-3 px-6">Build Time :</th>
            <td class="py-5 px-6 bg-white text-black">
              {{ unit.build_time ? unit["build_time"] : "Value Not Found" }}
            </td>
          </tr>
          <tr>
            <th scope="col" class="py-3 px-6">Reload Time :</th>
            <td class="py-5 px-6 bg-white text-black">
              {{ unit.reload_time ? unit["reload_time"] : "Value Not Found" }}
            </td>
          </tr>
          <tr>
            <th scope="col" class="py-3 px-6">Hit Points :</th>
            <td class="py-5 px-6 bg-white text-black">
              {{ unit.hit_points ? unit["hit_points"] : "Value Not Found" }}
            </td>
          </tr>
          <tr>
            <th scope="col" class="py-3 px-6">Attack :</th>
            <td class="py-5 px-6 bg-white text-black">
              {{ unit.attack ? unit["attack"] : "Value Not Found" }}
            </td>
          </tr>
          <tr>
            <th scope="col" class="py-3 px-6">Accuracy :</th>
            <td class="py-5 px-6 bg-white text-black">
              {{ unit.accuracy ? unit["accuracy"] : "Value Not Found" }}
            </td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Units-Detail",
  props: {
    id: String,
  },
  computed: {
    ...mapGetters("units", ["getUnits"]),
    unit() {
      const id = this.$route.params.id * 1;
      return this.getUnits.find((unit) => unit.id === id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
