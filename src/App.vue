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
    <router-link to="/doctor">Medecin</router-link> |
    <router-link to="/client">Client</router-link> |
    <router-link to="/pharma">Pharmacie</router-link> |

    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link> |
    <button id="logout">Log out</button>
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

#logout{
  background-color: #00a38c;
  color: #ffffff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

</style>
