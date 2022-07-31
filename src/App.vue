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
export default {
  components: {
    TopBar,
  },
};
</script>

<style lang="scss"></style>
