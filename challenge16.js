
const festivalColours = color1 => {
  // code here!
  let hue1 = inrange(color1 + 150);
  let hue2 = inrange(color1 + 210);
  
  let hues = [hue1,hue2];
  return hues;
}

const inrange = (hue) => {
  if(hue > 360)
    return hue-360;
  return hue;
}