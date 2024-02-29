import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from '@vis.gl/react-google-maps'
import * as React from 'react'

export function Map(props) {
  const position = { lat: props.lat, lng: props.lng }

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
      <GoogleMap center={position} zoom={props.zoom}>
        <Marker position={position} />
      </GoogleMap>
    </APIProvider>
  )
}
