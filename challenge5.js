
const chooseStations = (stations) => {
    // Code here!
    var goodStations = [];
    for (let i = 0; i < stations.length; ++i) {
      if (stations[i][1] >= 20 && (stations[i][2] == 'school' || stations[i][2] == 'community centre')) {
        goodStations.push(stations[i][0]);
      }
    }
    
    // Remember to return a value!
    return goodStations;
  }
  