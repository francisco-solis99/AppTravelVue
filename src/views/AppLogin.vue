<template>
  <div class="login">
    <form action="" class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input type="text" name="username" class="input" v-model="username">
      <label for="password">Password</label>
      <input type="password" name="password" class="input" v-model="password">
      <button class="btn">Login</button>
    </form>
  </div>
</template>

<script>
  export default {
    name:'AppLogin',
    data(){
      return {
        username: '',
        password: '',
      };
    },
    methods:{
      login(e){
        window.user = this.username;
        if(this.username === 'admin' && this.password === 'admin'){
          // rederict the user to a protected page
        this.$router.push({name:'protected'});
        return;
        }
        console.log('Invalid credentials');
        e.target.reset();
      },
    },
  };

</script>
