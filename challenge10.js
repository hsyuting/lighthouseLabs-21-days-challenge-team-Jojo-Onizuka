
const whereCanIPark = (spots, vehicle) => {
  // Code here!
  const reg = 'regular';
  const motor = 'motorcycle';
  const small = 'small';

  for (let i = 0; i < spots.length; ++i) {
    for (let j = 0; j < spots[i].length; ++j) {
      if (vehicle === reg || vehicle === motor || vehicle === small) {
        if (spots[i][j] === 'R')
          return [j, i];
      }
      
      if (vehicle === motor || vehicle === small) {
        if (spots[i][j] === 'S') {
          return [j, i];
        }
      }
      
      if (vehicle === motor) {
        if (spots[i][j] === 'M') {
          return [j, i];
        }
      }
    }
  }
}