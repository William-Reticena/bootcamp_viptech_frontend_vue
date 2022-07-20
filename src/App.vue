<template>
  <v-app>
    <layout-app>
      <div class="wrapper">
        <div>
          <h1>Produtos</h1>
        </div>

        <v-btn color="#0f4c81">
          <v-icon color="#FFFFFF" left> mdi-cancel </v-icon>
          Adicionar Produto
        </v-btn>
      </div>
    </layout-app>
  </v-app>
</template>

<script>
import LayoutApp from "./components/LayoutApp.vue";
export default {
  name: "App",

  components: { LayoutApp },

  data: () => ({
    //
  }),
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
