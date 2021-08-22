import React from "react";
import therapistData from "../data/therapistData";
import Therapist from "./Therapist";
import axios from 'axios';
import key from '../util/.env';

function TherapistList() {
  
  const getMap = async () => {
  const google = await axios.get(`src="https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`)
    .then(
      function initMap() {
        const options = {
          zoom: 8,
          center: { lat: 40.76541908162676, lng: -73.98061610772974 } 
        }
        const map = new google.maps.Map(document.getElementsByClassName('map'), options)
      
      }

    )
    }

  return (
    <div>
      <section className='list'>
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

      <section className='map'>

      </section>
    </div>
  );
}

export default TherapistList;
