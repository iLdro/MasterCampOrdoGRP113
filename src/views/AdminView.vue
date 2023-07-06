<template>
  <div id="body">
    <h1>Validation en attente</h1>
    <div id="separation">
      <div id="Medecin">
        <h2>Médecin</h2>
        <div id="PSComponent" v-for="Med in MedList" :key="Med">
          <div id ="PSInfo">
            <div id="nom">{{Med.name}} {{Med.firstname}}</div>
            <div id="adress">{{Med.numberStreet}} {{Med.street}}</div>
            <div id="city">{{Med.city}} {{Med.postalCode}}</div>
          </div>
          <div id="mailRPPS">
            <div id="email">{{Med.email}}</div>
            <div id="numRPPS">{{Med.RPPS}}</div>
          </div>
          <div id="buttons">
            <button @click="ValidatePsMed(Med._id)">Valider</button>
            <button @click="ValidatePsMed(Med._id)">Refuser</button>
          </div>
        </div>
      </div>
      
      <div id="Pharmacie">
        <h2>Pharmacie</h2>
        <div id="PSComponent" v-for="Pharma in PharmaList" :key="Pharma">
          <div id ="PSInfo">
            <div id="nom">{{Pharma.name}} {{Pharma.firstname}}</div>
            <div id="adress">{{Pharma.numberStreet}} {{Pharma.street}}</div>
            <div id="city">{{Pharma.city}} {{Pharma.postalCode}}</div>
          </div>
          <div id="mailRPPS">
            <div id="email">{{Pharma.email}}</div>
            <div id="numRPPS">{{Pharma.RPPS}}</div>
          </div>
          <div id="buttons">
            <button @click="ValidatePsPharma(Pharma._id)">Valider</button>
            <button @click="DeclinePsPharma(Pharma._id)">Refuser</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'AdminViewPage',
  data(){
    return {
      MedList: [],
      PharmaList: [],
    }
  },
  methods: {
    async fetchMed(){
      const MedListFetched = await axios.get('http://localhost:5000/admin/pendingMed')
      console.log(MedListFetched.data)
      this.MedList = MedListFetched.data
    },
    async fetchPharma(){
      const PharmaListFetched = await axios.get('http://localhost:5000/admin/pendingPharmacien')
      this.PharmaList = PharmaListFetched.data
    },
    async ValidatePsMed(_id){
      const PsId = {
        id : _id
      }
      console.log(PsId)
      const response = await axios.post('http://localhost:5000/admin/acceptMed', PsId)
      console.log(response)
      window.location.reload()
    }, 
    async ValidatePsPharma(_id){
      const PsId = {
        id : _id
      }
      console.log(PsId)
      const response = await axios.post('http://localhost:5000/admin/acceptPharmacien', PsId)
      console.log(response)
      window.location.reload()
    },
    async DeclinePsMed(_id){
      const PsId = {
        id : _id
      }
      console.log(PsId)
      const response = await axios.post('http://localhost:5000/admin/declineMed', PsId)
      console.log(response)
      window.location.reload()
    },
    async DeclinePsPharma(_id){
      const PsId = {
        id : _id
      }
      console.log(PsId)
      const response = await axios.post('http://localhost:5000/admin/declinePharmacien', PsId)
      console.log(response)
      window.location.reload()
    }

  },
  async mounted(){
    await this.fetchMed()
    await this.fetchPharma()
  } 
}
</script>
<style>

#body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  padding: auto;
  margin-top: 3%;
}

#PSComponent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  background-color: rgba(255, 255, 255, 0.13);
  padding: 30px;
  width: auto;
  margin-bottom: 20px;
}

#PSInfo, #mailRPPS, #buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

#separation {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}

#Medecin, #Pharmacie {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: auto;
}

h1{
  margin-bottom: 30px;
}

h2{
  margin-bottom: 20px;
}

</style>