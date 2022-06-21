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
      <h4>Map View</h4>
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
