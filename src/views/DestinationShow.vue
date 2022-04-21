<script>
  import sourceData from '@/data.json';
  import ExperienceCard from '@/components/ExperienceCard.vue';
  import GoBack from '@/components/GoBack.vue';
  export default{
    name: 'DestinationShow',
    components: {
      'expericence-card': ExperienceCard,
      'go-back':GoBack
    },
    props: {
      id: {
        type: Number,
        required: true
      },
      slug: {
        type: String,
        required: false
      }
    },

    data(){
      return {
        // destination: null,
      };
    },
    computed:{
      destination(){
        return sourceData.destinations.find(item => item.id === this.id);
      }
    },
    // async created(){
    //   const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`);
    //   this.destination = await response.json();
    // },
  };
</script>


<template>
  <div>
    <!-- Make the template for every destination according to the destination  id in the url -->
    <section class="destination">
      <h1>{{destination.name}}</h1>
      <go-back></go-back>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name">
        <p>{{destination.description}}</p>
      </div>
    </section>

  <!-- experiences section with another router link -->
    <section class="experiences">
      <h2>Top Experiences in {{destination.name}}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{name: 'experience.show', params:{experienceSlug: experience.slug}}">
          <expericence-card :experience="experience"></expericence-card>
        </router-link>
      </div>
      <router-view></router-view>
    </section>
  </div>

</template>



<style scoped>
</style>
