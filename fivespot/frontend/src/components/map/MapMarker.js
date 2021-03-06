import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import CrayonGreen from './CrayonGreen';


const center = {
	lat: 45.42153,
	lng: -75.697
};


function MarkerMap() {

const[markers, setMarkers] = React.useState([]);

	return (
	<GoogleMap 
	defaultZoom={10} 
	defaultCenter={center}
	defaultOptions={{ styles : CrayonGreen }}
  onClick={(event) => {
      setMarkers(current => [...current, {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
      },
      ]);
    }}
	>
    {markers.map(marker => <Marker position={{ lat: marker.lat, lng: marker.lng }}/>)}
    }
  </GoogleMap>
    
);
}

const WrappedMap = withScriptjs(withGoogleMap(MarkerMap));


export class MapMarker extends Component {

    render() {
        return (
               <div style={{ width: "26vw", height: "35vh" }}>
               <WrappedMap 
               googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyD0XoftgsSyzc2rnxugt6G2h3ap9-AOsgU"}
               loadingElement={<div style={{ height: "100%" }}  /> }
               containerElement={<div style={{ height: "100%" }} /> }
               mapElement={<div style={{ height: "100%" }} /> }
               />
               </div>
        );
    }
}

export default MapMarker 

