import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import SharedLevelRange from "../../../services/GetSharedLevelRange";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  const { level } = req.query;
  if (!isNaN(level) && level > 0) {
    const shareRange = SharedLevelRange(level);
    res.send(
      `Un nivel ${level} puede compartir exp con niveles del ${shareRange["min"]} al ${shareRange["max"]}.`
    );
  } else {
    res.send(`El nivel debe ser mayor a 0.`);
  }
}
