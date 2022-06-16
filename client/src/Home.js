import Park from './Item';

function Home() {
  return (
    <main className="container">
      <h1>San Francisco Public Parking</h1>
      <h4>List View</h4>
      <div>
        <Park title="Californa/Steiner Lot" text="2450 California Street, San Francisco, CA 94155" />
        <Park title="Felton/San Bruno Lot" text="25 Felton Street, San Francisco, CA 94134" />
        <Park title="Norton/Mission Lot" text="20 Norton Street, San Francisco, CA 94112" />
        <Park title="19th Ave/Ocean Lot" text="3000 19th Avenue, San Francisco, CA 94132" />
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
