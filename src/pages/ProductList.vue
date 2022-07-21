<template>
  <layout-app>
    <div class="wrapper">
      <div>
        <h1>Produtos</h1>
      </div>

      <v-btn color="#0f4c81" @click="$router.push('/adicionar-produto')">
        <v-icon left> mdi-plus-circle </v-icon>
        Adicionar Produto
      </v-btn>
    </div>
    <product-card />
  </layout-app>
</template>

<script>
import LayoutApp from "@/components/LayoutApp.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductList",
  components: {
    LayoutApp,
    ProductCard,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 56px;
}

.v-btn {
  color: #ffffff;
}
</style>
