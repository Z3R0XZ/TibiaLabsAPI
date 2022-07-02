import Cors from "cors";
import initMiddleware from "../../../../lib/init-middleware";
import { AllWorldsInfo } from "../../../../services/TibiaData";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  const info = await AllWorldsInfo();
  const playersOnline = info["worlds"]["players_online"];

  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=60");
  res.send(`There are currently ${playersOnline} players online on Tibia.`);
}
