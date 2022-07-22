<template>
  <v-card class="card" elevation="4">
    <v-card class="card-img" elevation="0">
      <v-img contain height="110" :src="product.img ? product.img : img" />
    </v-card>

    <div class="product-info">
      <p class="product-name">{{ product.name }}</p>
      <p>{{ product.brand }}</p>
      <p class="product-price">R$ {{ format(product.price) }}</p>
      <p>Cor: {{ product.color }}</p>
    </div>

    <div class="actions-buttons">
      <v-btn
        class="fab"
        color="#0f4c81"
        fab
        small
        :to="`/pagamento/${product.id}`"
      >
        <v-icon> mdi-cart </v-icon>
      </v-btn>

      <v-btn class="fab" color="#0f4c81" fab small to="/editar-produto">
        <v-icon> mdi-pencil </v-icon>
      </v-btn>

      <v-btn class="fab" color="error" fab small @click.stop="dialog = true">
        <v-icon> mdi-delete </v-icon>
      </v-btn>
    </div>

    <v-dialog v-model="dialog" max-width="550">
      <v-card>
        <v-card-title class="text-h5">
          Você realmente deseja excluir o item:
          <strong>{{ product.name }}</strong>
        </v-card-title>

        <div class="btn-actions">
          <v-btn color="#0F4C81" @click="handleDelete"> Confirmar </v-btn>

          <v-btn color="error" @click="dialog = false"> Cancelar </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import api from "@/services/api";
import formatNumber from "@/utils/formatNumber";
import addPhoto from "@/assets/Add_photo_alternate.png";

export default {
  name: "ProductCard",
  data: () => ({
    dialog: false,
    img: addPhoto,
  }),
  methods: {
    format(price) {
      return formatNumber(price);
    },
    async handleDelete() {
      await api.delete(`/product/${this.product.id}`);
      window.location.reload();
    },
  },
  props: ["product"],
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
  font-size: 1.2em;
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

.btn-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 40px;
  padding-bottom: 16px;
}
</style>
