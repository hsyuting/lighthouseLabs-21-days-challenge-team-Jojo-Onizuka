
const finalPosition = (moves) => {
    let parade = [0, 0];
    for (let i = 0; i < moves.length; ++i) {
      switch(moves[i]) {
        case 'north':
          ++parade[1];
          break;
        case 'south':
          --parade[1];
          break;
        case 'east':
          ++parade[0];
          break;
        case 'west':
          --parade[0];
          break;
      }
    }
    
    return parade;
  }
  