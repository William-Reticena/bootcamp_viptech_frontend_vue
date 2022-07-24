<template>
  <div class="form-wrapper">
    <v-form>
      <v-text-field
        color="#0F4C81"
        dense
        label="Nome do Produto"
        outlined
        placeholder="Digite o nome do produto"
        v-model="formProduct.name"
        @change="$v.formProduct.name.$touch()"
        :error-messages="
          $v.formProduct.name.$error ? 'Este campo é obrigatório!' : ''
        "
      />

      <v-text-field
        color="#0F4C81"
        dense
        label="Marca"
        outlined
        placeholder="Digite a marca do produto"
        v-model="formProduct.brand"
        @change="$v.formProduct.brand.$touch()"
        :error-messages="
          $v.formProduct.brand.$error ? 'Este campo é obrigatório!' : ''
        "
      />

      <div class="inputs-wrapper">
        <v-text-field
          prefix="R$"
          color="#0F4C81"
          dense
          label="Valor"
          outlined
          placeholder="000,00"
          v-model="formProduct.price"
          @change="$v.formProduct.price.$touch()"
          :error-messages="
            $v.formProduct.price.$error ? 'Este campo é obrigatório!' : ''
          "
        />

        <v-select
          color="#0F4C81"
          dense
          :items="options"
          label="Cor"
          outlined
          v-model="formProduct.color"
          @change="$v.formProduct.color.$touch()"
          :error-messages="
            $v.formProduct.color.$error ? 'Este campo é obrigatório!' : ''
          "
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
import { required, helpers } from "vuelidate/lib/validators";

const onlyNumbers = helpers.regex(
  "onlyNumbers",
  /(^[0-9]*(,|\.)?([0-9]{0,2})?$)(?![A-Za-z])/
);
// const onlyNumbers = helpers.withMessage(
//   () => "sosdf",
//   helpers.regex("onlyNumbers", /(^[0-9]*(,|\.)?([0-9]{0,2})?$)(?![A-Za-z])/)
// );

export default {
  name: "ProductForm",
  props: ["initialValues", "onSubmit"],

  created() {
    this.formProduct = this.initialValues;
    (this.date = this.formProduct.createdAt
      ? new Date(this.formProduct.createdAt).toISOString().substr(0, 10)
      : new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)),
      (this.formProduct.createdAt = this.date.split("-").reverse().join("/"));
    this.img = this.formProduct.productObj
      ? this.formProduct.productObj
      : addPhoto;
  },

  data() {
    return {
      img: "",
      options: ["Branco", "Preto", "Azul"],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
      formProduct: {},
    };
  },

  validations() {
    return {
      formProduct: {
        name: { required },
        brand: { required },
        price: {
          required,
          onlyNumbers,
        },
        color: { required },
      },
    };
  },

  methods: {
    submitForm() {
      this.$v.$touch();

      if (!this.$v.$error) {
        this.onSubmit();
      }
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
