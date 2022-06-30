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
  const currentCity = await RashidCity();
  res.send(currentCity);
}
