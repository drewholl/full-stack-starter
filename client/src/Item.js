import { Link } from 'react-router-dom';

function Park({ id, title, text, image }) {
  return (
    <div className="card col-3">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link to={`/detail/${id}`} className="btn btn-dark">
          Parking Details
        </Link>
      </div>
    </div>
  );
}
export default Park;
