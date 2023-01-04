require("dotenv").config();
const express = require("express");
const wordsRouter = require("./routes/wordsRoutes");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user");

const port = process.env.PORT || 5100;
app.use(express.json());
app.use(cors());

app.use("/", wordsRouter);
app.use("/user", userRouter);

app.listen(port, () =>
  console.log(`Server is running on  http://localhost:${port}`)
);
