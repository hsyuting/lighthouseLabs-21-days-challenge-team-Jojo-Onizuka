
const judgeVegetable = (vegetables, metric) => {
  // Code here!
  let submitter;
  let highest = 0;
  
  for(let vegetable of vegetables)
  {
    console.log(metric);
    console.log(vegetable[metric]);
    
    if(metricChecker(vegetable,metric,highest)){
      submitter = vegetable.submitter;
      highest = vegetable[metric];
    }
  }
  
  return submitter;
}

const metricChecker = (vegetable, metric, highest) => {
  if(vegetable[metric] > highest)
  {
    return true;
  }
  return false;
}
