<template>
  <layout-app>
    <div class="main">
      <v-breadcrumbs divider=">" :items="breadcrumbs" />
    </div>
  </layout-app>
</template>

<script>
import LayoutApp from "@/components/LayoutApp.vue";

export default {
  name: "ProductPayment",
  components: {
    LayoutApp,
  },
  data: () => ({
    breadcrumbs: [
      {
        text: "Home",
        href: "/listar-produtos",
      },
      { text: "Carrinho" },
    ],
  }),
};
</script>

<style></style>
