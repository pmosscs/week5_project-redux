import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay);
  return (
    <div className="stack">
      {/* <h1>overview</h1> */}
      <h1>{currentDisplay.name.official}</h1>
      <h2>"{currentDisplay.name.common}"</h2>

      <table className="overview-table">
        <tr>
          <td>Capitol: </td>

          <td>{currentDisplay.capital}</td>
        </tr>
        <tr>
          <td>Population: </td>
          <td>{currentDisplay.population}</td>
        </tr>
        <tr>
          <td>Member of UN: </td>
          <td>{currentDisplay.unMember ? "true" : "false"}</td>
        </tr>
      </table>
    </div>
  );
};

export default Overview;
