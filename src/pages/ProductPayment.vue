<template>
  <layout-app>
    <div>
      <v-breadcrumbs divider=">" :items="breadcrumbs" />
    </div>

    <div class="main">
      <div class="box-shopping">
        <h1>Carrinho</h1>

        <v-card>
          <div class="box-product">
            <v-img src="" />
          </div>

          <div class="box-product-info">
            <p>produto nome</p>

            <p>Produto marca</p>

            <p>Produto produto cor</p>
          </div>

          <v-divider />

          <div class="box-qtd">
            <div class="box-qtd-inner">
              <p>Quantidade:</p>

              <v-btn> decrementar</v-btn>
              <v-text-field />
              <v-btn> incrementar</v-btn>
            </div>
            <p>R$ 300</p>
          </div>
        </v-card>
      </div>

      <div>
        <h1>Resumo do Pedido</h1>

        <v-card class="card-order-summary" outlined>
          <div class="box-order-summary">
            <p>Subtotal</p>
            <p>R$ 300</p>
          </div>

          <v-divider />

          <div class="box-order-summary">
            <p>Frete</p>
            <p>R$ 30</p>
          </div>

          <v-divider />

          <div class="box-order-summary">
            <p>Valor Total</p>
            <p>R$ 300</p>
          </div>

          <v-btn>Pagar</v-btn>
        </v-card>

        <v-card class="card-payment-finished" outlined>
          <p><strong>Pagamento realizado com Sucesso!</strong></p>

          <p>Este pagamento foi realizado com</p>

          <p><strong>3 cédulas</strong> de <strong>R$ 100,00</strong></p>
        </v-card>
      </div>
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

<style>
.main {
  display: flex;
  gap: 32px;
}

.box-shopping {
  flex-grow: 1;
}

.card-order-summary {
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: 260px;
  justify-content: center;
  padding: 16px;
  width: 320px;
}

.box-product {
  display: flex;
  padding: 8px 0 8px;
}

.box-product-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
}

.box-qtd {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
}

.box-qtd-inner {
  align-items: center;
  display: flex;
  margin-left: 16px;
}

.box-order-summary {
  display: flex;
  justify-content: space-between;
}

.card-payment-finished {
  border: 1px solid green;
  margin-top: 8px;
  padding: 10px;
}
</style>
