const festivalItems = {
  "Pumpkin pie": [5, 30],
  "Pumpkin spice latte": [3, 15],
  "Pumpkin spice macarons": [1, 3]
};
const pumpkinSpice = money => {
  let res = [0, 0, 0, 0],
    i = 0;
  for (let item in festivalItems) {
    res[i] += Math.floor(money / festivalItems[item][0]);
    res[3] += res[i] * festivalItems[item][1];
    money %= festivalItems[item][0];
    ++i;
  }
  return res;
};
