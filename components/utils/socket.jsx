import { io } from "socket.io-client";

const SocketInstance = () => {
  const socket = io(process.env.NEXT_PUBLIC_BASE_URL, {
    withCredentials: true,
  });


  socket.on("connect", () => {
    console.log("connected to server", socket.id);
  });

  socket.on("disconnect", () => {
    console.log("disconnected from server", socket.id);
  });

  return socket
};

export default SocketInstance;
