const Product = props => {
  const handleDelete = id => {
    props.deleteProduct(id);
  };

  return (
    <div className="col-md-6 col-lg-3 box">
      <div className="card product mb-5">
        <img className="img-fluid card-img-top" src={props.image} alt={props.title} />
        <div className="card-body">
          <h4 className="my-4">{props.title}</h4>
          <p>{props.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-secondary d-inline-block p-2">${props.price}</span>
            <button className="btn btn-danger" onClick={() => handleDelete(props.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
