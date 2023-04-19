import "../style/BtnNutriScore.css";

function BtnNutriScore() {
  return (
    <div>
      <ul className="btnNutriScore">
        <li>
          <button className="btnA" type="button">
            A
          </button>
        </li>
        <li>
          <button className="btnB" type="button">
            B
          </button>
        </li>
        <li>
          <button className="btnC" type="button">
            C
          </button>
        </li>
        <li>
          <button className="btnD" type="button">
            D
          </button>
        </li>
        <li>
          <button className="btnE" type="button">
            E
          </button>
        </li>
      </ul>
    </div>
  );
}

export default BtnNutriScore;
