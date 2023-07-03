<template>
  <h1>Informations personnelles</h1>
  <form @submit.prevent="handleId">
    <div>
      <label>Ancien mot de passe</label>
      <input v-model="ancien" type="text" required>
    </div>
    <div>
      <label>Nouveau mot de passe</label>
      <input v-model="nouveau" type="password" required>
    </div>
    <div>
      <label>Confirmer nouveau mot de passe</label>
      <input v-model="nouveau2" type="password" required>
    </div>
    <button type="submit">Réinitialiser</button>
    <p v-if="message">{{ message }}</p>
    
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      ancien: '',
      nouveau: '',
      nouveau2: '',
    };
  },
  methods: {
    async handleId() {
      this.message = ''; 
      const userId = localStorage.getItem('id'); // Retrieve userId from localStorage
      //console.log('VOICI ID', userId);
      const userType = localStorage.getItem('userType'); 
      if (this.nouveau === this.nouveau2 || this.ancien !== this.nouveau) {
        console.log(this.ancien);
        console.log(this.nouveau);
        
        if (userType == 1)
          axios
            .post('http://localhost:5000/user/changePassword', {
              id: userId,
              password: String(this.ancien),
              newPassword: String(this.nouveau),
            })
            .then((res) => {
              console.log('bien joué');
              this.message = 'Changement de mot de passe effectué avec succès !';
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        else if (userType == 2)
            axios
              .post('http://localhost:5000/med/changePassword', {
                id: userId,
                password: String(this.ancien),
                newPassword: String(this.nouveau),
              })
              .then((res) => {
                console.log('bien joué');
                this.message = 'Changement de mot de passe effectué avec succès !';
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
        else if (userType == 3)
            axios
              .post('http://localhost:5000/pharmacien/changePassword', {
                id: userId,
                password: String(this.ancien),
                newPassword: String(this.nouveau),
              })
              .then((res) => {
                console.log('bien joué');
                this.message = 'Changement de mot de passe effectué avec succès !';
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });

        } 
        else {
          console.log("ERREUR");
        }
        
      
      },
  },
  created() {
    this.message = '';
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

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 550px;
  width: 800px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 55%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}
h1 {
  grid-column-start: 1;
  grid-column-end: 3;
  height: 5px;
  margin-top: 2%;
}
.gauche1,
.droite1,
.gauche2,
.droite2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.gauche1 {
  grid-column-start: 1;
  grid-column-end: 2;
}
.droite1 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
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
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  margin-top: 50px;
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

</style>