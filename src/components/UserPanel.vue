<template>
  <v-col cols="4">
    <h3 class="mb-4">Victims:</h3>
    <v-row justify="space-around">
      <v-btn @click="selected = users.map(el => {return el.userID})">
        All
      </v-btn>
      <v-btn @click="selected = []">
        None
      </v-btn>
    </v-row>
    <v-checkbox
      v-for="u in users"
      :key="u.userID"
      v-model="selected"
      :label="u.username"
      :value="u.userID"
      hide-details
    ></v-checkbox>
    <v-divider class="mt-4 mb-2"></v-divider>
    {{user.username}}
  </v-col>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "UserPanel",
  data: () => ({
    selected: [],
  }),
  computed: mapState(["user", "users"]),
  watch: {
    selected: function (val) {
      this.setVictims(val);
    },
  },
  methods: mapMutations(["setVictims"]),
};
</script>
