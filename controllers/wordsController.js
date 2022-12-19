const connectDB = require("../DB/connectDB.JS");

connectDB();

const getSingleWords = async (req, res) => {
  try {
    // const findSingleWord = await searchedWord.extract;
    // console.log(findSingleWord);
    // res.status(200).json(findSingleWord);
    // res.status(200).send({ msg: "Get word successfully" }, findSingleWord);
  } catch (error) {
    res
      .status(400)
      .send({ msg: `Cannot find this word by ${req.params.word}`, error });
  }
};

module.exports = {
  getSingleWords,
};
