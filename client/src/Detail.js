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
      <h4>Detail View</h4>
    </main>
  );
}
export default Detail;
