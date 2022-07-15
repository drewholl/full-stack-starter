import { useState, useEffect } from 'react';

function Map() {
  const [items, setItems] = useState([]);

  useEffect(function () {
    const request = fetch('https://api.airtable.com/v0/apphJNExV9uurOwBp/Parking?api_key=keyKRzWAPS1yLYnFH');
    request.then((response) => response.json()).then((data) => setItems(data.records));
  }, []);

  return (
    <main className="container">
      <h1>San Francisco Public Parking</h1>
      <h4 className="header">Map View</h4>
      <iframe
        allow="geolocation"
        src="https://data.sfgov.org/Transportation/SFMTA-Map/hwpu-syk3/embed?width=1000&height=625"
        width="1000"
        height="625"
        className="Map"></iframe>
      <br />
      <br />

      <div className="end">
        <a
          href="https://www.sfmta.com/garages-lots?field_garage_services_value=All&field_neighborhoods_target_id=All&field_parking_type_value=All#views-exposed-form-garage-map-block"
          target="_blank">
          Additional information can be found here.
        </a>
      </div>
    </main>
  );
}

export default Map;
