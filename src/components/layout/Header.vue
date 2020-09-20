<template>
  <header class="header">
    <h1>Vue App</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/images">Images</router-link>
      <router-link to="/todos">Todos</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }
  .header a {
    color: #fff;
    padding-right: 5px;
    padding-left: 5px;
    text-decoration: none;
  }
</style>
