const possibleParkings = {
  "regular": ['R'],
  "small" : ['R','S'],
  "motorcycle": ['R','S','M'],
};
const whereCanIPark = (spots, vehicle) => {
  for(let x = 0; x < spots.length; ++x){
    for(let y = 0; y < spots[0].length; ++y){
      for(let p of possibleParkings[vehicle]){
        if (p === spots[x][y]) return [y, x];
      }
    }
  }
  return false;
}