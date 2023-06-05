import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, chooseRecipe }) => {
  const { id, name, price, image_url } = recipe;
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>${price}</p>
      <img src={image_url} alt="name" />
      <Link to={`/recipes/${id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default RecipeCard;
