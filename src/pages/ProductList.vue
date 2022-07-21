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
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </layout-app>
</template>

<script>
import api from "@/services/api/index";
import LayoutApp from "@/components/LayoutApp.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductList",
  created() {
    this.getProducts();
  },
  data: () => ({
    products: [],
  }),
  components: {
    LayoutApp,
    ProductCard,
  },
  methods: {
    async getProducts() {
      try {
        const { data } = await api.get("/product");
        this.products = data;
      } catch (error) {
        console.log(error);
      }
    },
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
