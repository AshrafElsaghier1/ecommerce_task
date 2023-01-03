import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, categoryFilter, setActive } from "../../features";
import { Loading, SingleProduct } from "../";
import styles from "./products.module.css";
import { Container, Form } from "react-bootstrap";

const Products = () => {
  let { products, isLoading, filteredProducts, isError } = useSelector(
    (state) => state.products
  );

  const { active } = useSelector((state) => state.activeCategory);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const categoriesFilter = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  const filteredHandler = (category, id) => {
    const activeElement = categoriesFilter.filter((item, idx) => idx === id);
    activeElement && dispatch(setActive(id));
    dispatch(categoryFilter(category));
  };
  const changeTitleCategoryHandler = (e) => {
    dispatch(categoryFilter(e.target.value));
  };
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
            <div className=" d-none d-md-flex  gap-2 justify-content-center">
              {categoriesFilter.map((category, index) => (
                <button
                  onClick={() => filteredHandler(category, index)}
                  key={index}
                  className={`border-0 btn btn-sm fw-semibold position-relative fs-6 text-capitalize
                  ${styles.btnFilter} ${
                    index === active ? styles.btnActive : ""
                  } `}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className=" d-block d-md-none   ">
              <Form.Select
                size="md"
                onChange={changeTitleCategoryHandler}
                className={styles.filterSelected}
              >
                {categoriesFilter.map((category, index) => (
                  <option
                    key={index}
                    className={styles.filterOption}
                    value={category}
                  >
                    {category}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  my-5">
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
