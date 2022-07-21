<template>
  <v-card class="card" elevation="4">
    <v-card class="card-img" elevation="0">
      <v-img contain height="110" :src="product.img" />
    </v-card>

    <div class="product-info">
      <p class="product-name">{{ product.name }}</p>
      <p>{{ product.brand }}</p>
      <p class="product-price">{{ product.price }}</p>
      <p>Cor: {{ product.color }}</p>
    </div>

    <div class="actions-buttons">
      <v-btn
        class="fab"
        color="#0f4c81"
        fab
        small
        @click="$router.push('/pagamento')"
      >
        <v-icon> mdi-cart </v-icon>
      </v-btn>

      <v-btn
        class="fab"
        color="#0f4c81"
        fab
        small
        @click="$router.push('/editar-produto')"
      >
        <v-icon> mdi-pencil </v-icon>
      </v-btn>

      <v-btn class="fab" color="error" fab small @click.stop="dialog = true">
        <v-icon> mdi-delete </v-icon>
      </v-btn>
    </div>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { products } from "../assets/fakeData/products/products";

export default {
  name: "ProductCard",
  data: () => ({
    product: {
      img: products[0].img,
      name: products[0].name,
      brand: products[0].brand,
      price: products[0].price,
      color: products[0].color,
    },
    dialog: false,
  }),
};
</script>

<style scoped>
.card {
  display: flex;
  margin-top: 24px;
  padding: 16px;
}

.card-img {
  margin-right: 32px;
  width: 130px;
}

.product-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
}

p {
  margin: 0;
}

.product-name {
  font-size: 1.1em;
}

.product-price {
  color: #0f4c81;
  font-size: 1.4em;
}

.actions-buttons {
  align-items: center;
  display: flex;
}

.v-btn {
  color: #ffffff;
}

.fab {
  margin-left: 16px;
}
</style>
