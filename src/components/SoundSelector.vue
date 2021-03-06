<template>
  <v-chip-group
    active-class="primary--text"
    column
  >
    <v-chip
      v-for="sound in filteredSounds"
      :key="'sound-'+sound.id"
      outlined
      @click="playSound(sound.id)"
    >
      {{ sound.name }}
    </v-chip>
  </v-chip-group>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SoundSelector",
  computed: mapGetters(["filteredSounds"]),
  methods: mapActions(["playSound"]),
};
</script>
