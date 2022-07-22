import Vue from "vue";
import VueRouter from "vue-router";
import AddProduct from "@/pages/AddProduct";
import EditProduct from "@/pages/EditProduct";
import ListProducts from "@/pages/ProductList.vue";
import ProductPayment from "@/pages/ProductPayment";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/listar-produtos",
    },
    {
      path: "/listar-produtos",
      component: ListProducts,
    },
    {
      path: "/adicionar-produto",
      component: AddProduct,
    },
    {
      path: "/editar-produto",
      component: EditProduct,
    },
    {
      path: "/pagamento/:id",
      component: ProductPayment,
    },
  ],
});
