import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import execQuery from "../../../lib/db";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function handler(req, res) {
  try {
    await cors(req, res);
    const results = await execQuery({
      query: "SELECT * FROM boostedboss ORDER BY id DESC",
    });
    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=60");
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
