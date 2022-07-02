async function TibiaDataCrawler(end) {
  try {
    const response = await fetch(`https://api.tibiadata.com/v3/${end}`);
    return response.json();
  } catch (e) {
    return "Couldn't connect to TibiaData API";
  }
}

function formatDate(date) {
  const options = { year: "numeric", month: "2-digit" };
  const dateToFormat = new Date(date);
  return dateToFormat.toLocaleDateString("en-GB", options);
}

async function CharacterInfo(name) {
  const res = await TibiaDataCrawler(`character/${name}`);
  const data = res["characters"]["character"];
  return data;
}

async function WorldInfo(name) {
  const res = await TibiaDataCrawler(`world/${name}`);
  const data = res["worlds"]["world"];
  const worldName = data["name"];
  const worldType = data["pvp_type"];
  const worldCreated = formatDate(data["creation_date"]);
  const worldRecordPlayers = data["record_players"];
  const worldRecordDate = formatDate(data["record_date"]);
  const worldPlayersOnline = data["players_online"];
  return {
    name: worldName,
    type: worldType,
    created: worldCreated,
    record: worldRecordPlayers,
    record_date: worldRecordDate,
    players_online: worldPlayersOnline,
  };
}

async function AllWorldsInfo() {
  const res = await TibiaDataCrawler(`worlds`);
  return res;
}

export { TibiaDataCrawler, CharacterInfo, WorldInfo, AllWorldsInfo };
