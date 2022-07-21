<template>
  <div class="form-wrapper">
    <v-form>
      <v-text-field
        autofocus
        color="#0F4C81"
        dense
        label="Nome do Produto"
        outlined
      />

      <v-text-field color="#0F4C81" dense label="Marca" outlined />

      <div class="inputs-wrapper">
        <v-text-field color="#0F4C81" dense label="Valor" outlined />

        <v-select color="#0F4C81" dense :items="options" label="Cor" outlined />

        <v-menu
          v-model="menu2"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              color="#0F4C81"
              dense
              v-model="date"
              label="Data de Cadastro"
              prepend-inner-icon="mdi-calendar"
              outlined
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>

          <v-date-picker
            color="#0F4C81"
            v-model="date"
            @input="menu2 = false"
          />
        </v-menu>

        <div class="img-box">
          <v-img height="110" contain src="@/assets/fakeData/img/IM3-1.png" />
        </div>

        <v-btn block color="#0f4c81">Adicionar Produto</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "ProductForm",
  data: () => ({
    options: ["Branco", "Preto", "Azul"],
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu2: false,
  }),
};
</script>

<style scoped>
.form-wrapper,
.inputs-wrapper {
  width: 50%;
}

.img-box {
  cursor: pointer;
  border: 1px dashed #d9d9d9;
  height: 110px;
  width: 110px;
}

.v-btn {
  color: #ffffff;
  margin-top: 32px;
}
</style>
