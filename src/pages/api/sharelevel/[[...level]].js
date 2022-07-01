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
      `A level ${level} can share experience with levels ${shareRange["min"]} to ${shareRange["max"]}.`
    );
  } else {
    res.send(`Level parameter must be a valid number and greater than 0.`);
  }
}
