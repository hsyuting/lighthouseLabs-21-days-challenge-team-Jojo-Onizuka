const festivalColours = color1 => [
    color1+150 >= 360 ? Math.abs((color1+150)-360):color1+150,
    color1+210 >= 360 ? Math.abs((color1+210)-360):color1+210];