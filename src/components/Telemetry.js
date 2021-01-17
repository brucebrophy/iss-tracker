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
      <div className="px-3 py-3">
        <div>
          <ul>
            <li className="font-mono mb-1 text-xs text-white">
              <span className="font-semibold mr-4">Velocity</span>
              {numberFormat(velocity / (60 * 60))} km/s
            </li>
            <li className="font-mono text-xs text-white">
              <span className="font-semibold mr-4">Altitude</span>
              {numberFormat(altitude)} km
            </li>
          </ul>
        </div>
      </div>
      <button
        type="button"
        className="block py-2 focus:outline-none w-full text-xs text-white font-mono text-center border-2 border-l-0 border-gray-900"
        onClick={() => toggleStream()}
      >
        Toggle Stream{" "}
        {isViewingStream ? (
          <span className="uppercase font-bold text-red-500">Off</span>
        ) : (
          <span className="uppercase font-bold text-green-500">On</span>
        )}
      </button>
    </div>
  );
}
