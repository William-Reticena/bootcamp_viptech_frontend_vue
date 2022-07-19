<template>
  <v-container fluid>
    <v-app-bar app color="#0F4C81">
      <img :src="img" />
    </v-app-bar>

    <v-row>
      <v-col cols="2">coluna 1</v-col>
      <v-col cols="8"></v-col>
      <v-col cols="2">coluna 1</v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from "../assets/Logo-Viptech.png";

export default {
  name: "LayoutApp",
  data() {
    return {
      img: logo,
    };
  },
};
</script>

<style>
.v-toolbar__content {
  justify-content: center;
}
</style>
