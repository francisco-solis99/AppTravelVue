<template>
  <div>
    <h1>Welcome {{username}}</h1>
    <button type="button" @click="logout">Logout</button>
  </div>
</template>

<script>
  export default{
    name:'AppProtected',
    data(){
      return{
        username: window.user,
      };
    },
    methods:{
      logout(){
        window.user = null;
        // rederict to logout
        this.$router.push({name:'Home'});
      },
    },
  };
</script>

