const busTimes = buses =>
  Object.fromEntries(
    Object.entries(buses).map(([loc, { distance, speed }]) => [
      loc,
      distance / speed
    ])
  )
