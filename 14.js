const BASE_COST = 100
const KM_COST = 25
const SURCHARGE_COST = 25
const SURCHARGE_THRESHOLD = 30

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  let charge = BASE_COST + KM_COST * distanceTraveled
  if (numberOfPeople >= SURCHARGE_THRESHOLD) charge += SURCHARGE_COST
  return '$' + (charge / 100).toFixed(2)
}
