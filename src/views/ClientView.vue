<template>
  <div>
    <header>
      
      
      <button v-on:click="navigateTo('products')">Listes d'ordonnances</button> 
      <button v-on:click="navigateTo('cart')">Filtre liste</button>
    </header>
    
    <div v-if="page === 'cart'">
      <OrdoFilter  />
    </div>

    <div v-if="page === 'products'">
      <OrdoFull />
    </div>
  </div>
</template>

<script>
import OrdoFilter from "@/components/OrdoFilter.vue";
import OrdoFull from "@/components/OrdoFull.vue";


export default {
  name: "App",
  data: () => {
    return {
      page: "products",
      cart: [],
      sum: 0,
      products: null,
    };
  },
  methods: {
    
    navigateTo(page) {
      this.page = page;
    },
  },
  components: { OrdoFull, OrdoFilter },
  
};
</script>

<style scoped>
header {

  height: 100px;
  text-align: center;
  font-size: 30px;
  padding-top: 20px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
}
header button {
  margin-top: 10px;
  padding: 10px 20px;
  height: 50px;
  background-image: linear-gradient(to right, #00a38c, #0054a3);
  color: #ffff;
  border-radius: 10px;
  cursor: pointer;
  border: 0px;
}
</style>
