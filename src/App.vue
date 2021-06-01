<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link :to="{ name: 'Product', params: { name: 'Skate' }}">Product 1</router-link> |
  <router-link :to="{ name: 'Product', params: { name: 'Trotinette' }}">Product 2</router-link> | 
  <button @click="goToProduct3()">Product 3</button>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  methods: {
    goToProduct3: function () {
      this.$router.push({ name: 'Product', params: { name: 'Roller' } })
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color:#666;
  text-decoration: none;
}

.router-link-active {
  font-weight: bold;
  color:blueviolet;
}

</style>
