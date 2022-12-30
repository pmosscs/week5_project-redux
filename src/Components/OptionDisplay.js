import React from "react";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

import { useDispatch, useSelector } from "react-redux";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
  let currentPotentials = useSelector(selectPotentials);
  console.log("in option display ", currentPotentials);
  const dispatch = useDispatch();

  return (
    <div className="stack">
      {currentPotentials.map((x, i) => {
        return (
          <h2
            onClick={() => {
              console.log("clicked");
              dispatch(setDisplayCountry(currentPotentials[i]));
            }}
          >
            {x.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
