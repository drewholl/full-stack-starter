import { useState, useEffect } from 'react';
import Park from './Item';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(function () {
    const request = fetch('https://api.airtable.com/v0/apphJNExV9uurOwBp/Parking?api_key=keyKRzWAPS1yLYnFH');
    request
      .then((response) => response.json())
      .then((data) => {
        setItems(data.records);
        console.log(data);
      });
  }, []);

  return (
    <main className="container">
      <h1>San Francisco Public Parking</h1>
      <h4>List View</h4>
      <div>
        {items.map((item) => (
          <Park id={item.id} title={item.fields.Name} text={item.fields.Address} image={item.fields.Pictures[0].url} />
        ))}
      </div>
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

export default Home;
