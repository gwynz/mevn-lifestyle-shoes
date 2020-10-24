<template>
  <v-app id="app">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import "./styles/tailwindcss.scss";
import "./styles/vue-animation.scss";
export default {
  name: "app",
};
</script>
