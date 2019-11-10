const whereCanIPark = (spots, vehicle) => {
    // Code here!
    
    for (let i = 0; i < spots.length; i++) {
      for (let j = 0; j < spots[i].length; j++) {
        if (vehicle == 'regular') {
          if (spots[i][j] == 'R') {
            return [j,i];
          } 
        } else if (vehicle == 'small') {
          if (spots[i][j] == 'R' || spots[i][j] == 'S') {
            return [j,i];
          }
        } else if (vehicle == 'motorcycle') {
          if (spots[i][j] == 'R' || spots[i][j] == 'S' || spots[i][j] == 'M') {
            return [j,i];
          }
        }
      }
    }
    return false
  }