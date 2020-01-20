import React from 'react';
import GoogleMapReact from 'google-map-react';

import './styles.css';

const Marker = ({ children }) => children;

function MyMap({ devs }) {
  return (
    <div>
      <div className='map-box'>
        <div style={{ height: "70vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_API_GOOGLEMAPS }}
            defaultCenter={{ lat: -22.9261312, lng: -43.261952 }}
            defaultZoom={10}
            yesIWantToUseGoogleMapApiInternals
          >
            {devs.map(dev => (
              <Marker
                key={dev._id}
                lat={dev.location.coordinates[1]}
                lng={dev.location.coordinates[0]}
              >
                <div className="map-marker">
                  <button
                    className="dev-marker"
                    onClick={() => console.log(dev.name)}>
                    <img src={dev.avatar_url} alt={dev.name} />
                  </button>
                </div>
              </Marker>
            ))}
          </GoogleMapReact>
        </div>
      </div>
    </div >
  );
}

export default MyMap;
