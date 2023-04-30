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
            {{ system.title }}
          </span>
        </div>
      </div>
      <v-spacer></v-spacer>
    </v-system-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      systembar: [
        {
          title: "rechercher",
          icon: "mdi-magnify",
        },
        {
          title: "Liste de souhaits 0",
          icon: "mdi-heart",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
