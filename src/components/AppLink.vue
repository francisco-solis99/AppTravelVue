<template>
  <!-- external link -->
  <a :href="to" v-if="isExternal" target="_blank" class="external-link" rel="noopener">
    <slot></slot>
  </a>
  <!-- internal link -->
  <router-link v-else v-bind="$props" class="internal-link">
    <slot></slot>
  </router-link>
</template>

<script>
  import {RouterLink} from 'vue-router';

  export default {
    name:'AppLink',
    props: {

      // get all the props from the router-link
      ...RouterLink.props
    },
    computed: {
      // check if is a external or internal link
      isExternal(){
        return typeof this.to === 'string' && this.to.startsWith('http');
      }
    },
  };
</script>
