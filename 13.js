const lightsOn = (lights) => lights.map(light=>(light.on=true,light));
const lightsOff = (lights) => lights.map(light=>(light.on=false,light));
const toggleLights = (lights, lightsAreOn) => lightsAreOn ? lightsOff(lights):lightsOn(lights);