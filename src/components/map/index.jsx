import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { Marker } from "./Markers";
import "./map.css";

const containerStyle = {
  width: "500px",
  height: "400px",
  margin: "0 auto",
};

function Map() {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GMAP_APIKEY,
  });

  const [address] = useState("60608");
  const [center, setCenter] = useState({
    lat: 41.85767975878251,
    lng: -87.66228429589937,
  });
  const [map, setMap] = React.useState(null);
  const [zoom, setZoom] = React.useState(8);

  useEffect(() => {
    // console.log("map---->", map);
    if (address && map) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        { address: `zipcode ${address}` },
        function (results, status) {
          const latLngObj = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          };
          setCenter(latLngObj);
        }
      );
      //setZoom(1);
    }
  }, [address, map]);

  const onLoad = React.useCallback(
    function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      //map.fitBounds(bounds);
      //setZoom(1);
      setMap(map);
    },
    [center]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(Map);
