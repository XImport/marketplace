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
        },
        {
          title: "rechercher",
          Count: false,
          icon: "mdi-magnify",
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
</style>
