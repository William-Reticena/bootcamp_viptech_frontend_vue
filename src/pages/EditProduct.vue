<template>
  <layout-app>
    <div>
      <v-breadcrumbs divider=">" :items="breadcrumbs" />

      <h1>Editar Produto</h1>

      <product-form />
    </div>
  </layout-app>
</template>

<script>
import LayoutApp from "@/components/LayoutApp.vue";
import ProductForm from "@/components/ProductForm.vue";

export default {
  name: "EditProduct",
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
      { text: "Editar Produto" },
    ],
  }),
};
</script>

<style scoped>
h1 {
  margin-bottom: 16px;
}
</style>
