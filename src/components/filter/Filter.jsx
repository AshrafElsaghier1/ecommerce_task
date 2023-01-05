import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { categoryFilter, searchFilter, setActive } from "../../features";
import styles from "./filter.module.css";

const Filter = ({ products }) => {
  const { active } = useSelector((state) => state.activeCategory);
  let { filteredProductsByCategory } = useSelector((state) => state.products);
  const dispatch = useDispatch();

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

  const searchHandler = (e) => {
    const arr = filteredProductsByCategory.filter((item) =>
      item.title.toLowerCase().includes(e.target.value)
    );
    console.log({ arr });
  };

  return (
    <>
      <div className="mb-2  d-flex justify-content-between align-items-center py-2">
        <>
          <Form.Control
            type="text"
            placeholder="SEARCH..."
            className={`${styles.inputField}`}
            onChange={searchHandler}
          />
        </>
      </div>

      <div className=" d-none d-md-flex  gap-2 justify-content-center">
        {categoriesFilter.map((category, index) => (
          <button
            onClick={() => filteredHandler(category, index)}
            key={index}
            className={`border-0 btn btn-sm fw-semibold position-relative fs-6 text-capitalize
      ${styles.btnFilter} ${index === active ? styles.btnActive : ""} `}
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
    </>
  );
};

export default Filter;
