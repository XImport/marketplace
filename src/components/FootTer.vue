<template>
  <v-footer v-bind="localAttrs" :padless="padless">
    <v-card flat tile width="100%" class="footer--bg text-center white--text">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px white--text">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Made</strong
        ><strong> By</strong><strong class="yellow--text"> WEBSAVVYCO</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-home", "mdi-email", "mdi-facebook", "mdi-instagram"],
    items: ["default", "absolute", "fixed"],
    padless: true,
    variant: "default",
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>

<style>
.footer--bg {
  background-color: #000000 !important;
}
</style>
