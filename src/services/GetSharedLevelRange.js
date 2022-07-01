function SharedLevelRange(level) {
  const minLevel = Math.floor(level / 1.5);
  const maxLevel = Math.round(level * 1.5);
  return { min: minLevel, max: maxLevel };
}

export default SharedLevelRange;
