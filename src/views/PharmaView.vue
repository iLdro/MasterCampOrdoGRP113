<template>
  
  <div id="body">
    <header>
      <form id="OrdoResearch">
        <h1>Find your ordonnance</h1>
        <div>
          <label>Numéro de l'ordonnance</label>
          <div id="ResearchInput">
            <input id="ordoNum" type="text" placeholder="numéro de l'ordonnance">
            <button @click="fetchOrdo()">{{validateOrdo}}</button>
          </div>
        </div>
      </form>
    </header>

    <form>

    </form>

  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "GuestView",
  data(){
    return{
      validateOrdo: "Chercher"
    }
  }, 
  methods: {
    async fetchOrdo(){
      this.validateOrdo = "Trouvé"
    }
  }
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

</style>
