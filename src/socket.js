import { io } from "socket.io-client/dist/socket.io";

const serverURL = process.env.NODE_ENV === "development"
  ? "http://192.168.1.198:3000"
  : "http://165.227.210.120";

const socket = io(serverURL, { autoConnect: false });

export default socket;
