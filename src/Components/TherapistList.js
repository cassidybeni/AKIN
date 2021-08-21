import React from "react";
import therapistData from "../data/therapistData";
import Therapist from "./Therapist";

function TherapistList() {
  return (
    <div>
      <section>
        <ul>
          {therapistData.map((therapist) => {
            return (
              <li>
                <Therapist key={therapist.id} therapist={therapist} />
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <img src='' alt='' />
      </section>
    </div>
  );
}

export default TherapistList;
