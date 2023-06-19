
<template>
  <!-- <div class="background">
    <div class="shape"></div>
    <div class="shape"></div>
  </div> -->
  <form id="Connexion">
    <h1>Login</h1>
    <div id="ConnexionInfo">
      <div class="input">
        <label>Email</label>
        <input type="text" placeholder="Email" />
      </div>
      <div class="input">
        <label>Password</label>
        <input type="text" placeholder="Password" />
      </div>
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script>

import axios from 'axios'

import jwtDecode from 'jwt-decode';
export default {
  
  data(){
    return{
      email:'',
      password:''
      }
    },
    methods: {
    
    

    handleSubmit() {

      axios
        .post("http://localhost:5000/login/user", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res.data);
          const decodedToken = jwtDecode(res.data);
          console.log(decodedToken);
          localStorage.setItem("token", decodedToken);
        })
        .catch((err) => {
          console.log(err);
        });

        }

      },

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
  background-color: #000000;
  color: #ffffff;
  padding: 15px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
</style>
