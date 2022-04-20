<script>
  import TheNavigation from "@/components/TheNavigation.vue";
  export default {
    components: {
      TheNavigation
    },
  };

</script>

<template>
  <header>
    <TheNavigation></TheNavigation>
  </header>

  <main class="container">
    <router-view></router-view>
  </main>
</template>
