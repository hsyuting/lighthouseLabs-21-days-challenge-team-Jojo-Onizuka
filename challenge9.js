
const carPassing = (cars, speed) => {
  var time = Date.now();
  
  var car = {};
  car.time = time;
  car.speed = speed;
  
  cars.push(car);
  return cars;
}
