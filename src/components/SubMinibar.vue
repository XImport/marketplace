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
          <v-icon>{{ system.icon }}</v-icon>
          <span class="d-none d-md-inline">
            {{ system.title }}<span v-if="system.Count"> {{ Counter }}</span>
          </span>
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
  },
  mounted() {
    this.systembar[1].Count = this.$store.getters.ListItemsCounter;
  },
  data() {
    return {
      systembar: [
        {
          title: "Liste de souhaits",
          Count: true,
          icon: "mdi-heart",
        },
        {
          title: "rechercher",
          Count: true,
          icon: "mdi-magnify",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
