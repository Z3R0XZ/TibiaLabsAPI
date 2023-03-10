import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import { CharacterInfo } from "../../../services/TibiaData";
import { VocationStats } from "../../../services/CharacterDetailedInfo";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  const { name } = req.query;
  const info = await CharacterInfo(name);
  const infoVoc = await VocationStats(info.level, info.vocation);
  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=60");

  if (info.vocation != "") {
    res.send(
      `-> ${info.world} - ${info.name} [${info.level}] - ${info.vocation}`
    );
  } else {
    res.send(`El Personaje ${name} no existe.`);
  }
}
