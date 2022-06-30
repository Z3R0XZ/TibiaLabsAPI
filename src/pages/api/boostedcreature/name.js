import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import BoostedCreature from "../../../services/getBoostedCreature";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  const creatureName = await BoostedCreature();
  res.send(creatureName);
}
