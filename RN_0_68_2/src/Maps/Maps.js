import React from "react";
import { Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

function Map(){
    return(
    <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{flex:1}}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
    >
        <Marker
        coordinate={{ latitude : 37.78825 , longitude : -122.4324 }}
        />
    </MapView>
    )
}

export default Map;