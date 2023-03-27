import { useState } from "react";
import { MarkerF, InfoWindowF } from "@react-google-maps/api";
import StoresJSON from "../../../data/storeLocations.json";
import { InfoWindowContent } from "../infoWindow";

export const Marker = () => {
  console.log(StoresJSON);
  const activeStores = StoresJSON.filter((store) => store.isActive === true);
  const [infoWindowStatus, setInfoWindowStatus] = useState(false);
  const [activeInfoWindow, setActiveInfoWindow] = useState("");

  const toggleInfoWindow = (infoWindowsId) => {
    if (activeInfoWindow !== infoWindowsId) {
      setActiveInfoWindow(infoWindowsId);
      setInfoWindowStatus(true);
    } else {
      setInfoWindowStatus(!infoWindowStatus);
    }
  };
  const markers = activeStores.map((store) => (
    <MarkerF
      key={store.NO}
      animation="DROP"
      position={{ lat: store.Latitude, lng: store.Longitude }}
      onClick={() => {
        toggleInfoWindow(store.NO);
      }}
    >
      {infoWindowStatus && store.NO === activeInfoWindow && (
        <InfoWindowF
          position={{ lat: store.Latitude, lng: store.Longitude }}
          onCloseClick={() => {
            toggleInfoWindow(store.NO);
          }}
        >
          <InfoWindowContent
            partner={store.Partner}
            address={`${store.Address}, ${store.City}, ${store.StateCode}, ${store["Zip Code"]}`}
            email={store.Email}
            phone={store.Phone}
            logo={store.StoreLogo}
          />
        </InfoWindowF>
      )}
    </MarkerF>
  ));
  return markers;
};
