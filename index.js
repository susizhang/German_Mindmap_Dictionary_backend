require("dotenv").config();
const express = require("express");
const wordsRouter = require("./routes/wordsRoutes");
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());

app.use("/", wordsRouter);
app.listen(port, () =>
  console.log(`Server is running on  http://localhost:${port}`)
);
