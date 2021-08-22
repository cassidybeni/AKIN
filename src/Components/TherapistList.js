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
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      city: "",
      area: "",
      state: "NY",
      zoom: 11,
      height: 400,
      mapPosition: {
        lat: 40.730610,
        lng: -73.935242,
      },
      markerPosition: [],
      newCenter: {}
    };
  };

  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat();
  }

  handleOnClickMarker = () => {
    this.setState({
      zoom: 13,
     
    });
  };

  componentDidMount() {
    const coordinates = therapistData.map((therapist) => therapist.location)
    console.log(coordinates)
    this.setState({
      markerPosition: coordinates
    });
  };

  componentWillUnmount() {

  };

  render () {
    const { zoom, height, mapPosition, markerPosition, newCenter } = this.state;

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={zoom}
        defaultCenter={{ lat: mapPosition.lat, lng: mapPosition.lng }}
      >
        {markerPosition.map((location, i) => {
          return (
            <Marker
              key={i}
              draggable={true}
              onDragEnd={this.onMarkerDragEnd}
              position={{ lat: location[0], lng: location[1]}}
              InfoWindow
              onClick={this.handleOnClickMarker}
              center={props.center}
            />
          )
        })}
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
            <li key={therapist.id}>
              <Therapist therapist={therapist} />
            </li>
          );
        })}
      </ul>
      </div>
    );
  }
}

export default TherapistList;
