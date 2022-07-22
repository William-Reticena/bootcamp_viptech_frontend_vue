<template>
  <div class="form-wrapper">
    <v-form>
      <v-text-field
        color="#0F4C81"
        dense
        label="Nome do Produto"
        outlined
        v-model="formProduct.name"
      />

      <v-text-field
        color="#0F4C81"
        dense
        label="Marca"
        outlined
        v-model="formProduct.brand"
      />

      <div class="inputs-wrapper">
        <v-text-field
          color="#0F4C81"
          dense
          label="Valor"
          outlined
          v-model="formProduct.price"
        />

        <v-select
          color="#0F4C81"
          dense
          :items="options"
          label="Cor"
          outlined
          v-model="formProduct.color"
        />

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
              v-model="formProduct.createdAt"
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
            @change="handleTimeChange"
          />
        </v-menu>

        <div class="img-box" @click="handleImgClick">
          <v-img height="100" contain :src="img" ref="photoRef" />
          <input type="file" hidden ref="fileRef" />
        </div>

        <v-btn block color="#0f4c81" @click="submitForm"
          >Adicionar Produto</v-btn
        >
      </div>
    </v-form>
  </div>
</template>

<script>
import addPhoto from "@/assets/Add_photo_alternate.png";

export default {
  name: "ProductForm",
  props: ["initialValues", "onSubmit"],
  created() {
    this.formProduct = this.initialValues;
    this.formProduct.createdAt = this.date.split("-").reverse().join("/");
  },
  data: () => ({
    img: addPhoto,
    options: ["Branco", "Preto", "Azul"],
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu2: false,
    formProduct: {},
  }),
  methods: {
    submitForm() {
      this.onSubmit();
    },

    handleImgClick() {
      const reader = new FileReader();
      this.$refs.fileRef.click();

      this.$refs.fileRef.addEventListener("change", () => {
        reader.onload = () => {
          this.img = URL.createObjectURL(this.$refs.fileRef.files[0]);

          this.formProduct.productObj = this.$refs.fileRef.files[0];
        };

        reader.readAsDataURL(this.$refs.fileRef.files[0]);
      });
    },

    handleTimeChange() {
      this.formProduct.createdAt = this.date.split("-").reverse().join("/");
    },
  },
};
</script>

<style scoped>
.form-wrapper,
.inputs-wrapper {
  width: 50%;
}

.img-box {
  align-items: center;
  cursor: pointer;
  display: flex;
  border: 1px dashed #d9d9d9;
  height: 110px;
  width: 110px;
}

.v-btn {
  color: #ffffff;
  margin-top: 32px;
}
</style>
