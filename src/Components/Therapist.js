import React from "react";

function Therapist({ therapist }) {

  
  return (
    <div>
        <div className="therapist-container">
            <div className="therapist-profile">
                <h3>{therapist.name}</h3>
                <img className="images" src={therapist.img} alt={therapist.name} />
                <p>{therapist.title}</p>
            </div>
        </div>
    </div>
  );
}



export default Therapist;
