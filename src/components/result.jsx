const Result = ({ weight, gender, drinks, hours }) => {

  const calculateBAC = () => {
    const r = gender === "male" ? 0.68 : 0.55;

    let totalAlcohol = 0;

    drinks.forEach(drink => {
      const grams = drink.count * drink.volume * (drink.abv / 100) * 0.789;
      totalAlcohol += grams;
    });

    const bac = (totalAlcohol / (weight * 1000 * r)) * 100 - hours * 0.015;

    return Math.max(bac, 0);
  };

  const bac = calculateBAC();

  let status = "safe";
  if(bac > 0.5) status = "warning";
  if(bac > 1.2) status = "danger";

  return (
    <div className="resultBox">
      <h2>Estimated BAC</h2>
      <div className={`resultValue ${status}`}>
        {bac.toFixed(3)} ‰
      </div>
    </div>
  );
};

export default Result;