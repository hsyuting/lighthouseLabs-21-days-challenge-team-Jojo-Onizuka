
// Use the value below whenever you need the value of Pi

const PI = 3.14159 

const sphereVolume = function (radius) {
  return 4/3*PI*radius*radius*radius;
}

const coneVolume = function (radius, height) {
  return PI*radius*radius*height/3;
}

const prismVolume = function (height, width, depth) {
  return height*width*depth;
}

const totalVolume = function (solids) {
  let total = 0;
  for(let shape of solids)
  {
    console.log(shape);
    
    switch(shape.type){
      case "sphere": total += sphereVolume(shape.radius);
        break;
      case "cone": total += coneVolume(shape.radius, shape.height);
        break;
      case "prism": total += prismVolume(shape.height,shape.width,shape.depth);
        break;
    }
  }
  return total;
}
