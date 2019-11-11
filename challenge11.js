
const busTimes = buses => {
    // Code here!
    let newObj = {};
    
    for (const bus in buses) {
      newObj[bus] = buses[bus].distance / buses[bus].speed;
    }
  
    return newObj;
  }
  