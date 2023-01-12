const { Router } = require("express");
const {
  addSavedWord,
  getAllSavedWords,
  deleteSingleWord,
  addNotesToSingleWord,
} = require("../controllers/savedWordController");
const { findSearchedWord } = require("../middleWare/searchedWord");
const requireAuth = require("../middleWare/requireAuth");
const wordsRouter = Router();

// wordsRouter.use(requireAuth);
wordsRouter.route("/:word").get(findSearchedWord);
wordsRouter.route("/word/allWords").get(requireAuth, getAllSavedWords);
wordsRouter.route("/word/save").post(requireAuth, addSavedWord);
wordsRouter
  .route("/word/:id")
  .delete(requireAuth, deleteSingleWord)
  .patch(addNotesToSingleWord);

module.exports = wordsRouter;
