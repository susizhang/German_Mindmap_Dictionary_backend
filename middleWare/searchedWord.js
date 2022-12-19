const axios = require("axios");

const findSearchedWord = (req, res, next) => {
  const {
    params: { word },
  } = req;

  axios
    .get(
      `https://de.wiktionary.org/w/api.php?titles=${word}&action=query&prop=extracts&format=json`
    )
    .then((response) => {
      const pages = response.data.query.pages;
      const page = Object.values(pages)[0];
      console.log(page);
      res.send(page.extract);
    });

  next();
};

module.exports = { findSearchedWord };
