
const PI = 3.14159 

const sphereVolume = function (radius) {
  return PI * radius * radius * radius * 4/3;
}

const coneVolume = function (radius, height) {
  return (PI * radius * radius * height * 1/3)
}

const prismVolume = function (height, width, depth) {
  return height * width * depth;
}

const totalVolume = function (solids) {
  let total = 0;
  for (let i = 0; i < solids.length; ++i) {
    switch(solids[i].type) {
      case 'cone':
        total += coneVolume(solids[i].radius, solids[i].height);
        break;
      case 'sphere':
        total += sphereVolume(solids[i].radius);
        break;
      case 'prism':
        total += prismVolume(solids[i].height, solids[i].width, solids[i].depth);
        break;
    }
  }
  return total;
}