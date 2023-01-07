const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wordsSchema = new Schema({
  Wort: String,
  Bedeutungen: String,
  Notizen: String,
});

module.exports = mongoose.model("Words", wordsSchema);
