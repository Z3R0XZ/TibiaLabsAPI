const cheerio = require("cheerio");

async function BoostedBoss() {
  try {
    const response = await fetch(
      `https://www.tibia.com/library/?subtopic=boostablebosses`
    );

    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);
    const bossName = $("table.Table1 > tbody > tr > td > div > p > b").text();

    return bossName;
  } catch (e) {
    return "Couldn't fetch boosted boss";
  }
}

export default BoostedBoss;
