
const judgeVegetable = (vegetables, metric) => {
    let top =vegetables[0];
    for (let i = 1; i < vegetables.length; ++i) {
      if (top[metric] < vegetables[i][metric])
      top = vegetables[i];
    }
    
    return top.submitter;
  }
  