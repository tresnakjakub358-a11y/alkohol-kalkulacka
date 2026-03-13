const Result = ({ weight, gender, drinks, hours }) => {

 const calculateBAC = () => {

  const r = gender === "male" ? 0.68 : 0.55;

  let totalAlcohol = 0;

  drinks.forEach(drink => {

    const grams =
      drink.count *
      drink.volume *
      drink.abv *
      789; //Hustota alkoholu je: 
      // 0.789 g/ml = 789 g/l

    totalAlcohol += grams;

  });

  const bac = (totalAlcohol / (weight * r)) - (0.15 * hours);

  return Math.max(bac, 0);
};

  const bac = calculateBAC();

  let status = "safe";
  if (bac > 0.5) status = "warning";
  if (bac > 1.2) status = "danger";

  const hoursToDrive = bac / 0.15;

  return (

    <div className="resultBox">

      <h2>Odhad promile</h2>

      <div className={`resultValue ${status}`}>
        {bac.toFixed(2)} ‰
      </div>

      <p>
        Řídit můžete přibližně za{" "}
        <strong>
          {hoursToDrive > 0 ? hoursToDrive.toFixed(2) : 0} hodin
        </strong>
      </p>

      <p className="oznamko">
          {"Pijte s (M)írou"}
      </p>

    </div>
  );
};

export default Result;