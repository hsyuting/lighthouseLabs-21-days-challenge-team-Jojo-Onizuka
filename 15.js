const finalPosition = (moves) => moves.reduce((acc, cur) => {
    switch(cur){
      case "north":
        ++acc[1];
        break;
      case "south":
        --acc[1];
        break;
      case "west":
        --acc[0];
        break;
      case "east":
        ++acc[0];
        break;
      default:
        break;
    }
    return acc;
  },[0,0])