function RashidCity() {
  const cities = [
    "Carlin",
    "Svargrond",
    "Liberty Bay",
    "Port Hope",
    "Ankrahmun",
    "Darashia",
    "Edron",
  ];
  const dateTime = new Date().toLocaleString("en-US", {
    timeZone: "America/Metlakatla",
  });
  const weekDay = new Date(dateTime).getDay();
  return cities[weekDay];
}

export default RashidCity;
