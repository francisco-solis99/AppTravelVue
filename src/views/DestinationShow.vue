<script>
  import sourceData from '@/data.json';
  export default{
    name: 'DestinationShow',
    data(){
      return {
      };
    },
    computed:{
      destinationId(){
        return this.$route.params.id;
      },

      destination(){
        return sourceData.destinations.find(item => item.id == this.destinationId);
      }
    },
  };
</script>


<template>
  <section class="destination">
    <h1>{{destination.name}}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{destination.description}}</p>
    </div>
  </section>
</template>



<style scoped>
</style>
