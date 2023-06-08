<template>
  <div class="home">
    <ShopHome />
  </div>
  <br />
  <br />
  <br />
  <div>
    <h1>Souvent achetés</h1>
    <br>
    <div class="best-selling">
      <div class="card">
        <div class="imgBox">
          <img
            src="https://pharmaciedelaplage-cavalaire.fr/wp-content/uploads/sites/17/2022/11/image_produit-268045_411605478.png"
          />
        </div>
        <div class="contentBox">
          <div class="price">Doliprane, 2.50€</div>
        </div>
      </div>
      <div class="cardb">
        <div class="imgBox">
          <img
            src="https://www.biafine-lagamme.fr/sites/biafine_fr/files/styles/product_image/public/product-images/soleilbiafine-emulsion-visage-fps50-1.png"
          />
        </div>
        <div class="contentBox">
          <br />
          <div class="price">Biafine, 2€</div>
        </div>
      </div>
      <div class="card">
        <div class="imgBox">
          <img
            src="https://pharmaciecroixrouge.fr/wp-content/uploads/sites/23/2022/12/image_produit-260644_536444385.png"
          />
        </div>
        <div class="contentBox">
          <br />
          <br />
          <div class="price">Nurofen, 4.50€</div>
        </div>
      </div>
      <div class="card">
        <div class="imgBox">
          <img
            src="https://www.pharmashopi.com/images/Image/Efferalgan-1g-agrumes-comprime-effervescent-8-com.png"
          />
        </div>
        <div class="contentBox">
          <br />
          <div class="price">Efferalgan, 5.50€</div>
        </div>
      </div>
      <div class="card">
        <div class="imgBox">
          <img
            src="https://www.mon-pharmacien-conseil.com/14478-home_default/smecta-boite-de-60-sachets-arome-orange-vanille.jpg"
          />
        </div>
        <div class="contentBox">
          <div class="price">Smecta, 4€</div>
        </div>
      </div>
    </div>
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
</style>
