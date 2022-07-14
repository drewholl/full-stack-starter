import { Link } from 'react-router-dom';

function Park({ id, title, text, image }) {
  return (
    <div className="col-3">
      <div className="card">
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <Link to={`/detail/${id}`} className="btn btn-dark">
            Parking Details
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Park;
