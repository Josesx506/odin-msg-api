import 'dotenv/config';
import jwt from "jsonwebtoken";
import { Server } from 'socket.io';
import { registerChatHandlers } from '../apps/chat/handlers/chatHandler.js';


let io; // undefined initially

function setupSocket(server) {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || "*", // allow frontend URL
      methods: ["GET", "POST"],
      credentials: true,
    }
  });

  // Use socket middle-ware to secure the server
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error('Authentication error'));
    }
    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
      if (err) return next(new Error('Authentication error'));
      socket.user = decoded;
      next();
    });
  });

  io.on("connection", (socket) => {
    console.log(`Client Connected: ${socket.id}`);

    // Register socket handlers like express routes
    registerChatHandlers(socket, io);

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
  });
  })

}

function getIO() {
  if (!io) {
    throw new Error('Socket.IO not initialized!');
  }
  return io;
}

export { getIO, setupSocket };


