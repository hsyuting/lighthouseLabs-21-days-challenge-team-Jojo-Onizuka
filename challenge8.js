
const smartGarbage = (trash, bins) => {
    // Code here!
    switch(trash)
    {
      case "waste": bins.waste++;
        break;
      case "recycling": bins.recycling++;
        break;
      case "compost": bins.compost++;
        break;
    }
    
    return bins;
}
