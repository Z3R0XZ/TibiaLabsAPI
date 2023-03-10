import Cors from "cors";
import initMiddleware from "../../../../lib/init-middleware";
import { WorldInfo } from "../../../../services/TibiaData";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  const { name } = req.query;
  const info = await WorldInfo(name);
  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=60");

  if (info.type != "") {
    res.send(
      `There are ${info.players_online} players online on ${info.name}.`
    );
  } else {
    res.send(`The world ${info.name} doesn't exist.`);
  }
}
