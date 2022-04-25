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
    <!-- Left sidebar (named router view) -->
    <router-view name="LeftSideBar" v-slot="{ Component }" class="view left-sidebar">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
    <!-- Main view -->
    <router-view v-slot="{ Component }" class="main-view">
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

  .container {
    display: flex;
  }

  .left-sidebar {
    width: 20%;
  }

  .main-view {
    width: 100%;
  }
</style>
