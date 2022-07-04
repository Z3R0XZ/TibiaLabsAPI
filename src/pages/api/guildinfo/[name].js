import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import { formatGuildDate, GuildInfo } from "../../../services/TibiaData";

function guildAvgLevel(members) {
  let totalLevel = 0;
  if (members) {
    for (let i = 0; i < members.length; i++) {
      totalLevel += members[i]["level"];
    }
    return Math.round(totalLevel / members.length);
  }
}

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  const { name } = req.query;
  const info = await GuildInfo(name);
  const creationDate = formatGuildDate(info.founded);
  const avgLevel = guildAvgLevel(info.members);

  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=60");

  if (info.world != "") {
    res.send(
      `${info.name} (World: ${info.world} - Avg Level: ${avgLevel}) has ${info.players_online}/${info.members_total} members online right now. This guild was founded on ${creationDate}.`
    );
  } else {
    res.send(`The guild ${name} doesn't exist.`);
  }
}
