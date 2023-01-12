const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wordsSchema = new Schema(
  {
    Wort: String,
    Notizen: String,
    userID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SavedWords", wordsSchema);
