<script>
  export default {

  };
</script>

<template>
  <ul>
    <li>
      <router-link :to="{name:'protected'}">Protected</router-link>
    </li>
    <li>
      <router-link :to="{name:'invoices'}">Invoices</router-link>
    </li>
  </ul>
</template>

<style scoped>
  ul{
    background-color: white;
    padding: 10px;
    line-style: none;
    margin-right: 20px;
  }

  li {
    margin: 10px;
  }
</style>
