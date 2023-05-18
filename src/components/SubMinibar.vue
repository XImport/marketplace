<template>
  <div>
    <v-system-bar dark color="black" class="pa-4">
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <div
          v-for="(system, index) in systembar"
          :key="index"
          class="mr-3 white--text"
        >
          <v-btn :to="system.to">
            <v-icon>{{ system.icon }}</v-icon>
            <span class="d-none d-md-inline">
              <v-dialog
                transition="dialog-top-transition"
                max-width="600"
                v-if="system.dialog"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on">Recherche</v-btn>
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    <v-toolbar color="black justify-center" dark></v-toolbar>
                    <v-card-text>
                      <div class="text-h2 pa-12">
                        <v-text-field
                          label="Recherche"
                          class="custom-input"
                          outlined
                          append-icon="mdi-magnify"
                        ></v-text-field>
                      </div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click="dialog.value = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>

              {{ system.title }}

              <span
                :class="{
                  'ml-2 red pa-1 rounded-xl text-center pr-2': Counter > 0,
                }"
                v-if="system.Count"
              >
                {{ Counter }}
              </span>
            </span>
          </v-btn>
        </div>
      </div>
      <v-spacer></v-spacer>
    </v-system-bar>
  </div>
</template>

<script>
export default {
  computed: {
    Counter() {
      return this.$store.getters.ListItemsCounter;
    },
    // CheckCounter(){
    //   this.systembar[1].Count = this.$store.getters.ListItemsCounter;
    //   return this.check
    // },
    CheckItem() {
      if (this.$store.getters.ListItemsCounte > 1) {
        return true;
      }
      return false;
    },
  },

  data() {
    return {
      check: false,
      systembar: [
        {
          title: "Liste de souhaits",
          Count: true,
          icon: "mdi-heart",
          to: "/wishlist",
          dialog: false,
        },
        {
          title: "",
          Count: false,
          icon: "mdi-magnify",
          dialog: true,
        },
      ],
    };
  },
};
</script>

<style>
.v-btn {
  background-color: transparent !important;
}
.custom-input.v-text-field--outlined .v-input__control input:focus {
  border-color: #ff0000 !important; /* Replace with your desired color */
}
</style>
