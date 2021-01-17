import GoogleMapReact from "google-map-react";
import MapStyles from "./styles";

export default function Map({ mapCallback }) {
  return (
    <div className="w-screen h-screen">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={[43.653, -79.383]}
        defaultZoom={0}
        onGoogleApiLoaded={({ map }) => mapCallback(map)}
        yesIWantToUseGoogleMapApiInternals
        options={{
          minZoom: 1,
          maxZoom: 8,
          backgroundColor: "black",
          zoomControl: true,
          fullscreenControl: false,
          styles: MapStyles,
        }}
      />
    </div>
  );
}
