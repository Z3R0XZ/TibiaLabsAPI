const cheerio = require("cheerio");

async function BoostedCreature() {
  try {
    const response = await fetch(
      `https://www.tibia.com/library/?subtopic=creatures`
    );

    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);
    const creatureName = $(
      "table.Table1 > tbody > tr > td > div > p > a"
    ).text();

    return creatureName;
  } catch (e) {
    return "Couldn't fetch boosted creature";
  }
}

export default BoostedCreature;
