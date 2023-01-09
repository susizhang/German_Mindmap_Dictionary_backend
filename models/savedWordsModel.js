const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wordsSchema = new Schema(
  {
    Wort: String,

    Notizen: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("SavedWords", wordsSchema);
