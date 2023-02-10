import React, { useEffect, useState } from "react";
import { PermissionsAndroid, View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from 'react-native-geolocation-service';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const GOOGLE_PLACES_API_KEY = 'AIzaSyCkaHMlRjNoS8Rdt0aRKuMAE4gk1QiGy-4'
const screenWidth = Dimensions.get('window').width;

function Map(){
  const [location, setLocation] = useState({latitude:0,longitude:0});
  async function getPermission(){
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }
  useEffect(()=>{
    getPermission().then(()=>{
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude})},
          (error) => {// See error code charts below.
            console.log(error.code, error.message);},
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    })
  },[])
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#000'}}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{left:0,right:0,top:0,bottom:0,position: 'absolute'}}
        region={{
          //latitude: 37.78825,
          latitude: location.latitude,
          //longitude: -122.4324,
          longitude: location.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
        //coordinate={{ latitude : 37.78825 , longitude : -122.4324 }}
        coordinate={{ latitude : location.latitude, longitude : location.longitude }}/>
      </MapView>
      <GooglePlacesAutocomplete
      styles={{
        description: {
          fontWeight:'bold'
        },
        textInputContainer: {
          backgroundColor: 'rgba(0,0,0,0)',
          top:10, width: screenWidth - 10,
          borderWidth: 0
        },
        textInput: {
          marginLeft:0,
          marginRight:0,
          height: 38,
          color: '#5d5d5d',
          fontSize: 16,
          borderWidth: 0
        },
        listView: {
          backgroundColor: 'rgba(192,192,192,0.9)',
          top: 23
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        },
      }}
      placeholder='Search'
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en',
      }}
      GooglePlacesDetailsQuery={{
        fields:'geomerty'
      }}
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        setLocation({ latitude: details?.geometry?.location.lat, longitude: details?.geometry?.location.lng})
      }}
      onFail={(error) => {console.log(error)}}
    />
    </View>
  )
}

export default Map;