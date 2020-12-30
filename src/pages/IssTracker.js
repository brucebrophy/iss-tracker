import { useState, useEffect } from "react";
import Map from "../components/Maps/Map";

export default function IssTracker() {
  const [map, setMap] = useState(null);
  const [path, setPath] = useState(null);
  const [pathCoords, setPathCoords] = useState([]);

  const getIssData = (path) => {
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
      .then((res) => res.json())
      .then((data) => {
        const latLng = { lat: data.latitude, lng: data.longitude };
        setPathCoords((coords) => [...coords, latLng]);
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
    map.setZoom(5);
  }, [pathCoords]);

  return (
    <>
      <Map mapCallback={(map) => setMap(map)} />
    </>
  );
}
