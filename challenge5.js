
const chooseStations = (stations) => {
  // Code here!
  const validStations = [];
  
  for(const station of stations)
  {
    let capacity = station[1];
    if(capacity >= 20)
    {
      let location = station[2];
      if(station[2] === "community centre" || station[2] === "school")
      {
        validStations.push(station[0]);
      }
    }
    
  }
  return validStations;
  // Remember to return a value!
}
