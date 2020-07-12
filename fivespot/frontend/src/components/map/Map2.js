import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import CrayonGreen from './CrayonGreen';
import MapMarker from './MapMarker';



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
    <Marker position={{ lat: 43.889585, lng: -79.229387 }} label={1}/>
    <Marker position={{ lat: 43.889585, lng: -79.229387 }} label={2}/>
    <Marker position={{ lat: 43.889585, lng: -79.229387 }} label={3}/>
    <Marker position={{ lat: 43.889585, lng: -79.229387 }} label={4}/>
    <Marker position={{ lat: 43.889585, lng: -79.229387 }} label={5}/>
    
  </GoogleMap>
);}


const WrappedMap = withScriptjs(withGoogleMap(Mapp));



export class Map2 extends Component {

    render() {
        return (
               <div style={{ width: "70vw", height: "100vh" }}>
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

export default Map2