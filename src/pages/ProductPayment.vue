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
            <div class="img-div">
              <v-img
                contain
                height="100"
                :src="product.img ? product.img : img"
              />
            </div>

            <div class="box-product-info">
              <p class="typoProductName">{{ product.name }}</p>

              <p>{{ product.brand }}</p>

              <p>Cor: {{ product.color }}</p>
            </div>
          </div>

          <v-divider />

          <div class="box-qtd">
            <div class="box-qtd-inner">
              <p>Quantidade:</p>

              <v-btn :disabled="isPurchased" icon @click="decrement">
                <v-icon>mdi-minus-circle-outline</v-icon>
              </v-btn>

              <div class="text-field">
                <v-text-field
                  autofocus
                  color="#0F4C81"
                  :disabled="isPurchased"
                  hide-details
                  outlined
                  dense
                  @input="handleChange"
                  @blur="handleBlur"
                  v-model="qtd"
                  :key="key"
                />
              </div>

              <v-btn :disabled="isPurchased" icon @click="increment">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </v-btn>
            </div>
            <p>R$ {{ format(product.price) }}</p>
          </div>
        </v-card>
      </div>

      <div>
        <h1 class="title-page">Resumo do Pedido</h1>

        <v-card class="card-order-summary" outlined>
          <div class="box-order-summary">
            <p>Subtotal {{ qtdItem }}</p>
            <p>R$ {{ format(subtotal) }}</p>
          </div>

          <v-divider />

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <div class="box-order-summary">
                <p>
                  Frete
                  <v-icon v-on="on" v-bind="attrs" color="red" small>
                    mdi-information
                  </v-icon>
                </p>

                <p>R$ {{ format(shipping) }}</p>
              </div>
            </template>
            <span>Preço calculado em 10% do valor produto</span>
          </v-tooltip>

          <v-divider />

          <div class="box-order-summary">
            <p>Valor Total</p>
            <p>R$ {{ format(total) }}</p>
          </div>

          <v-btn
            class="payment"
            color="#0F4C81"
            :disabled="isPurchased"
            @click="handlePurchase"
          >
            Pagar
          </v-btn>
        </v-card>

        <v-card v-show="isPurchased" class="card-payment-finished" outlined>
          <p class="payment-success">
            <strong>Pagamento realizado com Sucesso!</strong>
          </p>

          <p class="amount-notes">Este pagamento foi realizado com</p>

          <p v-for="note in bankNotes" :key="note.bankNote" class="money-bill">
            <strong>
              {{ note.amount }}
              {{
                plural(note.amount, note.bankNote !== 1 ? "cédula" : "moeda")
              }}
            </strong>
            de
            <strong>R$ {{ note.bankNote }},00</strong>
          </p>
        </v-card>
      </div>
    </div>
  </layout-app>
</template>

<script>
import LayoutApp from "@/components/LayoutApp.vue";
import api from "@/services/api";
import addPhoto from "@/assets/Add_photo_alternate.png";
import formatNumber from "@/utils/formatNumber";
import countNumberNotes from "@/utils/countNumberNotes";
import isPlural from "@/utils/isPlural";

export default {
  name: "ProductPayment",

  created() {
    this.getById(this.$route.params);
  },

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
    product: {},
    img: addPhoto,
    qtd: 1,
    bankNotes: [],
    isPurchased: false,
    key: 1,
  }),

  methods: {
    async getById({ id }) {
      try {
        const { data } = await api.get(`/product/${id}`);

        this.product = data;
      } catch (error) {
        console.log(error);
      }
    },

    format(price) {
      return formatNumber(price);
    },

    plural(amount, word) {
      return isPlural(amount, word);
    },

    decrement() {
      if (this.qtd > 1) this.qtd -= 1;
    },

    increment() {
      this.qtd += 1;
    },

    handlePurchase() {
      this.bankNotes = countNumberNotes(this.total);

      this.isPurchased = true;
    },

    handleBlur(event) {
      if (event.target.value === "") this.qtd = 1;
    },

    handleChange(event) {
      this.qtd = event;

      if (parseInt(event) <= 0 || isNaN(event) || /\./.test(event)) {
        this.qtd = 1;
        // this.key +=  ;
      }
    },
  },

  computed: {
    subtotal() {
      return this.product.price * this.qtd;
    },

    shipping() {
      return this.subtotal * 0.1;
    },

    total() {
      return this.subtotal + this.shipping;
    },

    qtdItem() {
      return this.qtd ? `(${this.qtd} ${isPlural(this.qtd, "item")})` : "";
    },
  },
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

.img-div {
  width: 100px;
}

p {
  margin: 0;
}

.box-product-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin-left: 24px;
}

.typoProductName {
  font-size: 1.2em;
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
