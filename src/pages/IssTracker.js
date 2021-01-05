import { useState, useEffect } from "react";
import Map from "../components/Maps/Map";
import Telemetry from "../components/Telemetry";
import IssStream from "../components/IssStream";

export default function IssTracker() {
  const [map, setMap] = useState(null);
  const [path, setPath] = useState(null);
  const [isViewingStream, setIsViewingStream] = useState(false);
  const [velocity, setVelocity] = useState(null);
  const [altitude, setAltitude] = useState(null);
  const [pathCoords, setPathCoords] = useState([]);

  const toggleStream = () => {
    setIsViewingStream(!isViewingStream);
  };

  const getIssData = () => {
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
      .then((res) => res.json())
      .then((data) => {
        const latLng = { lat: data.latitude, lng: data.longitude };
        setPathCoords((coords) => [...coords, latLng]);
        setAltitude(data.altitude);
        setVelocity(data.velocity);
      });
  };

  useEffect(() => {
    if (!map) {
      return;
    }

    setPath(
      new window.google.maps.Polyline({
        geodesic: true,
        strokeColor: "yellow",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map,
      })
    );

    getIssData(path);
    const issPoll = setInterval(() => {
      getIssData(path);
    }, 3000);

    return () => {
      clearInterval(issPoll);
    };
  }, [map]);

  useEffect(() => {
    if (!path) {
      return;
    }

    const coord = pathCoords.slice(-1).pop();
    path.setPath(pathCoords);
    map.panTo(coord);
  }, [pathCoords]);

  return (
    <>
      <Telemetry
        altitude={altitude}
        velocity={velocity}
        toggleStream={toggleStream}
        isViewingStream={isViewingStream}
      />
      <Map mapCallback={(map) => setMap(map)} />
      {isViewingStream && <IssStream />}
    </>
  );
}
