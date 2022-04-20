<script>
  import sourceData from '@/data.json';
  export default {
    name:'DestinationExperience',
    props: {
      id: {
        type: Number,
        required: true
      },
      experienceSlug: {
        type: String,
        required: true
      }
    },
    computed:{
      experience(){
        return sourceData.destinations.find(country => country.id === this.id)
                          .experiences.find(city => city.slug === this.experienceSlug);
      }
    }
  };
</script>

<template>
  <article class="experience" v-if="experience">
    <h1>{{experience.name}}</h1>
    <div class="experience-details">
      <img :src="`/images/${experience.image}`" :alt="experience.name">
      <p>{{experience.description}}</p>
    </div>
  </article>
</template>
