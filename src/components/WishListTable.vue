<template>
  <v-simple-table dense outlined class="my-table">
    <template v-slot:default>
      <thead>
        <tr class="pa-6">
          <th class="text-left"></th>

          <th class="text-left">Product Name</th>
          <th class="text-left">Unit Price</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody class="mt-6">
        <tr v-for="item in WishLIst" :key="item.id">
          <td>
            <v-avatar class="profile" color="grey" size="130" tile>
              <v-img :src="item.img"></v-img>
            </v-avatar>
          </td>
          <td>
            <strong>{{ item.description }}</strong>
          </td>
          <td>
            <strong>{{ item.price }}</strong>
          </td>

          <td class="pl-12">
            <v-btn class="success" icon @click="DetailsPage(item)"
              ><v-icon>mdi-whatsapp</v-icon></v-btn
            >
            <v-btn class="error" icon @click="removeItem(item.id)"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2"></td>
          <td class="text-h6 black--text"><strong>Subtotal:</strong></td>
          <td class="text-h5 red--text">
            <strong>{{ calculateSubtotal().toFixed(2) }} DH</strong>
          </td>
        </tr>
      </tfoot>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  computed: {
    WishLIst() {
      return this.$store.getters.ListItemsbascket;
    },
  },
  methods: {
    calculateSubtotal() {
      return this.WishLIst.reduce(
        (total, item) => total + parseFloat(item.price),
        0
      );
    },
    removeItem(id) {
      this.$store.commit("RemoveToList", id);
      this.$store.commit("ReduceCounter");
    },
    DetailsPage(Product) {
      console.log(Product);
      this.$router.push({
        name: "ProductDetails",
        params: {
          id: Product,
          Product: Product,
        },
      });
    },
  },
  data() {
    return {
      desserts: [
        {
          ImgUrl:
            "https://zoneplay.ma/wp-content/uploads/2021/10/3296895388-300x400.jpg",
          ProductName: "XBOX PACK",
          Price: "55.00",
          Actions: "BUY NOW",
        },
      ],
    };
  },
};
</script>

<style>
.my-table td {
  padding: 10px;
  margin-bottom: 10px;
}

/* Add top margin to the first row */
.my-table tbody tr:first-of-type {
  margin-top: 10px;
}
</style>
