
const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  // Code here!
  let cost = 1;
  if(numberOfPeople < 30)
    cost = cost + 0.25*distanceTraveled;
  else
    cost = cost + 0.25 + 0.25*distanceTraveled;
  
  return "$" + Number.parseFloat(cost).toFixed(2);
}
