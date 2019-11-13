const map = {
  motorcycle: ['R', 'S', 'M'],
  small: ['R', 'S'],
  regular: ['R']
}
const whereCanIPark = (spots, vehicle) => {
  const valid = map[vehicle]
  let coords = false
  spots.some((rows, y) =>
    rows.some((spot, x) => {
      if (valid.includes(spot)) {
        coords = [x, y]
        return true
      }
    })
  )
  return coords
}
