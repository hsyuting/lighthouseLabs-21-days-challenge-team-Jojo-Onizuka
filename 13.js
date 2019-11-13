const setLights = (lights, state) => {
  for(const light of lights) light.on = state
  return lights
}

const lightsOn = lights => setLights(lights, true)
const lightsOff = lights => setLights(lights, false)
const toggleLights = (lights, lightsAreOn) => setLights(lights, !lightsAreOn)
