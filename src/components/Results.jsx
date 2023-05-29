const Results = ({ weight }) => {
  if (!weight) weight = 0;
  return (
    <div id="results">
      <div>
        <p>
          {weight} g = {(weight * 0.001).toFixed(3)} kg
        </p>
      </div>
      <div>
        <p>
          {weight} g = {(weight * 0.035274).toFixed(3)} oz
        </p>
      </div>
      <div>
        <p>
          {weight} g = {(weight * 0.00220462).toFixed(3)} livres
        </p>
      </div>
    </div>
  );
};

export default Results;
