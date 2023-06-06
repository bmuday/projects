import RecipeCard from "../components/RecipeCard";
// import "../styles/recipes.css";

const Recipes = ({ recipes }) => {
  return (
    <div className="cards-container">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;
