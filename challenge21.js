
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    let icount = 0;
    let the_recipe = "";
    
    for (let i = 0; i < recipes.length; ++i) {
      icount = recipes[i].ingredients.length;
      for (let j = 0; j < recipes[i].ingredients.length; ++j) {
        if (bakeryA.includes(recipes[i].ingredients[j]) 
          || bakeryB.includes(recipes[i].ingredients[j])) {
            --icount;
        }
      }
      
      if (icount <= 0) {
        the_recipe = recipes[i].name;
      }
    }
    
    return the_recipe;
  }
  