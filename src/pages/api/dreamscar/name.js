import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import DreamScarBoss from "../../../services/GetDreamScarBoss";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  const bossName = await DreamScarBoss();
  res.send(bossName);
}
