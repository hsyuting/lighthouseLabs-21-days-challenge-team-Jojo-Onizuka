// Use the value below whenever you need the value of Pi
const PI = 3.14159;
const sphereVolume = radius => (4 / 3) * PI * radius ** 3;
const coneVolume = (radius, height) => (PI * radius ** 2 * height) / 3;
const prismVolume = (height, width, depth) => height * width * depth;
const totalVolume = solids => {
  let total = 0;
  for (let solid of solids) {
    switch (solid.type) {
      case "prism":
        total += prismVolume(solid.height, solid.width, solid.depth);
        break;
      case "cone":
        total += coneVolume(solid.radius, solid.height);
        break;
      default:
        total += sphereVolume(solid.radius);
        break;
    }
  }
  return total;
};

//Alternative that works on flems.io but not on the challenge website.
//TODO: find out why the answer is wrong.
// const PI = 3.14159;
// const sphereVolume = radius => (4 / 3) * PI * radius ** 3;
// const coneVolume = (radius, height) => (PI * radius ** 2 * height) / 3;
// const prismVolume = (height, width, depth) => height * width * depth;
// const totalVolume = (solids) => {
//   let total = 0;
//   for(let solid of solids){
//     total += Function(`'use strict';
//       return ${solid.type}Volume(${solid.radius} | ${solid.height}
//               , ${solid.width} | ${solid.height}
//               , ${solid.depth})`)();
//   }
//   return total;
// };
