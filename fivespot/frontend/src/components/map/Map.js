import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import CrayonGreen from './CrayonGreen';


const center = {
	lat: 45.42153,
	lng: -75.697
};


function Mapp() {
	return (
	<GoogleMap 
	defaultZoom={10} 
	defaultCenter={center}
	defaultOptions={{ styles : CrayonGreen }}
	>
    <Marker position={{ lat: 45.42153, lng: -75.697 }}/>
  </GoogleMap>
);}

const WrappedMap = withScriptjs(withGoogleMap(Mapp));


export class Map extends Component {

    render() {
        return (
               <div style={{ width: "50vw", height: "50vh" }}>
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

export default Map

