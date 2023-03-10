import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import BoostedBoss from "../../../services/GetBoostedBoss";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  const bossName = await BoostedBoss();
  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=60");
  res.send(`Jefe con boost: ${bossName}`);
}
