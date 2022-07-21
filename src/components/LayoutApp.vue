<template>
  <v-container fluid>
    <v-row>
      <v-app-bar app color="#0F4C81" height="100">
        <img :src="img" />
      </v-app-bar>

      <v-row class="row-2">
        <v-col cols="2" />

        <v-col cols="8"><slot /></v-col>

        <v-col cols="2" />
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import logo from "../assets/Logo-Viptech.png";

export default {
  name: "LayoutApp",
  data: () => ({
    img: logo,
  }),
};
</script>

<style>
.v-toolbar__content {
  justify-content: center;
}

.row-2 {
  margin-top: 100px;
}
</style>
