import React from "react";
import therapistData from "../Data/therapistData";
import Therapist from "./Therapist";

function TherapistList() {
  return (
    <ul>
      {therapistData.map((therapist) => {
        return (
          <li>
            <Therapist key={therapist.id} therapist={therapist} />
          </li>
        );
      })}
    </ul>
  );
}

export default TherapistList;
