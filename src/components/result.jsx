const Result = ({ weight, gender, drinks, hours }) => {

  // funkce pro vypocet promile
  const calculateBAC = () => {

    // r je koeficient podle pohlavi
    const r = gender === "male" ? 0.68 : 0.55;

    // celkove mnozstvi alkoholu v gramech
    let totalAlcohol = 0;

    // projde vsechny drinky
    drinks.forEach(drink => {

      // vypocet gramu alkoholu z objemu a procent
      const grams =
        drink.count *
        drink.volume *
        drink.abv *
        789; // hustota alkoholu

      // pricteni do celkove hodnoty
      totalAlcohol += grams;

    });

    // vzorec pro vypocet promile v krvi
    const bac = (totalAlcohol / (weight * r)) - (0.15 * hours);

    // zajisti ze vysledek nebude zaporny
    return Math.max(bac, 0);
  };

  // ulozeni vysledku vypoctu
  const bac = calculateBAC();

  // stav podle hodnoty promile
  let status = "safe";
  if (bac > 0.5) status = "warning"; // zvysene riziko
  if (bac > 1.2) status = "danger"; // nebezpecne hodnoty

  // odhad casu do vystrizliveni
  const hoursToDrive = bac / 0.15;

  return (

    <div className="resultBox">

      <h2>Odhad promile</h2>

      {/* zobrazeni hodnoty s barvou podle stavu */}
      <div className={`resultValue ${status}`}>
        {bac.toFixed(2)} ‰
      </div>

      <p>
        {/* vypocet a zobrazeni casu */}
        Řídit můžete přibližně za{" "}
        <strong>
          {hoursToDrive > 0 ? hoursToDrive.toFixed(1) : 0} hodin
        </strong>
      </p>

      {/* informacni text */}
      <p className="oznamko">
        {"Pijte s (M)írou"}
      </p>

    </div>
  );
};

export default Result;