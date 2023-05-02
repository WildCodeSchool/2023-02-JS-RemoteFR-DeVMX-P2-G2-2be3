import PropTypes from "prop-types";

import "../../../style/shopStyle/BtnNutriScore.css";

function BtnNutriScore({ setSelectedNutriScore }) {
  const handleNutriScoreClick = (nutriScore) => {
    setSelectedNutriScore(nutriScore);
  };

  return (
    <div>
      <ul className="btnNutriScore">
        <li>
          <button
            className="btnA"
            type="button"
            onClick={() => handleNutriScoreClick("a")}
          >
            A
          </button>
        </li>
        <li>
          <button
            className="btnB"
            type="button"
            onClick={() => handleNutriScoreClick("b")}
          >
            B
          </button>
        </li>
        <li>
          <button
            className="btnC"
            type="button"
            onClick={() => handleNutriScoreClick("c")}
          >
            C
          </button>
        </li>
        <li>
          <button
            className="btnD"
            type="button"
            onClick={() => handleNutriScoreClick("d")}
          >
            D
          </button>
        </li>
        <li>
          <button
            className="btnE"
            type="button"
            onClick={() => handleNutriScoreClick("e")}
          >
            E
          </button>
        </li>
      </ul>
    </div>
  );
}

BtnNutriScore.propTypes = {
  setSelectedNutriScore: PropTypes.func.isRequired,
};

export default BtnNutriScore;
