
const lightsOn = function(lights) {
    for (let i = 0; i < lights.length; ++i)
      lights[i] = 'on';
    return lights;
  }
  
  const lightsOff = function(lights) {
    for (let i = 0; i < lights.length; ++i)
      lights[i] = 'off';
    return lights;
  }
  
  const toggleLights = function(lights, lightsAreOn) {
    if (lightsAreOn)
      return lightsOff(lights);
    else
      return lightsOn(lights);
  }
  