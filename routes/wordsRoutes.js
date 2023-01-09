const { Router } = require("express");
const {
  addSavedWord,
  getAllSavedWords,
  deleteSingleWord,
} = require("../controllers/savedWordController");
const { findSearchedWord } = require("../middleWare/searchedWord");

const wordsRouter = Router();

wordsRouter.route("/:word").get(findSearchedWord);
wordsRouter.route("/word/allWords").get(getAllSavedWords);
wordsRouter.route("/word/save").post(addSavedWord);
wordsRouter.route("/word/:id").delete(deleteSingleWord);

module.exports = wordsRouter;
