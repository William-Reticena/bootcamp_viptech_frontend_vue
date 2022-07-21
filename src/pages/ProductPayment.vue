<template>
  <layout-app>
    <div>
      <v-breadcrumbs divider=">" :items="breadcrumbs" />
    </div>

    <div class="main">
      <div class="box-shopping">
        <h1 class="title-page">Carrinho</h1>

        <v-card class="card-product-main" outlined>
          <div class="box-product">
            <div>
              <v-img
                contain
                height="100"
                src="@/assets/fakeData/img/IM3-1.png"
              />
            </div>

            <div class="box-product-info">
              <p>produto nome</p>

              <p>Produto marca</p>

              <p>Produto produto cor</p>
            </div>
          </div>

          <v-divider />

          <div class="box-qtd">
            <div class="box-qtd-inner">
              <p>Quantidade:</p>

              <v-btn icon><v-icon>mdi-minus-circle-outline</v-icon></v-btn>

              <div class="text-field">
                <v-text-field color="#0F4C81" hide-details outlined dense />
              </div>

              <v-btn icon><v-icon>mdi-plus-circle-outline</v-icon></v-btn>
            </div>
            <p>R$ 300</p>
          </div>
        </v-card>
      </div>

      <div>
        <h1 class="title-page">Resumo do Pedido</h1>

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

          <v-btn class="payment" color="#0F4C81">Pagar</v-btn>
        </v-card>

        <v-card class="card-payment-finished" outlined>
          <p class="payment-success">
            <strong>Pagamento realizado com Sucesso!</strong>
          </p>

          <p class="amount-notes">Este pagamento foi realizado com</p>

          <p class="money-bill">
            <strong>3 cédulas</strong> de <strong>R$ 100,00</strong>
          </p>
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

<style scoped>
.main {
  display: flex;
  gap: 32px;
}

.box-shopping {
  flex-grow: 1;
}

.title-page {
  margin-bottom: 16px;
}

.card-product-main {
  padding: 8px 32px;
}

.card-order-summary {
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: 260px;
  justify-content: space-between;
  padding: 16px;
  width: 350px;
}

.box-product {
  display: flex;
  padding: 8px 0 8px;
}

p {
  margin: 0;
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
  margin: 43px 0;
}

.box-qtd-inner {
  align-items: center;
  display: flex;
  margin-left: 16px;
}

.text-field {
  width: 45px;
}

.box-order-summary {
  display: flex;
  justify-content: space-between;
}

.payment {
  color: #ffffff;
}

.card-payment-finished {
  border: 1px solid green;
  margin-top: 8px;
  padding: 10px;
}

.payment-success,
.money-bill {
  color: green;
  text-align: center;
}

.amount-notes {
  color: green;
  font-size: 0.9em;
  margin: 8px 0;
  text-align: center;
}
</style>
