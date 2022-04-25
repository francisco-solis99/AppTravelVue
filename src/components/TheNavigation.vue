<template>
  <nav id="nav">
      <!-- router link to home -->
      <AppLink to="/">Home</AppLink>
      <!-- router link to our dynamic destinations using v-for -->
      <!-- referring the :to with the name property not using the path -->
      <!-- named their params according to the path required -->
      <AppLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{name:'destination.show', params:{id:destination.id, slug:destination.slug}}">
       {{destination.name}}
      </AppLink>
      <AppLink :to="{name:'protected'}">DashBoard</AppLink>
      <AppLink to="https://vueschool.io">Vue School</AppLink>
  </nav>
</template>


<script>
// get the data json to refferring in this vue component template
import sourceData from '@/data.json';
import AppLink from './AppLink.vue';
  export default {
    data() {
        return {
            destinations: sourceData.destinations,
        };
    },
    components: { AppLink }
};
</script>

<style scoped>
</style>
