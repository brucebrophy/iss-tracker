export default function Stream() {
  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-screen h-screen"
        title="ISS Video Feed"
        width="480"
        height="270"
        src="https://ustream.tv/embed/17074538?autoplay=true"
        scrolling="no"
        allowFullScreen
        webkitallowfullscreen
        frameBorder="0"
        style={{ border: "0 none transparent" }}
      ></iframe>
    </div>
  );
}
