
const busTimes = buses => {
    // Code here!
    let newObj = {};
    let busVals = [];
    
    for (const bus in buses) {
      busVals = Object.values(buses[bus]);
      newObj[bus] = busVals[0] / busVals[1];
    }
  
    return newObj;
  }
  