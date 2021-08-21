import React from "react";
import therapistData from "../data/therapistData";
import Therapist from "./Therapist";

function TherapistList() {
  return (
    <div>
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
