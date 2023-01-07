require("dotenv").config();
const express = require("express");
const wordsRouter = require("./routes/wordsRoutes");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3200;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const connectDB = require("./DB/connectDB.JS");
connectDB();

app.use("/", wordsRouter);
app.use("/user", userRouter);

app.listen(port, () =>
  console.log(`Server is running on  http://localhost:${port}`)
);
