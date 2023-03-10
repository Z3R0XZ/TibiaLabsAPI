import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import RashidCity from "../../../services/GetRashidCity";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  const currentCity = RashidCity();
  res.setHeader("Cache-Control", "s-maxage=300");
  res.send(`Rashid está en ${currentCity}.`);
}
