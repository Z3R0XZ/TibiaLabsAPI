import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import { CharacterInfo } from "../../../services/TibiaData";
import { VocationPartySet } from "../../../services/CharacterDetailedInfo";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  const { names } = req.query;
  let result = "";
  if (names) {
    for (let i = 0; i < names.length; i++) {
      let info = await CharacterInfo(names[i]);
      if (info.sex == "") {
        result = `Character ${names[i]} doesn't exist.`;
        break;
      }
      let vocation = VocationPartySet(info.vocation);
      result += `${vocation}: ${info.name} (Level: ${info.level}) - `;
    }
  }
  let finalResult = result.slice(0, -2);
  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=60");
  res.send(finalResult);
}
