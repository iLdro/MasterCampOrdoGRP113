<template>
  <h1>ALED</h1>
  <br>
  <div class="card">
      <div class="imgBox">
        <img :src="product.image" />
      </div>
      <div class="contentBox">
        <div class="price">
          category: {{ product.category }}, <br />
          name: {{ product.name }}
        </div>
        <div class="rating">rating : 4/5</div>
      </div>
    </div>
</template>

<script>
import ProductService from "@/services/ProductService";
export default {
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },
  created() {
    ProductService.getProduct(this.id)
      .then((response) => {
        this.Product = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
