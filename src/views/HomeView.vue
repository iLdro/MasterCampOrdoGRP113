<template>
  <div class="home">
    <ShopHome />
  </div>
  <br />
  <br />
  <br />
  <div class="Text">
    
     <h2> Fini les tracas liés à la perte ou à l'oubli de vos ordonnances papier: Ordolib vous offre une alternative pratique et sécurisée. 
      Grâce à notre plateforme en ligne, vous pourrez facilement accéder à vos ordonnances de manière dématérialisée, 
      les rendant ainsi disponibles à tout moment et depuis n'importe quel appareil connecté à Internet.</h2><br /><br />
    
    
      <h2>Notre objectif est de simplifier votre parcours de santé en vous permettant de gérer vos ordonnances de manière efficace et moderne. 
        Notre site internet offre une interface conviviale et intuitive, où vous pourrez consulter vos ordonnances en quelques clics. 
        De plus, notre système de sécurité avancé garantit la confidentialité de vos données médicales, assurant ainsi la protection de votre vie privée.</h2><br /><br />

    <h2>En choisissant notre service de dématérialisation des ordonnances, vous contribuez également à la préservation de l'environnement en réduisant l'utilisation de papier. 
      Nous croyons en l'importance de la transition vers des solutions numériques dans le domaine de la santé. 
      Rejoignez-nous dès aujourd'hui et découvrez les avantages pratiques et écologiques de la dématérialisation des ordonnances médicales.</h2><br /><br />
  </div>
</template>

<script>
import ShopHome from "@/components/ShopHome.vue";
export default {
  name: "HomeView",
  components: { ShopHome },
};
</script>

<style scoped>
h1 {
  color: rgb(0, 0, 0);
}


.home{
  margin-top: 3%;
}

.Text{
  color: rgb(0, 0, 0);
  width: 80%;
  margin-left: 10%;
  font-family: 'Montserrat', sans-serif;
}
</style>
