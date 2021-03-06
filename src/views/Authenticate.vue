<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="6">
        <h3 class="text-center">What shall we call ya?</h3>
        <v-text-field
          outlined
          v-model="username"
          @keydown.enter="login(username)"
        ></v-text-field>
        <v-btn block color="blue" dark @click="login(username)">HOOROAR</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Authenticate",
  data: () => ({
    username: "",
  }),
  methods: mapActions(["login"]),
}
</script>
