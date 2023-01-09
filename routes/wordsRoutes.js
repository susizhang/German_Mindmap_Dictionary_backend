const { Router } = require("express");
// const { getSingleWords } = require("../controllers/myWordBookController");
const { findSearchedWord } = require("../middleWare/searchedWord");

const wordsRouter = Router();

wordsRouter.route("/:word").get(findSearchedWord);
wordsRouter.route("/word/save").post(findSearchedWord);

module.exports = wordsRouter;
