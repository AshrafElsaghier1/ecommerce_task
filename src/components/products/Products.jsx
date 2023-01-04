import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features";
import { Loading, SingleProduct } from "../";
import styles from "./products.module.css";
import { Container } from "react-bootstrap";
import Filter from "../filter/Filter";

const Products = () => {
  let { products, isLoading, filteredProducts, isError } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productsRendering = (arr) => {
    return arr.map((products) => {
      return <SingleProduct data={products} key={products.id} />;
    });
  };

  return (
    <section className={`${styles.productsContainer} py-5`}>
      <Container>
        {isLoading ? (
          <div className="position-relative">
            <Loading />
          </div>
        ) : isError ? (
          <h2 className="alert alert-danger"> E R R O R .... </h2>
        ) : (
          <>
            <Filter products={products} />

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  my-3 my-md-5">
              {filteredProducts.length === 0
                ? productsRendering(products)
                : productsRendering(filteredProducts)}
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default Products;
