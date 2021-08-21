import React from "react";
import therapistData from "../Data/therapistData";
import Therapist from "./Therapist";

function TherapistList() {
  return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <ul>
        {therapistData.map((therapist) => {
          return (
            <li>
              <Therapist key={therapist.id} therapist={therapist} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TherapistList;
