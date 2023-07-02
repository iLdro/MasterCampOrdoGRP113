<template>
  <div class="home">
    <ShopHome />
  </div>
  <br />
  <br />
  <br />
  <div class="Text">
    
     <h2> Fini les tracas liés à la perte ou à l'oubli de vos ordonnances papier, notre solution vous offre une alternative pratique et sécurisée. 
      Grâce à notre plateforme en ligne, vous pourrez facilement accéder à vos ordonnances de manière dématérialisée, 
      les rendant ainsi disponibles à tout moment et depuis n'importe quel appareil connecté à Internet.</h2><br /><br />
    
    
      <h2>Notre objectif est de simplifier votre parcours de santé en vous permettant de gérer vos ordonnances de manière efficace et moderne. 
        Notre site internet offre une interface conviviale et intuitive, où vous pourrez télécharger, stocker et consulter vos ordonnances en quelques clics. 
        De plus, notre système de sécurité avancé garantit la confidentialité de vos données médicales, assurant ainsi la protection de votre vie privée.</h2><br /><br />

    <h2>En choisissant notre service de dématérialisation des ordonnances, vous contribuez également à la préservation de l'environnement en réduisant l'utilisation de papier. 
      Nous croyons en l'importance de la transition vers des solutions numériques dans le domaine de la santé, et c'est pourquoi nous avons développé cette plateforme innovante. 
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


.best-selling {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: rgb(0, 0, 0);
}
.card {
  position: relative;
  width: 300px;
  height: 350px;
  background: rgb(238, 237, 237);
  border-radius: 100px;
  background-color: rgba(71, 70, 70, 0.13);
}
.cardb {
  position: relative;
  width: 300px;
  height: 350px;
  background: rgb(238, 237, 237);
  border-radius: 100px;
  background-color: rgba(71, 70, 70, 0.13);
}

.card .imgBox {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
  z-index: 1;
}
.cardb .imgBox {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  z-index: 1;
}

.card .imgBox img {
  max-width: 75%;
}
.cardb .imgBox img {
  max-width: 75%;
}
.Text{
  color: rgb(0, 0, 0);
  width: 80%;
  margin-left: 10%;
  font-family: 'Montserrat', sans-serif;
}
</style>
