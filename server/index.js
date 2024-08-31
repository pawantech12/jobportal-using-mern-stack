require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routers/AuthRouter");
const connectDB = require("./utils/DB");
const UpdateSectionRouter = require("./routers/UpdateSectionRouter");

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/auth", router);
app.use("/api", UpdateSectionRouter);

const port = process.env.PORT;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
});
