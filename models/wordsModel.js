const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wordsSchema = new Schema({
  Worttrennung: String,
  Bedeutungen: String,

  Synonyme: [
    {
      Worte: String,
      Bedeutungen: String,
      Beispiels: String,
    },
  ],
  Wortbildungen: String,
  VerwirrendeWorter: [
    {
      Worte: String,
      Bedeutungen: String,
      Beispiels: String,
    },
  ],
});

module.exports = mongoose.model("Words", wordsSchema);
