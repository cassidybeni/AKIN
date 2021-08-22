import React from "react";
import therapistData from "../data/therapistData";
import Therapist from "./Therapist";
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

class TherapistList extends React.Component {
  state = {
    address: "",
    city: "",
    area: "",
    state: "",
    zoom: 15,
    height: 400,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    },
  }

  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat();

    
  }


  render () {

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        <Marker
          draggable={true}
          onDragEnd={this.onMarkerDragEnd}
          position={{ lat: -34.397, lng: 150.644 }}
          InfoWindow
        />
      </GoogleMap>
    ));



    return (
      <div>

          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnoGPtQhDDR4JWf2DRgjVJFi-FQNrWt70&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        
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
}

export default TherapistList;
