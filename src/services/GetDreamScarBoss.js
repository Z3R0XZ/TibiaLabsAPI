function getStringBetween(str, start, end) {
  const result = str.match(new RegExp(start + "(.*)" + end));
  return result[1];
}

async function DreamScarBoss() {
  try {
    const response = await fetch(
      `https://tibia.fandom.com/wiki/Dream_Scar/Boss_of_the_Day`
    );

    const htmlString = await response.text();
    const strippedString = htmlString.replace(/(<([^>]+)>)/gi, "");
    const bossName = getStringBetween(
      strippedString,
      "worlds should be",
      "."
    ).trim();

    return bossName;
  } catch (e) {
    return "Couldn't fetch dream scar boss";
  }
}

export default DreamScarBoss;
