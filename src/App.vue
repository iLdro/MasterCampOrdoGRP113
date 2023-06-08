<template>
  <header class="header">
    <div class="logo">
      <img src="" >
      Ezmed : Meds for all
    </div>
  </header>
  <nav>
    |<router-link to="/">Home</router-link> |
    <router-link to="/Product">Admin Page</router-link> |
    <router-link to="/add">Add Product</router-link> |
    <router-link to="/client">Client</router-link> |
    <router-link to="/guest">Guest</router-link> |

    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link> |
  </nav>
  <router-view />
  
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped></style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: rgb(255, 255, 255);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
.header{
  background-color: #00a38c;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0px;
  padding: 30px;
  background-color: #ffffff;
  color: #00a38c;
}
nav a {
  font-weight: bold;
  color: #00a38c;
}
nav a.router-link-exact-active {
  color: #000000;
}

</style>
