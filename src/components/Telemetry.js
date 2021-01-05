export default function Telemetry({
  velocity,
  altitude,
  toggleStream,
  isViewingStream,
}) {
  const numberFormat = (number) => {
    if (!number) return 0;
    return Intl.NumberFormat("en-CA").format(number);
  };
  return (
    <div className="fixed z-10 bg-black">
      <button
        type="button"
        className="block py-3 focus:outline-none w-full text-white font-mono text-center border-r-2 border-b-2 border-gray-900"
        onClick={() => toggleStream()}
      >
        Toggle Stream{" "}
        {isViewingStream ? (
          <span className="uppercase font-bold text-red-500">Off</span>
        ) : (
          <span className="uppercase font-bold text-green-500">On</span>
        )}
      </button>
      <div className="px-6 py-4">
        <h2 className="text-white font-mono font-semibold tracking-wide">
          Telemetry
        </h2>
        <div className="mt-3">
          <ul>
            <li className="font-mono text-white">
              <span className="font-semibold mr-4">Velocity</span>
              {numberFormat(velocity / (60 * 60))} km/s
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
