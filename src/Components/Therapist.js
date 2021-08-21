import React from "react";

function Therapist({ therapist }) {
  return (
    <div>
      <h3>{therapist.name}</h3>
      <h4>{therapist.title}</h4>
    </div>
  );
}

export default Therapist;
