import React from "react";
import therapistData from "../data/therapistData";
import Therapist from "./Therapist";
import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
import Geocode from "react-geocode";
import AutoComplete from 'react-google-autocomplete';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

Geocode.setApiKey("AIzaSyBnoGPtQhDDR4JWf2DRgjVJFi-FQNrWt70")

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
    };
  };

  // state = {
  //   address: "",
  //   city: "",
  //   area: "",
  //   state: "",
  //   zoom: 15,
  //   height: 400,
  //   mapPosition: {
  //     lat: 40.76541908162676,
  //     lng: -73.98061610772974,
  //   },
  //   markerPosition: {
  //     lat: 40.76541908162676,
  //     lng: -73.98061610772974,
  //   },
  // };


  getCity = ( addressArray ) => {
    let city = '';

    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
        city = addressArray[i].long_name
        return city;
    };
  };
};

  getArea = ( addressArray ) => {
    let area = '';
    
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray.length; j++) {
          if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  }

  getState = ( addressArray ) => {
    let state = '';

    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
          state = addressArray[i].long_name;
          return state;
      }
    }
  }
}


  // onMarkerDragEnd = (event) => {
  //   let newLat = event.latLng.lat();
  //   let newLng = event.latLng.lng();

  //   Geocode.fromLatLng(newLat, newLng)
  //   .then(response => {
  //     const address = response.results[0].formatted_address,
  //           addressArray = response.results[0].address_components,
  //           city = this.getCity(addressArray),
  //           area = this.getArea(addressArray),
  //           state = this.getState(addressArray) 

  //           this.setState({
  //             address: ( address ) ? address: '',
  //             area: ( area ) ? area : '',
  //             city: ( city ) ? city : '',
  //             state : ( state ) ? state : '',
  //             markerPosition :  {
  //               lat: newLat,
  //               lng: newLng
  //             },
  //            mapPosition: {
  //             lat: newLat,
  //             lng: newLng
  //            }     
  //       })
  //   });
    
  // };

  onPlaceSelected = (place) => {
    const address = place.formatted_address,
      addressArray = place.address_components,
      city = this.getCity(addressArray),
      area = this.getArea(addressArray),
      state = this.getState(addressArray), 
      newLat = place.geometry.location.lat(),
      newLng = place.geometry.location.lng()

      this.setState({
        address: ( address ) ? address: '',
        area: ( area ) ? area : '',
        city: ( city ) ? city : '',
        state: ( state ) ? state : '',
        markerPosition :  {
          lat: newLat,
          lng: newLng
        },
       mapPosition: {
        lat: newLat,
        lng: newLng
       },
    }) 
  }

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
    const { zoom, height, mapPosition, markerPosition } = this.state;

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={zoom}
        defaultCenter={{ lat: mapPosition.lat, lng: mapPosition.lng }}
      >

        {markerPosition.map((location) => {
          return (
            <Marker
              draggable={false}
              // onDragEnd={this.onMarkerDragEnd}
              position={{ lat: location[0], lng: location[1]}}
          
           />
          )
      })}

      {/* <AutoComplete style={{ width: "100%", height: '40px', paddingLeft: '16px', marginTop: '2px,', marginBottom: '2rem'}}
        types={['(regions)']}
        onPlaceSelected={this.onPlaceSelected}
      /> */}

      </GoogleMap>
    ));



    return (
      <div style={{ padding: '1rem', margin: '0 auto', maxWidth: 1000 }}>
        <h1>Therapists</h1>
          {/* <Descriptions  bordered>
              <Descriptions.Item label="City">{this.state.city}</Descriptions.Item>
              <Descriptions.Item label="Area">{this.state.area}</Descriptions.Item>
              <Descriptions.Item label="State">{this.state.state}</Descriptions.Item>
              <Descriptions.Item label="Address">{this.state.address}</Descriptions.Item>
              
            </Descriptions>, */}

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
