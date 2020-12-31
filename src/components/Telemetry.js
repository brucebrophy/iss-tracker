export default function Telemetry({ velocity, altitude }) {
  const numberFormat = (number) => {
    if (!number) return 0;
    return Intl.NumberFormat("en-CA").format(number);
  };
  return (
    <div className="fixed z-10 bg-black">
      <div className="px-6 py-4">
        <h2 className="text-white font-mono font-semibold">Telemetry</h2>
        <div className="mt-3">
          <ul>
            <li className="font-mono text-white">
              <span className="font-semibold mr-4">Velocity</span>
              {numberFormat(velocity)} km/s
            </li>
            <li className="font-mono text-white">
              <span className="font-semibold mr-4">Altitude</span>
              {numberFormat(altitude)} km
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
