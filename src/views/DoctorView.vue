<template>
  <!-- <div class="background">
    <div class="shape"></div>
    <div class="shape"></div>
  </div> -->

  <div id="body">
    <header>
      <form id="patientResearch">
        <h1>Find your patient</h1>
        <div>
          <label>Numéro de carte vitale</label>
          <div id="ResearchInput">
            <input id="vitNum" type="text" placeholder="Carte Vitale"/>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </header>

    <form id="OrdoForm">
      <h1>Create a prescription</h1>
      <div id="DocPart">
        <h2>Médecin</h2>
        <div>
          <div id="DocInfo">
            <div class="input">
              <label>Nom</label>
              <input type="text" placeholder="Nom" />
            </div>
            <div class="input">
              <label>Spécialisation</label>
              <input type="text" placeholder="Spécialisation"/>
            </div>
          </div>
          <div id="DocAdress">
            <div class="input">
              <label>N°</label>
              <input type="text" placeholder="N°"/>
            </div>
            <div class="input">
              <label>Nom Rue</label>
              <input type="text" placeholder="Nom Rue"/>
            </div>
            <div class="input">
              <label>Code postal</label>
              <input type="text" placeholder="Code Postal"/>
            </div>
          </div>
          <label>Ville</label>
          <input type="text" placeholder="Ville"/>
          <label>Telephone</label>
          <input type="text" placeholder="N° Téléphone"/>
          <label>Code RPPS</label>
          <input type="text" placeholder="Code RPPS" />
        </div>
      </div>
      <div id="ClientPart">
        <h2>Patient</h2>
        <div id="ClientInfo">
          <div class="input">
            <label>Nom</label>
            <input type="text" placeholder="Nom patient"/>
          </div>
          <div class="input">
            <label>Prénom</label>
            <input type="text" placeholder="Prénom"/>
          </div>
          <div class="input">
            <label>Date de naissance</label>
            <input type="text" placeholder="JJ/MM/AAAA"/>
          </div>
        </div>
      </div>
      <div id="MedicamentPart">
        <h2>Médicament(s)</h2>
        <div id="MedicamentList" v-for="Medic in MedicListCount" :key="Medic" >
          <div id="Médicament">
            <div id="MedicamentInput">
              <div id="MédicamentInfo">
                <input type="text" placeholder="Médicament"/>
                <input type="text" placeholder="Dosage"/>
              </div>
              <div id="MédicamentInfo">
                <input type="text" placeholder="Fréquence"/>
                <input type="text" placeholder="Durée"/>
              </div>
            </div>
            <button id="supprMedicament" @click=removeMedicament(Medic)>X</button>
          </div>
        </div>
        <button @click=addMedicament(count)>Ajouter un médicament</button>
        <button id="submitOrdoButton" @click=submitOrdo()>Créer l'ordonnance</button>
      </div>

    </form>
      <!--<div>
       <div class="gauche">
        <label>Select a category </label>
        <input
          list="category"
          v-model="product.category"
          placeholder="Select a category"
        />
        <datalist id="category">
          <option value="Anti-inflammatoires" />
          <option value="Antibiotiques " />
          <option value="Cardiologie " />
          <option value="Dermatologie " />
          <option value="Autres" />
        </datalist>
        <label>Name</label>
        <input type="text" v-model="product.name" placeholder="Name" />
      </div>
      <div class="droite">
        <label>Product's image link</label>
        <input
          type="text"
          v-model="product.image"
          placeholder="Product's image link"
        />
        <label>Price (in euros)</label>
        <input
          type="number"
          v-model="product.price"
          placeholder="Price (in euros)"
        />
      </div> -->
      <!-- <button v-on:click="addProduct()" class="submit">Submit</button>
    </div> -->
      
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "AddProduct",
    data() {
      return {
        MedicListCount: [],
        CountMed:0 ,
        product: {
          id: "",
          category: "",
          name: "",
          image: "",
          price: "",
          rating: null,
        },
        Medecin:{
          nom_medecin:"",
          intitulé:"",
          num_rue:"",
          nom_rue:"",
          codePostal:"",
          ville:"",
          telephone:"", 
          RPPS:""
        },
        Client:{
          nom_client:"",
          prenom_client:"",
          date_naissance:""
        },
        Medicament:{
          nom_medicament:"",
          dosage:"",
          frequence:"",
          duree:""
        },
        MedicamentList:[]
      };
    },
    methods: {
      addMedicament(){
        event.preventDefault()
        this.MedicListCount.push(this.CountMed++)
      },
      removeMedicament(medic){
        event.preventDefault()
        let pos = medic
        this.MedicListCount.splice(pos, 1)
        this.CountMed--
      },
      addProduct() {
        axios.post("http://localhost:3000/products", {
          category: this.product.category,
          name: this.product.name,
          image: this.product.image,
          price: this.product.price,
          rating: this.product.rating,
        });
        console
          .log(this.product)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      submitOrdo(){
        
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
  background: linear-gradient(#0066ff, #ea00ff);
  left: -290px;
  top: -5px;
}
.shape:last-child {
  background: linear-gradient(to right, #5eff00, #00ffbf);
  right: -290px;
  bottom: -100px;
}
#OrdoForm, #MedicamentList {
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
  margin-bottom: 30px;
}

#DocPart, #ClientPart, #MédicamentInput{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom : 10px;
  border-bottom: solid black 2px;
}

#DocInfo, #DocAdress, #ClientInfo, #Médicament {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

#MédicamentInfo{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}

#supprMedicament {
  width: auto;
  height: auto;
  padding:3%;
}

input{
  margin: 10px;
  padding: 10px;
}

.input{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#patientResearch{
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

#patientResearch h1 {
  height:30px;
}

#ResearchInput{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

#ResearchInput button, #submitOrdoButton{
  background-color: #00a38c;
  color: #ffffff;
  width: 100px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

}

#submitOrdoButton{
  background-color: #00a38c;
  color: #ffffff;
  width: auto;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}


#ResearchInput button:hover, #submitOrdoButton:hover{
  background-color: #00c7b1;
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

h1 {
  grid-column-start: 1;
  grid-column-end: 3;
  height:5px;
}

h2{
  margin-top: 50px;
  margin-bottom: 20px;
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
  grid-row-start: 3;
  grid-row-end: 4;
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