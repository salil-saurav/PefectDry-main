import "./Map.css";

const Map = () => {
  return (
    <>
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.696551258271!2d174.92818567673044!3d-36.969303486251334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4d6979632d83%3A0x30566e7e7a633f0f!2sPerfect%20Dry%20-%20Carpet%20Cleaning%20and%20Flood%20Restoration!5e0!3m2!1sen!2sin!4v1694002767399!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen={true as any}
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
