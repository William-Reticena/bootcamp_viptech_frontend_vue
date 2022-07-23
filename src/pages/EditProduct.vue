<template>
  <layout-app>
    <div>
      <v-breadcrumbs divider=">" :items="breadcrumbs" />

      <h1>Editar Produto</h1>

      <product-form
        v-if="Object.keys(formProduct).length"
        :initialValues="formProduct"
        :onSubmit="handleEdit"
      />
    </div>
  </layout-app>
</template>

<script>
import LayoutApp from "@/components/LayoutApp.vue";
import ProductForm from "@/components/ProductForm.vue";
import api from "@/services/api";
import formatNumber from "@/utils/formatNumber";

export default {
  name: "EditProduct",

  created() {
    this.getById(this.$route.params);
  },

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

    formProduct: {},
  }),
  methods: {
    async handleEdit() {
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
        await api.put(`product/${this.formProduct.id}`, file);

        this.$router.push("/listar-produtos");
      } catch (error) {
        console.log(error);
      }
    },

    async getById({ id }) {
      try {
        const { data } = await api.get(`/product/${id}`);

        this.formProduct = {
          id: data.id,
          name: data.name,
          brand: data.brand,
          price: formatNumber(data.price),
          color: data.color,
          createdAt: data.created_at,
          productObj: data.img,
        };

        console.log(this.formProduct);
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
