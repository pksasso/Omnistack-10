import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

import './styles.css';

let devPack = [];
function Map() {

  const [selectedDev, setselectedDev] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -22.9261312, lng: -43.261952 }}
    >
      {devPack.map(dev => (
        <Marker
          key={dev.id}

          position={{

            lat: parseFloat(dev.latitude),
            lng: parseFloat(dev.longitude)
          }}
          icon={{
            url: `${dev.avatar_url}`,
            scaledSize: new window.google.maps.Size(25, 25)
          }}
          onClick={() => { setselectedDev(dev) }}
        />
      ))}
      {
        selectedDev && (
          <InfoWindow
            position={{
              lat: parseFloat(selectedDev.latitude),
              lng: parseFloat(selectedDev.longitude)
            }}
            onCloseClick={() => setselectedDev(null)}
          >
            <div className="div-info">
              <img src={selectedDev.avatar_url} alt="" />
              <h3>{selectedDev.name}</h3>
            </div>
          </InfoWindow>
        )
      }
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function MyMap({ devs }) {
  devPack = [...devs];
  return (
    <div style={{ width: "100%", height: '70vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_GOOGLEMAPS}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}

export default MyMap;
