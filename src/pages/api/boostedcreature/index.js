import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import BoostedCreature from "../../../services/GetBoostedCreature";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  const creatureName = await BoostedCreature();
  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=60");
  res.send(`Criatura: ${creatureName}`);
}
