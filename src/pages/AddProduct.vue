<template>
  <layout-app>
    <div class="main">
      <v-breadcrumbs divider=">" :items="breadcrumbs" />

      <h1>Adicionar Produto</h1>

      <product-form />
    </div>
  </layout-app>
</template>

<script>
import LayoutApp from "@/components/LayoutApp.vue";
import ProductForm from "@/components/ProductForm.vue";

export default {
  name: "AddProduct",
  components: {
    LayoutApp,
    ProductForm,
  },
  data: () => ({
    breadcrumbs: [
      {
        text: "Home",
        href: "/listar-produtos",
      },
      { text: "Adicionar Produto" },
    ],
  }),
};
</script>

<style scoped>
h1 {
  margin-bottom: 16px;
}
</style>
