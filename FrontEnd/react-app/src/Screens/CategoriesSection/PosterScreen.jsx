import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/LoaderComponent/Loader";
import Error from "../../Components/Error";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../ProductSection/ProductScreen";
import productListAction from "../../Actions/productsAction";
import { useMediaQuery } from "react-responsive";
import MultiGridCarousel from "../../Components/HomeComponents/Caraousel";

function PosterScreen() {
  const dispatch = useDispatch();
  const posterList = useSelector((state) => state.productList);
  const { loading, error, products } = posterList;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  // Use the useMediaQuery hook to get the screen width
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error variant="danger" children={error} />
      ) : (
        <>
          <h1 className="welcome-heading">Posters</h1>
          {isMobile ? (
            <Row>
              <Col md={12}>
                {/* Render the carousel for mobile view */}
                <MultiGridCarousel
                  products={products.filter(
                    (product) => product.category === "Poster"
                  )}
                />
              </Col>
            </Row>
          ) : (
            <Row>
              {products
                .filter((product) => product.category === "Poster")
                .map((product) => (
                  <Col key={product._id} md={3}>
                    <ProductCard productDetails={product} />
                  </Col>
                ))}
            </Row>
          )}
        </>
      )}
    </>
  );
}

export default PosterScreen;
