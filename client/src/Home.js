import { useState, useEffect } from 'react';
import Park from './Item';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(function () {
    fetch('/api/parkinglots')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <main className="container">
      <h1>San Francisco Public Parking</h1>
      <h4 className="header">List View</h4>
      <div className="row">
        {items.map((item) => (
          <Park id={item.id} title={item.Name} text={item.Address} image={item.Pictures} />
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
