
const checkAir = function (samples, threshold) {
    let dirty = 0;
    for (let i = 0; i < samples.length; ++i) {
      if (samples[i] === 'dirty')
        ++dirty;
    }
    
    if ((dirty / samples.length) > threshold)
      return 'Polluted';
    
    return 'Clean';
  }
  