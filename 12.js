const checkAir = (samples, threshold) =>
  samples.filter(x => x === 'dirty').length / samples.length < threshold
    ? 'Clean'
    : 'Polluted'
