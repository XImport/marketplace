<template>
  <div>
    <v-lazy
      :min-height="200"
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
    >
      <div class="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.930390803337!2d-5.813233723581639!3d35.72793042740622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b81d1c1d75d05%3A0x6c084f2cd701cc0!2sMERCHAN%20TRANS!5e0!3m2!1sen!2sma!4v1681839560491!5m2!1sen!2sma"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </v-lazy>
  </div>
</template>

<script></script>
<style scoped>
.google-map {
  padding-bottom: 50%;
  position: relative;
}

.google-map iframe {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
}
</style>
