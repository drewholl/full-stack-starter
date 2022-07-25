import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Api from './Api';

function ParkingLotForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    Name: '',
    Address: '',
    Pictures: '',
  });

  useEffect(() => {
    if (id) {
      Api.parkinglots.get(id).then((response) => setData(response.data));
    }
  }, [id]);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      let response;
      if (id) {
        response = await Api.parkinglots.update(id, data);
      } else {
        response = await Api.parkinglots.create(data);
      }
      navigate(`/detail/${response.data.id}`);
    } catch (error) {
      console.log(error);
    }
  }

  function onChange(event) {
    const newData = { ...data };
    newData[event.target.name] = event.target.value;
    setData(newData);
  }

  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <h1>New Parking Lot</h1>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="Name">
                Name
              </label>
              <input type="text" className="form-control" id="Name" name="Name" onChange={onChange} value={data.Name} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Text">
                Address
              </label>
              <input type="text" className="form-control" id="Address" name="Address" onChange={onChange} value={data.Address} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Pictures">
                Pictures
              </label>
              <input type="text" className="form-control" id="Pictures" name="Pictures" onChange={onChange} value={data.Pictures} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Phone_Number">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="Phone_Number"
                name="Phone_Number"
                onChange={onChange}
                value={data.Phone_Number}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Type">
                Type
              </label>
              <input type="text" className="form-control" id="Type" name="Type" onChange={onChange} value={data.Type} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Hours_Open">
                Hours Open
              </label>
              <input type="text" className="form-control" id="Hours_Open" name="Hours_Open" onChange={onChange} value={data.Hours_Open} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Hourly_Rate">
                Hourly Rate
              </label>
              <input
                type="text"
                className="form-control"
                id="Hourly_Rate"
                name="Hourly_Rate"
                onChange={onChange}
                value={data.Hourly_Rate}
              />
            </div>
            <button type="submit" className="btn btn-light">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
export default ParkingLotForm;
