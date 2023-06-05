const RecipeDetails = ({ recipes, id }) => {
  const displayedRecipe = recipes.filter((recipe) => recipe.id === id);
  console.log("displayed recipe", displayedRecipe);
  return <div>RecipeDetails</div>;
};

export default RecipeDetails;
