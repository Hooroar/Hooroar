<template>
  <v-container>
    <v-row>
      <UserPanel />
      <v-col cols="8">
        <v-row>
          <v-switch
            v-model="sfw"
            :label="sfw ? 'SFW' : 'NSFW'"
          ></v-switch>
        </v-row>
        <v-row>
          <SoundSelector />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import UserPanel from "../components/UserPanel";
import SoundSelector from "../components/SoundSelector";

export default {
  name: "Sounds",
  components: {
    UserPanel,
    SoundSelector,
  },
  computed: {
    ...mapState(["users", "victims", "sounds"]),
    sfw: {
      get: function() {
        return this.$store.state.sfw;
      },
      set: function (newVal) {
        this.setSfw(newVal);
      },
    },
  },
  methods: mapMutations(["setSfw"]),
};
</script>
