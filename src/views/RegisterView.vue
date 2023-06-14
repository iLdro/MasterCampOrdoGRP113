
<template>
  <!--<div class="background">
    <div class="shape"></div>
    <div class="shape"></div>
  </div>-->
<div>
  <button v-if="showButtons" @click="showForm('form1')">Client</button>
    <button v-if="showButtons" @click="showForm('form2')">Medecin</button>
    <button v-if="showButtons" @click="showForm('form3')">Pharmarcie</button>
  <form @submit.prevent= "handleSubmit" v-if="currentForm === 'form1'">
  <h1>Register</h1>
    <div class="gauche1">
      <label for="name">Surname</label>
      <input 
        v-model="form1.surname" 
        type="text" 
        id="surname" 
        placeholder="Enter your surname" 
        required /><br />
    </div>

    <div class="droite1">
      <label for="name" >Name</label>
      <input 
        v-model="form1.name" 
        type="text" 
        id="name" 
        placeholder="Enter your name" 
        required/><br />
    </div>

    <div class="droite2">
      <label for="email">Email</label>
      <input 
        v-model="form1.email"
        type="email" 
        id="email" 
        placeholder="Enter your email"
        required /><br />
    </div>

    <div class="gauche2">
      <label for="cartv">Numéro Carte Vitale</label>
      <input 
        v-model="form1.cartev" 
        type="text" 
        id="cartv" 
        maxlength = "30" 
        placeholder="Enter your Carte Vitale ID" 
        required/><br />
    </div>

    <div class="gauche2">
      <label for="password">Password</label>
      <input
        v-model="form1.password"
        type="password"
        id="password"
        placeholder="Enter your password"
        required
      /><br />
    </div>

   
    <button type="submit">Register</button>
  </form>
  


  <form @submit.prevent= "handleSubmit" v-if="currentForm === 'form2'">
    <h1>Register</h1>
    <div class="gauche1">
      <label for="surname">Surname</label>
      <input 
        v-model="form2.surname" 
        type="text" 
        id="username" 
        placeholder="Enter your Surname" 
        required/><br />
    </div>
    <div class="droite1">
      <label for="name" >Name</label>
      <input 
        v-model="form2.name" 
        type="text" 
        id="name" 
        placeholder="Enter your name" 
        required/><br />
    </div>
    <div class="droite2">
      <label for="email">Email</label>
      <input 
        v-model="form2.email" 
        type="email" 
        id="email" 
        placeholder="Enter your email"
        required /><br />
    </div>
    <div id="adressnumber">
      <label for="adressnumber">Numéro lieu d'exercice</label>
      <input
        v-model="form2.adressnumber"
        type="number" 
        id="addressnumber" 
        placeholder="Enter your adress" 
        required />
    </div>

    <div id="adressname">
      <label for="adressname">Nom rue</label>
      <input
        v-model="form2.adressname"
        type="text" 
        id="addressname" 
        placeholder="Enter your adress" 
        required />
    </div>

    <div id="adresspostal">
      <label for="adresspostal">Code postal</label>
      <input
        v-model="form2.adresspostal"
        type="number" 
        id="addresspostal" 
        placeholder="Enter your adress" 
        required />
    </div>

    <div id="adressville">
      <label for="adressville">Ville</label>
      <input
        v-model="form2.adressville"
        type="text" 
        id="addressville" 
        placeholder="Enter your adress" 
        required />
    </div>

    <div id="phone">
      <label for="phone_number">Numéro téléphone</label>
      <input 
        v-name="form2.pnumber"
        type="number" 
        id="phone_number" 
        placeholder="Enter your phone number" 
        required />
    </div>
    <div id="insee">
      <label for="insee">Numéro INSEE</label>
      <input 
        v-name="form2.insee"
        type="number" 
        id="insee" 
        placeholder="Enter your insee number" 
        required />
    </div>
    <div class="gauche2">
      <label for="rpps">Code RPPS</label>
      <input
        v-model="form2.rpps"
        type="text"
        id="rpps"
        maxlength="14"
        placeholder="Enter your RPPS code"
      /><br />
    </div>
    
    <button type="submit">Register</button>
  </form>


  
  <form @submit.prevent= "handleSubmit" v-if="currentForm === 'form3'">
    <h1>Register</h1>
    <div class="gauche1">
      <label for="surname">Surname</label>
      <input 
        v-model="form3.surname" 
        type="text" 
        id="surname" 
        placeholder="Enter your Surname" 
        required/><br />
    </div>
    <div class="droite1">
      <label for="name" >Name</label>
      <input 
        v-model="form3.name" 
        type="text" 
        id="name" 
        placeholder="Enter your name" 
        required/><br />
    </div>
    <div class="droite2">
      <label for="email">Email</label>
      <input 
        v-model="form3.email" 
        type="email" 
        id="email" 
        placeholder="Enter your email"
        required /><br />
    </div>
    <div id="phone">
      <label for="phone_number">Numéro téléphone pharmacie</label>
      <input 
        v-model="form3.pnumber"
        type="number" 
        id="phone_number" 
        placeholder="Enter your phone number" 
        required />
    </div>
    <div id="adressname">
      <label for="adressname">Nom pharmacie</label>
      <input
        v-model="form3.place_name"
        type="text" 
        id="addressname" 
        placeholder="Enter your place name" 
        required />
    </div>
        <div id="adressnumber">
      <label for="adressnumber">Numéro lieu d'exercice</label>
      <input
        v-model="form3.adressnumber"
        type="number" 
        id="addressnumber" 
        placeholder="Enter your adress" 
        required />
    </div>

    <div id="adressname">
      <label for="adressname">Nom rue</label>
      <input
        v-model="form3.adressname"
        type="text" 
        id="addressname" 
        placeholder="Enter your adress" 
        required />
    </div>

    <div id="adresspostal">
      <label for="adresspostal">Code postal</label>
      <input
        v-model="form3.adresspostal"
        type="number" 
        id="addresspostal" 
        placeholder="Enter your adress" 
        required />
    </div>

    <div id="adressville">
      <label for="adressville">Ville</label>
      <input
        v-model="form3.adressville"
        type="text" 
        id="addressville" 
        placeholder="Enter your adress" 
        required />
    </div>
    <div class="gauche2">
      <label for="rpps">Code RPPS</label>
      <input
        v-model="form3.rpps"
        type="text"
        id="rpps"
        maxlength="14"
        placeholder="Enter your RPPS code"
      /><br />
    </div>
    
    <button type="submit">Register</button>
  </form>


