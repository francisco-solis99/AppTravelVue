<script>
  export default{
    name: 'ExperienceCard',
    props: {
      experience: {
        type: Object,
        required: true
      }
    },
  };
</script>


<template>
  <article class="card">
    <img :src="`/images/${experience.image}`" :alt="experience.name">
    <span class="card__text">{{experience.name}}</span>
  </article>
</template>



<style scoped>
</style>
