
const pumpkinSpice = money => {
  
  //0 = pie, 1 =  latte, 2 = macaron, 3 = spice
  var pspice = [0,0,0,0];
  
  console.log("starting money" + money);
  
  pspice[0] = Math.floor(money/5.0);
  money -= pspice[0]*5;
  
  pspice[1] = Math.floor(money/3.0);
  money -= pspice[1]*3;
  
  pspice[2] = Math.floor(money/1.0);
  money -= pspice[2]*1;
  
  pspice[3] = pspice[0]*30 + pspice[1]*15 + pspice[2]*3;
  
  console.log("pie"+pspice[0]);
  console.log("latte"+pspice[1]);
  console.log("macaron"+pspice[2]);
  console.log("pspice"+pspice[3]);

  return pspice;
  
  
  
  
  
  
}
