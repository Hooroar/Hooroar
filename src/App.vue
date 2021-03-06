<template>
  <v-app>
    <v-app-bar app color="teal lighten-3" dark dense>
      <v-toolbar-title>Hooroar</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <Toast />
      <Authenticate v-if="!user" />
      <Sounds v-else />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Toast from "./components/Toast";
import Authenticate from "./views/Authenticate";
import Sounds from "./views/Sounds";

export default {
  name: "App",
  components: {
    Toast,
    Authenticate,
    Sounds,
  },
  computed: mapState(["user"]),
};
</script>
