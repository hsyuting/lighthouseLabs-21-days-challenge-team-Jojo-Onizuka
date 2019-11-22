//Let recipes.length be n
//Let Math.max(bakeryA.length, bakeryB.length) be k
//Worst case scenario O(nk)
const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  for (let recipe of recipes) {
    const { ingredients, name: rName } = recipe;
    // a in A && b in B || b in A && a in B
    if (
      (bakeryA.includes(ingredients[0]) && bakeryB.includes(ingredients[1])) ||
      (bakeryA.includes(ingredients[1]) && bakeryB.includes(ingredients[0]))
    )
      return rName;
  }
  return "No recipe";
};

//Improved ? since ingredients is constant
const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  for (let recipe of recipes) {
    const { ingredients, name: rName } = recipe;
    // a in A && b in B || b in A && a in B
    if (
      bakeryA.some(e => e === ingredients[0] || e === ingredients[1]) &&
      bakeryB.some(e => e === ingredients[0] || e === ingredients[1])
    )
      return rName;
  }
  return "No recipe";
};
