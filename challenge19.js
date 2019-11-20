
const pumpkinSpice = money => {
    let pumpkin = [0, 0, 0, 0];
    
    while (money > 0) {
      if (money >= 5) {
        ++pumpkin[0];
        pumpkin[3] += 30;
        money -= 5
      } else if (money >= 3) {
        ++pumpkin[1];
        pumpkin[3] += 15;
        money -= 3;
      } else {
        ++pumpkin[2];
        pumpkin[3] += 3;
        --money;
      }
    }
    
    return pumpkin;
  }
  