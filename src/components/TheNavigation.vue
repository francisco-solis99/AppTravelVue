<template>
  <nav id="nav">
      <!-- router link to home -->
      <router-link to="/">Home</router-link>
      <!-- router link to our dynamic destinations using v-for -->
      <!-- referring the :to with the name property not using the path -->
      <!-- named their params according to the path required -->
      <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{name:'destination.show', params:{id:destination.id, slug:destination.slug}}">
       {{destination.name}}
      </router-link>

  </nav>
</template>


<script>
// get the data json to refferring in this vue component template
import sourceData from '@/data.json';
  export default {
    data(){
      return {
        destinations: sourceData.destinations,
      };
    }
  };
</script>

<style scoped>
</style>
