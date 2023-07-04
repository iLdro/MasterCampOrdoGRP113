
<template>
 
  <div>
      <div class="buttons">
        <button v-if="showButtons" @click="showForm('form1')">Client</button>
        <button v-if="showButtons" @click="showForm('form2')">Medecin</button>
        <button v-if="showButtons" @click="showForm('form3')">Pharmarcie</button>
      </div>
    <form class="form1" @submit.prevent= "handleSubmit" v-if="currentForm === 'form1'">
    <h1>S'enregistrer</h1>
      <div class="gauche1">
        <label for="name">Prénom</label>
        <input 
          v-model="form1.surname" 
          type="text" 
          id="surname" 
          placeholder="Entrez votre prénom" 
          required /><br />
      </div>
  
      <div class="droite1">
        <label for="name" >Nom</label>
        <input 
          v-model="form1.name" 
          type="text" 
          id="name" 
          placeholder="Entrez votre nom" 
          required/><br />
      </div>
  
      <div class="droite2">
        <label for="email">Email</label>
        <input 
          v-model="form1.email"
          type="email" 
          id="email" 
          placeholder="Entrez votre email"
          required /><br />
      </div>
  
      <div class="gauche2">
        <label for="cartv">Numéro Carte Vitale</label>
        <input 
          v-model="form1.cartev" 
          type="number" 
          id="cartv" 
          maxlength="30" 
          placeholder="Entrez votre numéro de Carte Vitale" 
          required/><br />
      </div>
  
  
      <div class="gauche2">
        <label for="password">Mot de passe</label>
        <input
          v-model="form1.password"
          type="password"
          id="password"
          placeholder="Entrez votre mot de passe"
          required
        /><br />
      </div>
      <div class="droite2" >
        <label for="birthDate">Date de naissance</label>
        <input 
          v-model="form1.dateNaissance" 
          type="date" 
          id="birthDate" 
          placeholder="Entrez votre date de naissance" 
          required /><br />
      </div>
     
      <button type="submit">S'inscrire</button>
    </form>
    
  
  
    <form class="form2" @submit.prevent= "handleSubmit" v-if="currentForm === 'form2'">
      <h1>S'enregistrer</h1>
      <div class="gauche1">
        <label for="surname">Prénom</label>
        <input 
          v-model="form2.surname" 
          type="text" 
          id="username" 
          placeholder="Entrez votre prénom" 
          required/><br />
      </div>
      <div class="droite1">
        <label for="name" >Nom</label>
        <input 
          v-model="form2.name" 
          type="text" 
          id="name" 
          placeholder="Entrez votre nom" 
          required/><br />
      </div>
      <div class="gauche2">
        <label for="email">Email</label>
        <input 
          v-model="form2.email" 
          type="email" 
          id="email" 
          placeholder="Entrez votre email"
          required /><br />
      </div>
      <div id="adressnumber" class="droite2" >
        <label for="adressnumber">Numéro lieu d'exercice</label>
        <input
          v-model="form2.adressnumber"
          type="number" 
          id="addressnumber" 
          placeholder="Entrez votre numéro d'adresse" 
          required />
      </div>
  
      <div id="adressname" class="gauche1">
        <label for="adressname">Nom de rue</label>
        <input
          v-model="form2.adressname"
          type="text" 
          id="addressname" 
          placeholder="Entrez votre nom de rue" 
          required />
      </div>
  
      <div id="adresspostal" class="droite2">
        <label for="adresspostal">Code postal</label>
        <input
          v-model="form2.adresspostal"
          type="number" 
          id="addresspostal" 
          placeholder="Entrez votre code postal" 
          required />
      </div>
  
      <div id="adressville" class="gauche1">
        <label for="adressville">Ville</label>
        <input
          v-model="form2.adressville"
          type="text" 
          id="addressville" 
          placeholder="Entrez votre ville" 
          required />
      </div>
  
      <div id="phone" class="droite2">
        <label for="phone_number">Numéro téléphone</label>
        <input 
          v-model="form2.pnumber"
          type="number" 
          id="phone_number" 
          placeholder="Entrez votre numéro de téléphone" 
          required />
      </div>
      <div id="insee" class="gauche2">
        <label for="insee">Numéro INSEE</label>
        <input 
          v-model="form2.insee"
          type="number" 
          id="insee" 
          placeholder="Entrez votre numéro insee" 
          required />
      </div>
      <div class="gauche2">
        <label for="rpps">Code RPPS</label>
        <input
          v-model="form2.rpps"
          type="number"
          id="rpps"
          placeholder="Entrez votre code RPPS"
          required
        /><br />
      </div>
      <div class="droite2" >
        <label for="intitulé">Profession</label>
        <input 
          v-model="form2.intitule" 
          type="text" 
          id="birthDate" 
          placeholder="Entrez votre profession" 
          required /><br />
      </div>
      
      <button type="submit">S'inscrire</button>
    </form>
  
  
    
    <form class="form3" @submit.prevent= "handleSubmit" v-if="currentForm === 'form3'">
      <h1>S'enregistrer</h1>
      <div class="gauche1">
        <label for="surname">Prénom</label>
        <input 
          v-model="form3.surname" 
          type="text" 
          id="surname" 
          placeholder="Entrez votre prénom" 
          required/><br />
      </div>
      <div class="droite1">
        <label for="name" >Nom</label>
        <input 
          v-model="form3.name" 
          type="text" 
          id="name" 
          placeholder="Entrez votre name" 
          required/><br />
      </div>
      <div class="gauche2">
        <label for="email">Email</label>
        <input 
          v-model="form3.email" 
          type="email" 
          id="email" 
          placeholder="Entrez votre email"
          required /><br />
      </div>
      <div id="phone"   class="droite2">
        <label for="phone_number">Numéro téléphone pharmacie</label>
        <input 
          v-model="form3.pnumber"
          type="number" 
          id="phone_number" 
          placeholder="Entrez votre numéro de téléphone" 
          required />
      </div>
      <div id="adressname"  class="gauche1">
        <label for="adressname">Nom pharmacie</label>
        <input
          v-model="form3.place_name"
          type="text" 
          id="addressname" 
          placeholder="Entrez le nom de la pharmacie" 
          required />
      </div>
          <div id="adressnumber"  class="droite2">
        <label for="adressnumber">Numéro d'adresse</label>
        <input
          v-model="form3.adressnumber"
          type="number" 
          id="addressnumber" 
          placeholder="Entrez votre numéro d'adresse" 
          required />
      </div>
  
      <div id="adressname"  class="gauche1">
        <label for="adressname">Nom de rue</label>
        <input
          v-model="form3.adressname"
          type="text" 
          id="addressname" 
          placeholder="Entrez votre rue" 
          required />
      </div>
  
      <div id="adresspostal"  class="droite2">
        <label for="adresspostal">Code postal</label>
        <input
          v-model="form3.adresspostal"
          type="number" 
          id="addresspostal" 
          placeholder="Entrez votre code postal" 
          required />
      </div>
  
      <div id="adressville"  class="gauche2" >
        <label for="adressville">Ville</label>
        <input
          v-model="form3.adressville"
          type="text" 
          id="addressville" 
          placeholder="Entrez votre ville" 
          required />
      </div>
      <div class="gauche2">
        <label for="rpps">Code RPPS</label>
        <input
          v-model="form3.rpps"
          type="number"
          id="rpps"
          required
          placeholder="Entrez votre code RPPS"
        /><br />
      </div>
      
      <div class="droite2" >
        <label for="birthDate">Date de naissance</label>
        <input 
          v-model="form3.dateNaissance" 
          type="date" 
          id="birthDate" 
          placeholder="Entrez votre date de naissance" 
          required /><br />
      </div>
      <button type="submit">S'inscrire</button>
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
          password_confirm:'',
          dateNaissance:''
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
          rpps:'',
          intitule:''
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
          rpps:'',
          dateNaissance:''
        },
        showResults: false,
        formResults: null
      };
    },
    methods: {
      
      async handleSubmit() {
        let data = null;
        if (this.currentForm === 'form1') {
          data = {
            firstname: String(this.form1.surname),
            name: String(this.form1.name),
            email: String(this.form1.email),
            password: String(this.form1.password),
            carteVitale: String(this.form1.cartev),
            dateNaissance: String(this.form1.dateNaissance)
          };
          axios.post('http://localhost:5000/create/user', data)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
            console.log(data);
          });
          
        } 
        else if (this.currentForm === 'form2') {
          data = {
          name: String(this.form2.name),
          firstname: String(this.form2.surname),
          numberStreet: String(this.form2.adressnumber),
          street: String(this.form2.adressname),
          city : String(this.form2.adressville),
          postalCode: String(this.form2.adresspostal),
          phoneNumber: String(this.form2.pnumber),
          email: String(this.form2.email),
          profINSEE: String(this.form2.insee),
          RPPS: String(this.form2.rpps),
          intitule: String(this.form2.intitule),
          signature: this.form2.name + ' ' + this.form2.surname
        }
        console.log(data);
          axios.post('http://localhost:5000/create/med', data)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
        }
        
  
        else if (this.currentForm === 'form3') {
          data = {
            name:  String(this.form3.name),
            firstname:  String(this.form3.surname),
            email:  String(this.form3.email),
            numberStreet:  String(this.form3.adressnumber),
            street:  String(this.form3.adressname),
            city :  String(this.form3.adressville),
            postalCode:  String(this.form3.adresspostal),
            phamarcieName :  String(this.form3.place_name),
            phoneNumber:  String(this.form3.pnumber),
            RPPS:  String(this.form3.rpps),
            dateNaissance: String(this.form1.dateNaissance),
          };
          axios.post('http://localhost:5000/create/pharmacien', data)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
          console.log(data);
        }
  
  
        
        
        
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
  
  .form1{
    display: grid;
    grid-template-columns: 1fr 1fr;
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
  
  .form2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 6%;
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
  
  .form3{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 6%;
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
    
    margin-top: 50px;
    width: 60%;
    background-color: #000000;
    color: #ffffff;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .buttons{
    
    margin-left: 20%;
    margin-right: 20%;
  
    margin-bottom: 20%;
    padding-top: -10%;
  }
  
  
  </style>
  