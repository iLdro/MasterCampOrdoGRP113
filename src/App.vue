<template>
  
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link v-if="userType === 0" to="/Product">Admin Page</router-link>
    <router-link v-if="userType === 1" to="/client">Client</router-link>
    <router-link v-if="userType === 2" to="/doctor">Medecin</router-link>
    <router-link v-if="userType === 3" to="/pharma">Pharmacie</router-link>
    
    <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
    <router-link v-if=" userType === 3||userType === 2 ||userType === 1" to="/info">informations</router-link>
    <button v-if="isLoggedIn" id="logout" @click="handleClick" >Log out</button>
  </nav>
  <router-view @login="handleLogin" @id="handleId" />


  
</template>

<script>

export default {
  
  name: "App",
  
  methods: {
    
    handleClick() {
      console.log("logout")
      localStorage.removeItem("token");
      this.isLoggedIn = false;
      
      this.userType = null;
      
      localStorage.removeItem("isLoggedIn");
      this.$router.push('/');
      localStorage.removeItem("userType");
      localStorage.removeItem("id");
    },
    
    handleLogin(userType) {
      this.userType = userType;
      this.isLoggedIn = true;

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userType", userType);
      this.$emit('login');
      if (this.userType === 0) {
        this.$router.push('/Product');
      }
      else if (userType === 1) {
        this.$router.push('/client');
      }
      else if (userType === 2) {
        this.$router.push('/doctor');
      }
      else if (this.userType === 3) {
        this.$router.push('/pharma');
      }
    }

  },
      data() {
        return {
          isLoggedIn: false,
          userType: null,
        };
      },
      created() {
          this.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
          if (this.isLoggedIn) {
            const userType = Number(localStorage.getItem("userType"));
            this.handleLogin(userType);
            localStorage.setItem("lastRoute", this.$route.path);
          } else {
            const lastRoute = localStorage.getItem('lastRoute');
            console.log('Last route:', lastRoute);
            if (lastRoute) {
              this.$router.push(lastRoute);
            } else {
              this.$router.push('/');
            }
          }

      },
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #000000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  padding: 30px;
  background-color: #ffffff;
  color: #00a38c;
  font-size: 1.5em;
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
