<template>
  
  <div id="body">
    <header>
      <form id="OrdoResearch">
        <h1>Find your ordonnance</h1>
        <div>
          <label>Numéro de l'ordonnance</label>
          <div id="ResearchInput">
            <input id="ordoNum" type="text" placeholder="numéro de l'ordonnance" v-model="ordo.Id">
            <button @click="fetchOrdo(ordo.Id)">{{validateOrdo}}</button>
          </div>
        </div>
      </form>
    </header>

    <form>
      <div id="MedicamentList" v-for="(medoc,index) in medocList" :key="index">
        <div id="Medicament">
          <div id="MedicamentInput">
            <div id="MedicamentInfo">
              <div>{{medoc.nom_medicament}}</div>
              <div>{{medoc.dosage}}</div>
            </div>
            <div id="MedicamentInfo">
              <div>{{medoc.fréquence}}</div>
              <div>{{medoc.duree}}</div>
            </div>
            <button id="supprButton" @click="removeMedicament(index)">Enlever le médicament</button>
          </div>
        </div>
      </div>


      <button v-if="displaySaveButton" id="submitOrdoButton" @click=submitOrdo()>sauvegarder l'ordonnance</button>
    </form>


    <div id="success" v-if="displaySuccess">
      <h1>Ordonnance créée avec succès</h1>
      <button @click="successButton()">Revenir à la page d'ordonnance</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GuestView",
  data(){
    return{
      pharmacien:{
        pharmacien_id: ""
      },
      ordo: {
        Id: "",
      },
      validateOrdo: "Chercher", 
      medocList: [],
      medecin:{
        med_id: ""
      },
      client:{
        vital_card:"",
        client_id:""
      },
      displaySuccess: false,
      displaySaveButton: false
    }
  }, 
  methods: {
    async fetchOrdo(patientSearch){
      event.preventDefault();
      const response = await axios.post("http://localhost:5000/pharmacien/getOrdonnance", {id : patientSearch})
      console.log(response.data)
      response.data.medicaments.forEach(element => {
        this.medocList.push(element)
      });
      this.medecin.med_id = response.data.medecin_id
      this.client.client_id = response.data.user_id
      console.log(this.medocList)
      console.log(this.medocList[0].nom_medicament)
      this.validateOrdo = "Trouvé"
      this.displaySaveButton = true
    },
    removeMedicament(index){
        event.preventDefault()
        this.medocList.splice(index, 1)
    },
    submitOrdo(){
        event.preventDefault()
        console.log(this.me)
        const ordo = {
          medecin_id : this.medecin.med_id,
          client_id : this.client.client_id,
          medicaments : this.medocList,
          pharma_id : this.pharmacien.pharmacien_id
        }
        console.log(ordo)
        this.displaySuccess = true
        
    },
    successButton(){
      window.location.reload()
    }
  },
  mounted() {
      this.pharmacien.pharmacien_id = localStorage.getItem("id")
      console.log(this.pharmacien.pharmacien_id)
    },
};
</script>

<style>

#OrdoResearch{
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

#OrdoResearch h1 {
  height:30px;
}

#ResearchInput{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

#ResearchInput button{
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

#MedicamentList{
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

#Medicament{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

#MedicamentInput{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom : 10px;
}

#MedicamentInfo{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#supprButton {
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
