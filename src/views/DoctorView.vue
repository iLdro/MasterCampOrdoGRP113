<template>

  <div id="body">
    <header>
      <form id="patientResearch">
        <h1>Find your patient</h1>
        <div>
          <label>Numéro de carte vitale</label>
          <div id="ResearchInput">
            <input id="vitNum" type="text" placeholder="Carte Vitale" v-model="Client.vital_card"/>
            <button @click=FetchPatient(Client.vital_card)>Submit</button>
          </div>
        </div>
      </form>
    </header>

    <form id="OrdoForm">
      <h1>Create a prescription</h1>
      <div id="MedicamentPart">
        <h2>Médicament(s)</h2>
        
        <div id="MedicamentList" v-for="(Medoc, index) in MedicamentList" :key="index" >
          <div id="Médicament">
            <div id="MedicamentInput">
              <div id="MédicamentInfo">
                <div>{{Medoc.nom_medicament}}</div>
                <div>{{Medoc.dosage}}</div>
              </div>
              <div id="MédicamentInfo">
                <div>{{Medoc.frequence}}</div>
                <div>{{Medoc.duree}}</div>
              </div>
            </div>
            <button id="supprMedicament" @click=removeMedicament(index)>X</button>
          </div>
        </div>


        <div id="MedicamentList">
          <div id="Médicament">
            <div id="MedicamentInput">
              <div id="MédicamentInfo">
                <input type="text" placeholder="Médicament" v-model="Medicament.nom_medicament"/>
                <input type="text" placeholder="Dosage" v-model="Medicament.dosage"/>
              </div>
              <div id="MédicamentInfo">
                <input type="text" placeholder="Fréquence" v-model="Medicament.frequence"/>
                <input type="text" placeholder="Durée" v-model="Medicament.duree"/>
              </div>
              <button @click="validateMedoc()">Valider le médicament</button>
            </div>
          </div>
        </div>


        <button id="submitOrdoButton" @click=submitOrdo()>Créer l'ordonnance</button>
      </div>

    </form>

    <div id="success" v-if="DisplaySuccess">
      <h1>Ordonnance créée avec succès</h1>
      <button @click="SuccessButton()">Revenir à la page d'ordonnance</button>
    </div>
      
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "AddProduct",
    data() {
      return {
        product: {
          id: "",
          category: "",
          name: "",
          image: "",
          price: "",
          rating: null,
        },
        Medecin:{
          Med_id: ""
        },
        Client:{
          vital_card:"",
          client_id:""
        },
        Medicament:{
          nom_medicament:"",
          dosage:"",
          frequence:"",
          duree:""
        },
        MedicamentList: [],
        DisplaySuccess: false,
      };
    },
    methods: {
      removeMedicament(index){
        event.preventDefault()
        this.MedicamentList.splice(index, 1)
      },
      async FetchPatient(patientSearch){
        event.preventDefault()
        const response = await axios.post("http://localhost:5000/med/getUser", {carteVitale : patientSearch})
        console.log(response.data)
        this.Client.client_id = response.data._id
      },
      validateMedoc(){
        event.preventDefault()
        this.MedicamentList.push(this.Medicament)
        this.Medicament = {
          nom_medicament:"",
          dosage:"",
          frequence:"",
          duree:""
        }
        console.log(this.MedicamentList)
      },
      submitOrdo(){
        event.preventDefault()
        const ordo = {
          medecin_id : this.Medecin.Med_id,
          client_id : this.Client.client_id,
          medicaments : this.MedicamentList
        }
        console.log(ordo)
        this.DisplaySuccess = true
        
      },
      SuccessButton(){
        window.location.reload()
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

#success {
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  background-color: rgba(255, 255, 255, 0.13);
  padding: 30px;
  margin-bottom: 30px;
  width: 80%;
  height: 80%;
}

</style>