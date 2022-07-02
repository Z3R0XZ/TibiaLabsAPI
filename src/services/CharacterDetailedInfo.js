function VocationSet(str) {
  let voc;
  switch (str.toLowerCase()) {
    case "knight":
    case "elite knight":
      voc = "knight";
      break;
    case "paladin":
    case "royal paladin":
      voc = "paladin";
      break;
    case "druid":
    case "elder druid":
    case "sorcerer":
    case "master sorcerer":
      voc = "mage";
      break;
    default:
      voc = "none";
  }
  return voc;
}

function VocationStats(level, vocation) {
  const voc = VocationSet(vocation);
  const values = {
    knight: {
      hp: 5 * (3 * level + 13),
      mp: 5 * (level + 10),
      cap: 5 * (5 * level + 54),
    },
    paladin: {
      hp: 5 * (2 * level + 21),
      mp: 5 * (3 * level - 6),
      cap: 10 * (2 * level + 31),
    },
    mage: {
      hp: 5 * (level + 29),
      mp: 5 * (6 * level - 30),
      cap: 10 * (level + 39),
    },
    none: {
      hp: 5 * (level + 29),
      mp: 5 * (level + 10),
      cap: 10 * (level + 39),
    },
  };

  return values[voc];
}

export { VocationStats };
