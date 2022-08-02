<template>
  <nav>
    <div>
      <TopBar />
    </div>
  </nav>
  <router-view />
</template>

<script>
import TopBar from "@/components/Topbar-menu.vue";
import dataset from "./dataset/age-of-empires-units.json";
import { mapActions } from "vuex";
export default {
  components: {
    TopBar,
  },
  mounted() {
    this.UnitsList(dataset.units);
  },
  methods: {
    ...mapActions("units", ["UnitsList"]),
  },
};
</script>

<style lang="scss">
body {
  background-color: #000;
}
</style>
