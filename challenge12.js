
const checkAir = function (samples, threshold) {
  let clean = 0;
  let dirty = 0;
  let value = 0;
  
  for(const sample of samples)
  {
    if(sample === 'clean')
      clean++;
    else if(sample === 'dirty')
      dirty++;
  }
  
  value = dirty/(clean+dirty);
  
  if(value >= threshold)
    return "Polluted";
  return "Clean";
}
