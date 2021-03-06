import Vue from "vue";
import Vuex from "vuex";
import createWebSocketPlugin from "./createWebSocketPlugin";
import socket from "../socket";
import sounds from "./sounds";

const websocketPlugin = createWebSocketPlugin(socket);

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [websocketPlugin],
  state: {
    // App State
    announcementShow: false,
    announcementMsg: '',
    errorShow: false,
    errorMsg: '',
    loading: true,
    // Users
    user: null,
    users: [],
    // Sounds
    sfw: true,
    sounds: sounds,
    victims: [],
  },
  getters: {
    filteredSounds: state => {
      if (state.sfw) return state.sounds.filter(el => el.sfw === state.sfw);
      else return state.sounds;
    },
  },
  mutations: {
    changeAnnouncementShow(state, newVal) {
      state.announcementShow = newVal;
    },
    setAnnouncement(state, announcement) {
      state.announcementMsg = announcement;
      state.announcementShow = true;
    },
    clearAnnouncement(state) {
      state.announcementShow = false;
      state.announcementMsg = '';
    },
    changeErrorShow(state, newVal) {
      state.errorShow = newVal;
    },
    setError(state, error) {
      state.errorMsg = error;
      state.errorShow = true;
    },
    clearError(state) {
      state.errorShow = false;
      state.errorMsg = '';
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    addUser(state, newUser) {
      state.users.push(newUser);
    },
    removeUser(state, userID) {
      state.users = state.users.filter(user => user.userID != userID);
    },
    setSfw(state, sfw) {
      state.sfw = sfw;
    },
    setSounds(state, sounds) {
      state.sounds = sounds;
    },
    setVictims(state, victims) {
      state.victims = victims;
    },
  },
  actions: {
    login(context, username) {
      if (username.length > 1) {
        this._vm.$socket.auth = { username };
        this._vm.$socket.connect();
      } else {
        context.commit("setError", "Invalid username.");
      }
    },
    playSound(context, soundID) {
      this.$socket.emit("request sound", { victims: context.state.victims, soundID: soundID });
      context.dispatch("playIfAllowed", soundID);
    },
    playIfAllowed(context, soundID) {
      const sound = context.state.sounds[soundID];
      if (context.state.sfw && sound.sfw) {
        sound.sound.play();
      } else if (!context.state.sfw) {
        sound.sound.play();
      }
    },
  },
});
