const axios = require("axios");
const cheerio = require("cheerio");

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
      const $ = cheerio.load(page.extract);
      $.html();
      const bedeutungen = $("p[title='Sinn und Bezeichnetes (Semantik)']")
        .next()
        .html();

      const bedeutungenToArr = $(bedeutungen)
        .map(function (i, el) {
          // this === el
          return $(this).text();
        })
        .toArray();
      // .join(" ")

      res.send({
        bedeutungen: bedeutungenToArr,
      });
    });

  next();
};

module.exports = { findSearchedWord };
