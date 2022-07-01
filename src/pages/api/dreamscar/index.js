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
  const time = new Date().toISOString();
  const seconds = new Date().getSeconds();

  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=59");
  res.send(
    `Today's Dream Scar Boss should be ${bossName} on most worlds. ${seconds}`
  );
}
