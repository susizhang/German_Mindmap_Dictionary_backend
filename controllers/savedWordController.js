const SavedWords = require("../models/savedWordsModel");

const addSavedWord = async (req, res) => {
  console.log(req.body);
  try {
    const newSavedWord = await SavedWords.create({
      Wort: req.body.Wort,
      Notizen: req.body.Notizen,
    });
    res.status(200).json(newSavedWord);
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Cannot save this word", error: error.message });
  }
};

const getAllSavedWords = async (req, res) => {
  try {
    const allSavedWords = await SavedWords.find().sort({ createdAt: -1 });
    res.status(200).send({
      msg: "Get all saved Words successfully",
      SavedWordsList: allSavedWords,
    });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can not get all savedWords", error: error.message });
  }
};

const deleteSingleWord = async (req, res) => {
  try {
    const deletedWord = await SavedWords.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "Delete word successfully" });
  } catch (error) {
    res.status(400).send({
      msg: "Can not delete this word",
      error: error.message,
    });
  }
};

module.exports = {
  addSavedWord,
  getAllSavedWords,
  deleteSingleWord,
};
