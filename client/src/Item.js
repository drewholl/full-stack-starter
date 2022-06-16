function Park({ title, text }) {
  return (
    <div className="card col-3">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-dark">
          Parking Details
        </a>
      </div>
    </div>
  );
}
export default Park;
