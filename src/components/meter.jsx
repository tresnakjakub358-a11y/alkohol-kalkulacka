import React, { useState } from "react";
import alcoholTypes from "./alcoholList.js";
import Result from "./result";

const meter = () => {
    const [weight, setWeight] = useState(80);
  const [gender, setGender] = useState("male");
  const [hours, setHours] = useState(1);

  const [drinks, setDrinks] = useState(
    alcoholList.map(d => ({ ...d, count: 0 }))
  );

  const updateDrink = (index, value) => {
    const updated = [...drinks];
    updated[index].count = Number(value);
    setDrinks(updated);
  };

}