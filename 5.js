const validStations = ['school', 'community centre']
const chooseStations = stations =>
  stations
    .filter(([name, capacity, loc]) => capacity >= 20 && validStations.includes(loc))
    .map(([name]) => name)
