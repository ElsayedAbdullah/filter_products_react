import Product from "./Product";
import products from "../products-data";
import { useState } from "react";

const ProductList = () => {
  // assign api products in state
  const [productsNew, setProductsNew] = useState(products);
  const [searchItem, setSearchItem] = useState("");

  // delete product
  const deleteProduct = id => {
    const productsAfterDelete = productsNew.filter(el => el.id !== id);
    setProductsNew(productsAfterDelete);
    // console.log(id);
  };

  // map the products after saving into state
  // const productsArray = searchProducts.map(el => <Product deleteProduct={deleteProduct} key={el.id} {...el} />);

  // filter products by category
  const filterResult = catItem => {
    const result = products.filter(el => el.category === catItem);
    setProductsNew(result);
  };

  // function to search products
  const searchProducts = () => {
    if (searchItem !== 0) {
      return productsNew.filter(el => el.title.toLowerCase().includes(searchItem.toLowerCase()));
    }
    return productsNew;
  };

  return (
    <div className="container">
      <div className="my-5 w-25 m-auto text-center">
        <label htmlFor="search-product" className="text-info mb-2">Search Products</label>
        <input type="text" id="search-product" className="form-control" placeholder="Search..." onChange={e => setSearchItem(e.target.value)} />
      </div>
      <hr  className="mb-4 border-primary"/>
      <div className="row">
        <div className="col-lg-2">
          <h3 className="mb-3">Categories</h3>
          <button className="btn btn-warning d-block mb-3" onClick={() => filterResult("electronics")}>
            electronics
          </button>
          <button className="btn btn-warning d-block mb-3" onClick={() => filterResult("jewelery")}>
            jewelery
          </button>
          <button className="btn btn-warning d-block mb-3" onClick={() => filterResult("men's clothing")}>
            men's clothing
          </button>
          <button className="btn btn-warning d-block mb-3" onClick={() => filterResult("women's clothing")}>
            women's clothing
          </button>
          <button className="btn btn-warning d-block mb-3" onClick={() => setProductsNew(products)}>
            All
          </button>
        </div>
        <div className="col-lg-10">
          <div className="row">{ searchProducts().map(el => <Product deleteProduct={deleteProduct} key={el.id} {...el} />)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
