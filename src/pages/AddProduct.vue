<template>
  <layout-app>
    <div>
      <v-breadcrumbs divider=">" :items="breadcrumbs" />

      <h1>Adicionar Produto</h1>

      <product-form :initialValues="formProduct" :onSubmit="handleCreate" />
    </div>
  </layout-app>
</template>

<script>
import LayoutApp from "@/components/LayoutApp.vue";
import ProductForm from "@/components/ProductForm.vue";
import api from "@/services/api";

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

    formProduct: {
      name: "",
      brand: "",
      price: "",
      color: "",
      createdAt: "",
      productImg: "",
      productObj: "",
    },
  }),
  methods: {
    async handleCreate() {
      const file = new FormData();

      file.append("file", this.formProduct.productObj);
      file.append("name", this.formProduct.name);
      file.append("brand", this.formProduct.brand);
      file.append(
        "price",
        parseFloat(this.formProduct.price.toString().replace(",", "."))
      );
      file.append("color", this.formProduct.color);
      file.append(
        "created_at",
        new Date(
          this.formProduct.createdAt.split("/").reverse().join("-")
        ).toISOString()
      );

      try {
        await api.post("product", file);

        this.$router.push("/listar-produtos");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 16px;
}
</style>
