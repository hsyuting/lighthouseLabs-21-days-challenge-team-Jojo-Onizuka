
// Tip: Work on one of these functions at a time.

const lightsOn = function(lights) {
  // Code here!
  for(var light of lights)
  {
    light.on = true;
  }
  return lights;
}

const lightsOff = function(lights) {
  // Code here!
  for(var light of lights)
  {
    light.on = false;
  }
  return lights;
}

const toggleLights = function(lights, lightsAreOn) {
  // Code here!
  if(lightsAreOn)
  {
    return lightsOff(lights);
  } else
  {
    return lightsOn(lights);
  }
}
