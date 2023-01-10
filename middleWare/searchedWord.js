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
      try {
        const pages = response.data.query.pages;
        const page = Object.values(pages)[0];

        // use cheerio to parse html to json

        const $ = cheerio.load(page.extract);
        $.html();

        // Get words

        // Get bedeutungen data
        const bedeutungen = $("p[title='Sinn und Bezeichnetes (Semantik)']")
          .next()
          .html();

        const bedeutungenToArr = $(bedeutungen)
          .map(function (i, el) {
            // this === el
            return $(this).text();
          })
          .toArray();
        const filteredBedeutungenToArr = bedeutungenToArr.filter((x) => {
          return x !== "\n";
        });

        // Get Synonyme

        const synonyme = $("p[title='bedeutungsgleich gebrauchte Wörter']")
          .next()
          .html();

        const synonymeToArr = $(synonyme)
          .map(function (i, el) {
            // this === el
            return $(this).text();
          })
          .toArray();
        const filteredSynonymeToArr = synonymeToArr.filter((x) => {
          return x !== "\n";
        });

        // Get Sinnverwandte Wörter

        const sinnverwandteWörter = $("p[title='Sinnverwandte Wörter']")
          .next()
          .html();

        const sinnverwandteWörterToArr = $(sinnverwandteWörter)
          .map(function (i, el) {
            // this === el
            return $(this).text();
          })
          .toArray();
        const filteredSinnverwandteWörterToArr =
          sinnverwandteWörterToArr.filter((x) => {
            return x !== "\n";
          });

        // Get Gegenwörter

        const gegenwörter = $("p[title='Antonyme']").next().html();

        const gegenwörterToArr = $(gegenwörter)
          .map(function (i, el) {
            // this === el
            return $(this).text();
          })
          .toArray();
        const filteredGegenwörterToArrToArr = gegenwörterToArr.filter((x) => {
          return x !== "\n";
        });

        // Get Unterbegriffe

        const unterbegriffe = $("p[title='Hyponyme']").next().html();

        const unterbegriffeToArr = $(unterbegriffe)
          .map(function (i, el) {
            // this === el
            return $(this).text();
          })
          .toArray();
        const filteredUnterbegriffeToArr = unterbegriffeToArr.filter((x) => {
          return x !== "\n";
        });

        // Get Beispiele

        const beispiele = $("p[title='Verwendungsbeispielsätze']")
          .next()
          .html();

        const beispieleToArr = $(beispiele)
          .map(function (i, el) {
            // this === el
            return $(this).text();
          })
          .toArray();
        const filteredBeispieleToArr = beispieleToArr.filter((x) => {
          return x !== "\n";
        });

        // Get Wortbildungen

        const wortbildungen = $(
          "p[title='Derivate, Komposita und Konversionen']"
        )
          .next()
          .html();

        const wortbildungenToArr = $(wortbildungen)
          .map(function (i, el) {
            // this === el
            return $(this).text();
          })
          .toArray();
        const filteredWortbildungenToArr = wortbildungenToArr.filter((x) => {
          return x !== "\n";
        });

        res.send({
          Bedeutungen: filteredBedeutungenToArr,

          Beispiele: filteredBeispieleToArr,

          Synonyme: filteredSynonymeToArr,

          SinnverwandteWörter: filteredSinnverwandteWörterToArr,

          Gegenwörter: filteredGegenwörterToArrToArr,

          Unterbegriffe: filteredUnterbegriffeToArr,

          Wortbildungen: filteredWortbildungenToArr,
        });
      } catch (error) {
        res
          .status(400)
          .send({ msg: "Can not find this word ", error: error.message });
      }
    });
};

module.exports = { findSearchedWord };
