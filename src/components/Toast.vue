<template>
  <div>
    <v-snackbar
      v-model="errorShow"
      :timeout="4000"
      color="error"
      top
      right
      rounded="pill"
    >
      {{ errorMsg }}
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="clearError()"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      v-model="announcementShow"
      :timeout="4000"
      color="success"
      top
      right
      rounded="pill"
    >
      {{ announcementMsg }}
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="clearAnnouncement()"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Toast",
  computed: {
    ...mapState(["errorMsg", "announcementMsg"]),
    errorShow: {
      get: function() {
        return this.$store.state.errorShow;
      },
      set: function (newVal) {
        this.changeErrorShow(newVal)
      },
    },
    announcementShow: {
      get: function() {
        return this.$store.state.announcementShow;
      },
      set: function (newVal) {
        this.changeAnnouncementShow(newVal)
      },
    },
  },
  methods: mapMutations(["changeErrorShow", "setError", "clearError", "changeAnnouncementShow", "setAnnouncement", "clearAnnouncement"]),
};
</script>
