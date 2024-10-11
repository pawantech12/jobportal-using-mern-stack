require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");
const connectDB = require("./utils/DB");
const router = require("./routers/AuthRouter");
const UpdateSectionRouter = require("./routers/UpdateSectionRouter");
const notificationRouter = require("./routers/NotificationRouter");
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", // Replace with your frontend origin
    methods: ["GET", "POST"],
  },
});

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/auth", router);
app.use("/api", UpdateSectionRouter);
app.use("/api/notification", notificationRouter);

// WebSocket handling
const users = {}; // Track online users

io.on("connection", (socket) => {
  console.log("New WebSocket connection");

  const userId = socket.handshake.query.userId;
  if (userId) {
    console.log(`User ${userId} connected`);
    users[userId] = true;
    io.emit("userStatusUpdate", { userId, isOnline: true });

    socket.on("disconnect", () => {
      console.log(`User ${userId} disconnected`);
      users[userId] = false;
      io.emit("userStatusUpdate", { userId, isOnline: false });
    });
  }
});

const port = process.env.PORT || 5000;

connectDB().then(() => {
  server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
});
