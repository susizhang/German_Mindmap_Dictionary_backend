

const getSingleWords = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(400)
      .send({ msg: `Cannot find this word by ${req.params.word}`, error });
  }
};

module.exports = {
  getSingleWords,
};
