<script>
  import TheNavigation from "@/components/TheNavigation.vue";
  export default {
    name: 'App',
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
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </main>
</template>

<style lang="css">
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 1s, transform 1s;
  }

  .slide-enter-from, .slide-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }
</style>
