const { Router } = require("express");
// const { getSingleWords } = require("../controllers/myWordBookController");
const { findSearchedWord } = require("../middleWare/searchedWord");

const wordsRouter = Router();

wordsRouter.route("/:word").get(findSearchedWord);

module.exports = wordsRouter;
