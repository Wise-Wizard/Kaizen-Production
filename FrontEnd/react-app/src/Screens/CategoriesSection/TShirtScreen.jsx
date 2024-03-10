import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/LoaderComponent/Loader";
import Error from "../../Components/Error";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../ProductSection/ProductScreen";
import productListAction from "../../Actions/productsAction";
import { useMediaQuery } from "react-responsive";
import MultiGridCarousel from "../../Components/HomeComponents/Caraousel";

function TShirtScreen() {
  const dispatch = useDispatch();
  const tShirtList = useSelector((state) => state.productList);
  const { loading, error, products } = tShirtList;

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
          <h1 className="welcome-heading">T-Shirts</h1>
          {isMobile ? (
            <Row>
              <Col md={12}>
                {/* Render the carousel for mobile view */}
                <MultiGridCarousel
                  products={products.filter(
                    (product) => product.category === "T-Shirt"
                  )}
                />
              </Col>
            </Row>
          ) : (
            <Row>
              {products
                .filter((product) => product.category === "T-Shirt")
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

export default TShirtScreen;
