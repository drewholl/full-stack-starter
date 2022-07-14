import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(
    function () {
      if (id) {
        fetch(`https://api.airtable.com/v0/apphJNExV9uurOwBp/Parking/${id}?api_key=keyKRzWAPS1yLYnFH`)
          .then((response) => response.json())
          .then((data) => setData(data));
      }
    },
    [id]
  );

  return (
    <main className="container">
      <h1>San Francisco Public Parking</h1>
      <h4 className="header">Detail View</h4>
      <div className="detail">
        <div className="card mb-3" id="space">
          <img src={data?.fields?.Pictures[0].url} class="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">{data?.fields?.Name}</h4>
            <h5 className="card-title">Address:</h5>
            <p className="card-text">{data?.fields?.Address}</p>
            <h5 className="card-title">Phone Number:</h5>
            <p className="card-text">{data?.fields?.Phone_Number}</p>
            <h5 className="card-title">Type:</h5>
            <p className="card-text">{data?.fields?.Type}</p>
            <h5 className="card-title">Hours Open:</h5>
            <p className="card-text">{data?.fields?.Hours_Open}</p>
            <h5 className="card-title">Hourly Rate:</h5>
            <p className="card-text">{data?.fields?.Hourly_Rate}</p>
          </div>
        </div>
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
export default Detail;
