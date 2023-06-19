<template>
  <div id="body">
    <h1>Validation en attente</h1>
    <div id="PSComponent">
      <div id ="PSInfo">
        <div id="nom">Ps.name Ps.firstname</div>
        <div id="adress">Ps.numberStreet Ps.street</div>
        <div id="city">Ps.city Ps.postalCode</div>
      </div>
      <div id="mailRPPS">
        <div id="email">mail : Ps.email</div>
        <div id="numRPPS">RPPS : Ps.RPPS</div>
      </div>
      <div id="buttons">
        <button onclick="ValidatePS({{Ps._id}})">Valider</button>
        <button>Refuser</button>
      </div>
    </div>

    <div id="PSComponent" v-for="Ps in PSList" :key="Ps">
      <div id="nom">{{Ps.name}} {{Ps.firstname}}</div>
      <div id="adress">{{Ps.numberStreet}} {{Ps.street}}</div>
      <div id="city">{{Ps.city}} {{Ps.postalCode}}</div>
      <div id="email">{{Ps.email}}</div>
      <div id="numRPPS">{{Ps.RPPS}}</div>
      <div>
        <button>Valider</button>
        <button>Refuser</button>
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
      PSList: []
    }
  },
  methods: {
    async fetchMed(){
      const MedList = await axios.get('http://localhost:8080/admin/pendingMed')
      this.PSList += MedList.data
    },
    async fetchPharma(){
      const PharmaList = await axios.get('http://localhost:8080/admin/pendingPharmacien')
      this.PSList += PharmaList.data
    },
    async ValidatePs(_id){
      const PsId = _id;
      const response = await axios.post('http://localhost:8080/admin/validatePs', {PsId})
      console.log(response)
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
  width: 60%;
}

#PSInfo, #mailRPPS, #buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}



</style>