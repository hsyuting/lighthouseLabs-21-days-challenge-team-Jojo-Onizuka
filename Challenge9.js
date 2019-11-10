const carPassing = (cars, speed) => {
    // Code here!
    let newCar = {
        'time': Date.now(),
        'speed': speed
    };
    cars.push(newCar);
    return cars;
}