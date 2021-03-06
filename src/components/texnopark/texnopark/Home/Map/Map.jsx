
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Style from './../style'


const containerStyle = {
  width: '80%',
  height: '600px',
    position: 'absolute',
    margin: '1400vh 0 0 0',
    // top: '1500vh',

};

const center = {
  lat: 40.74748454993712,
  lng: 72.35956192016602
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAIkOi1afVTCC0nJtEwZCLIwaimfPTsFEY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    // setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        ignoreHidden={true}
        onLoad={onLoad}
        visible={true}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)