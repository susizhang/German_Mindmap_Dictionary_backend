const { Router } = require("express");
const { getSingleWords } = require("../controllers/wordsController");
const { findSearchedWord } = require("../middleWare/searchedWord");

const wordsRouter = Router();

wordsRouter.route("/:word").get(findSearchedWord, getSingleWords);

module.exports = wordsRouter;