</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      showButtons: true, 
      currentForm: null,
      form1: {
        surname:'',
        name: '',
        email: '',
        cartev: '',
        password: '',
        password_confirm:''
      },
      form2: {
        surname:'',
        name: '',
        email: '',
        adressnumber:'',
        adressname:'',
        adresspostal:'',
        adressville:'',
        pnumber:'',
        insee:'',
        rpps:''
      },
      form3: {
        surname:'',
        name: '',
        email: '',
        pnumber:'',
        place_name:'',
        adressnumber:'',
        adressname:'',
        adresspostal:'',
        adressville:'',
        rpps:''
      },
      showResults: false,
      formResults: null
    };
  },
  methods: {
    handleSubmit() {
      let data = null;
      if (this.currentForm === 'form1') {
        data = {
          firstname: this.form1.surname,
          name: this.form1.name,
          email: this.form1.email,
          password: this.form1.password,
          carteVitale: this.form1.cartev
        };
      } 
      else if (this.currentForm === 'form2') {
        data = {
          firstname: this.form2.surname,
          name: this.form2.name,
          email: this.form2.email,
          addressnumber: this.form2.addressnumber,
          addressname: this.form2.addressname,
          addresspostal: this.form2.addresspostal,
          addressville: this.form2.addressville,
          pnumber: this.form2.pnumber,
          insee: this.form2.insee,
          rpps: this.form2.rpps
        };
      } 
      else if (this.currentForm === 'form3') {
        data = {
          firstname: this.form3.surname,
          name: this.form3.name,
          email: this.form3.email,
          pnumber: this.form3.pnumber,
          place_name: this.form3.place_name,
          addressnumber: this.form3.addressnumber,
          addressname: this.form3.addressname,
          addresspostal: this.form3.addresspostal,
          addressville: this.form3.addressville,
          rpps: this.form3.rpps
        };
      }

      axios.post('http://localhost:5000/create/user', data)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });



      console.log(data);
    },
    showForm(form) {
      this.currentForm = form;
      this.showButtons = false; 
    },
    submitForm() {
      let formData = null;
      if (this.currentForm === 'form1') {
        formData = this.form1;
      } else if (this.currentForm === 'form2') {
        formData = this.form2;
      } else if (this.currentForm === 'form3') {
        formData = this.form3;
      }

      
      this.formResults = JSON.stringify(formData, null, 2);
    }
    
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
  background: linear-gradient(#ff00ea, #9900ff);
  left: -290px;
  top: -5px;
}
.shape:last-child {
  background: linear-gradient(to right, #ff0000, #ff0095);
  right: -290px;
  bottom: -100px;
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
