
<template >
  <form id="Connexion"  >
    <h1>Login</h1>
    <div id="ChoiceButton">
      <button @click="MedChoice()" :class="{ 'selected': selectedRole === 'medecin' }">Medecin</button>
      <button @click="ClientChoice()" :class="{ 'selected': selectedRole === 'client' }">Client</button>
      <button @click="PharmaChoice()" :class="{ 'selected': selectedRole === 'pharmacien' }">Pharmacien</button>
      <button @click="AdminChoice()" :class="{ 'selected': selectedRole === 'admin' }">Admin</button>

    </div>

    <form  @submit.prevent= "handleSubmit">
    <div id="Login" v-if="roleChosen">
      <div id="ConnexionInfo">
        <div class="input">
          <label>Email</label>
          <input type="email" id="email" v-model="email" placeholder="Email" required />
        </div>
        <div class="input">
          <label>Password</label>
          <input type="password" id="password" v-model="password" placeholder="Password"  required/>
        </div>
      </div>
    </div>

    
    
    <a @click="handleClick">mot de passe oublié?</a>
    <br/>
    <button type="Submit">Login</button>
    <p v-if="message">{{ message }}</p>
    </form>
  </form>

</template>

<script>

import axios from 'axios'

import jwtDecode from 'jwt-decode';
export default {
  data() {
    return {
      email: '',
      password: '',
      message: '',
      isMed: false,
      isClient: false,
      isPharma: false,
      isAdmin: false,
      roleChosen: false,
    }
  },
  methods: {
    handleSubmit() {
      event.preventDefault();
      console.log("SUBMIT")
      if (this.isMed) {
        console.log("med route")
        let route = "http://localhost:5000/login/med"
        console.log("ROUTE : "+ route);
        this.fetchGoodData(route)
      }
      else if (this.isClient) {
        console.log("cleint route")
        let route = "http://localhost:5000/login/user"
        this.fetchGoodData(route)
      }
      else if (this.isPharma) {
        console.log("pharma route")
        let route = "http://localhost:5000/login/pharmacien"
        this.fetchGoodData(route)
      }
      else if (this.isAdmin) {
        console.log("admin route")
        let route = "http://localhost:5000/login/admin"
        this.fetchGoodData(route)
      }
    
    },
    fetchGoodData(route){
      this.message = ''; // Reset the message value
      console.log("ROUTE : "+ route); 
      axios
        .post(route, {
          email: String(this.email),
          password: String(this.password),
        })
        .then((res) => {
          console.log(res.data);
          const decodedToken = jwtDecode(res.data);
          console.log("TOKEN DECODE : "+ decodedToken);
          localStorage.setItem("token", decodedToken);
          const userType = decodedToken.userType;
          const userId = decodedToken.id;
          localStorage.setItem('id', userId);
          this.$emit('login', userType);
          this.$emit('id', userId);
          console.log('emitted id event with value:', userId);
          console.log("VOICI LID DE LOGIN : "+ userId);

          this.message = 'Logged in successfully. Redirecting..';
        })
        .catch((err) => {
          console.log(err);
          this.message = err.response.data;
          console.log(`message: ${this.message}`);
        });
    },
    handleClick() {
      this.$router.push('/recupmdp');
    },
    ClientChoice() {
      this.roleChosen = true;
      this.isMed = false;
      this.isClient = true;
      this.isPharma = false;
      this.isAdmin = false;
      this.selectedRole = 'client'; 
    },
    MedChoice() {
      this.roleChosen = true;
      this.isMed = true;
      this.isClient = false;
      this.isPharma = false;
      this.isAdmin = false;
      this.selectedRole = 'medecin'; 
    },
    PharmaChoice() {
      this.roleChosen = true;
      this.isMed = false;
      this.isClient = false;
      this.isPharma = true;
      this.isAdmin = false;
      this.selectedRole = 'pharmacien'; 
    },
    AdminChoice() {
      this.roleChosen = true;
      this.isMed = false;
      this.isClient = false;
      this.isPharma = false;
      this.isAdmin = true;
      this.selectedRole = 'admin'; 
    },

  },
  created() {
    this.message = '';
  }
};
</script>


<style scoped>
body {
  background-color: #080710;
}
.background {
  width: 430px;
  height: 650px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
.background .shape {
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}
.shape:first-child {
  background: linear-gradient(#ffd900, #3cff00);
  left: -290px;
  top: 100px;
}
.shape:last-child {
  background: linear-gradient(to right, #ff9100, #ff0040);
  right: -290px;
  bottom: -10px;
}

h1 {
  height: 5px;
}

#body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  padding: auto;
}

#Connexion{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  background-color: rgba(255, 255, 255, 0.13);
  padding: 30px;
  margin-bottom: 20px;
}

#ConnexionInfo{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
}

.input{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

form * {
  font-family: "Poppins", sans-serif;
  color: #000000;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 50px;
  width: 90%;
  background-color: rgba(0, 0, 0, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder {
  color: #000000;
}
button {
  margin-top: 50px;
  margin-bottom: 20px;
  background-color: #000000;
  color: #ffffff;
  padding: 15px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

#ChoiceButton{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 60%;
}
a{
  margin: 20px;
}

.selected {
  background-image: linear-gradient(to right, #00a38c, #0054a3);
  color: #ffffff; 
}
</style>
