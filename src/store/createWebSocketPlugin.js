export default function createWebSocketPlugin(socket) {
  return store => {
    store.$socket = socket;

    socket.on("connect", () => {
      store.commit("setUser", { userID: socket.id, username: socket.username });
    });

    socket.on("connect_error", (err) => {
      if (err.message === "invalid username") {
        store.commit("setError", "Invalid username");
      } else if (err.message == "username taken") {
        store.commit("setError", "Username already taken");
      }
    });

    socket.on("set user", user => {
      store.commit("setUser", user);
    });

    socket.on("new user", user => {
      store.commit("setAnnouncement", `Howdy ${user.username}!`);
      store.commit("addUser", user);
    });

    socket.on("remove user", userID => {
      store.commit("removeUser", userID);
    });

    socket.on("users", users => {
      store.commit("setUsers", users);
    });

    socket.on("play sound", ({ sender, soundID }) => {
      store.commit("setAnnouncement", `${sender} played ${store.state.sounds[soundID].name}`);
      store.dispatch("playIfAllowed", soundID);
    });
  }
}
