
const busTimes = buses => {
  // Code here!
  var bustime = {};
  
  for(let bus in buses)
  {
    let name = bus;
    let distance = buses[bus].distance;
    let speed = buses[bus].speed;
    let time = distance/speed;
    
    //console.log(name);
    //console.log(distance);
    //console.log(speed);

    bustime[bus] = time;
  }
  
  return bustime;
  
}
